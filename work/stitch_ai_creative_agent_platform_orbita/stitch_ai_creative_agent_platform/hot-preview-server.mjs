import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { watch } from "node:fs";
import { extname, join, normalize, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)));
const port = Number(process.env.STITCH_HOT_PORT || 4180);
const clients = new Set();
const entries = new Map([
  ["ai_ai_agent", "AI Chat"],
  ["ai_agent_1", "Design Tools"],
  ["ai_agent_2", "Tasks"]
]);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml"
};

const reloadScript = [
  "<script>",
  "(() => {",
  "  const stream = new EventSource('/__stitch_reload');",
  "  stream.addEventListener('reload', () => window.location.reload());",
  "})();",
  "</script>"
].join("\n");

function safePath(requestPath) {
  const requested = normalize(join(root, requestPath));
  const rel = relative(root, requested);
  return rel && !rel.startsWith("..") && !rel.split(sep).includes("..") ? requested : null;
}

function send(response, status, contentType, body) {
  response.writeHead(status, { "Content-Type": contentType, "Cache-Control": "no-store" });
  response.end(body);
}

function broadcast() {
  for (const client of clients) client.write("event: reload\ndata: changed\n\n");
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", "http://" + (request.headers.host || "localhost"));

  if (url.pathname === "/__stitch_reload") {
    response.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    });
    response.write("event: connected\ndata: ready\n\n");
    clients.add(response);
    request.on("close", () => clients.delete(response));
    return;
  }

  if (url.pathname === "/") {
    response.writeHead(302, { Location: "/ai_ai_agent/" });
    response.end();
    return;
  }

  const match = url.pathname.match(/^\/(ai_ai_agent|ai_agent_1|ai_agent_2)(?:\/|$)/);
  const entry = match?.[1];
  const relativePath = entry ? url.pathname.slice(entry.length + 2) : url.pathname.slice(1);
  const filePath = entry
    ? safePath(join(entry, relativePath || "code.html"))
    : safePath(relativePath);

  if (!filePath) {
    send(response, 403, "text/plain; charset=utf-8", "Forbidden");
    return;
  }

  try {
    let body = await readFile(filePath);
    const type = mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream";
    if (type.startsWith("text/html")) {
      body = Buffer.from(body.toString().replace(/<\/body>/i, reloadScript + "\n</body>"));
    }
    send(response, 200, type, body);
  } catch {
    send(response, 404, "text/plain; charset=utf-8", "Not found");
  }
});

for (const entry of entries.keys()) watch(join(root, entry, "code.html"), broadcast);
for (const sharedFile of ["orbita-adapter.css", "orbita-adapter.js"]) {
  watch(join(root, sharedFile), broadcast);
}

server.listen(port, "127.0.0.1", () => {
  console.log("Stitch hot preview: http://127.0.0.1:" + port + "/");
  for (const [entry, label] of entries) {
    console.log(label + ": http://127.0.0.1:" + port + "/" + entry + "/");
  }
});
