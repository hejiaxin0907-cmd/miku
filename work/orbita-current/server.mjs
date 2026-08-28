import { createServer } from "node:http";
import { watch } from "node:fs";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)));
const port = Number(process.env.PORT || 4178);
const clients = new Set();
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const reloadScript = `
<script>
(() => {
  const stream = new EventSource('/__orbita_reload');
  stream.addEventListener('reload', () => window.location.reload());
})();
</script>
`;

function sendFile(response, filePath) {
  return readFile(filePath).then((body) => {
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(body);
  });
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

  if (url.pathname === "/__orbita_reload") {
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

  const requested = normalize(join(root, url.pathname === "/" ? "index.html" : url.pathname.slice(1)));
  if (!requested.startsWith(`${root}${sep}`)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const body = await readFile(requested);
    const html = extname(requested).toLowerCase() === ".html" ? body.toString().replace("</body>", `${reloadScript}</body>`) : body;
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(requested).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(html);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

watch(join(root, "index.html"), () => {
  for (const client of clients) client.write("event: reload\ndata: changed\n\n");
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Orbita current preview: http://127.0.0.1:${port}/`);
});
