import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { watch } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const workspaceRoot = resolve(root, "../..");
const pagePath = join(root, "miku-home-preview.html");
const port = Number(process.env.MIKU_PREVIEW_PORT || 4173);
const clients = new Set();

const staticFiles = new Map([
  ["/assets/miku-home-art/home-slogan-expression.png", join(workspaceRoot, "assets", "miku-home-art", "cow-cat-home-slogan-expression.png")],
  ["/assets/miku-home-art/cow-cat-logo.png", join(workspaceRoot, "assets", "miku-home-art", "cow-cat-logo.png")],
  ["/reference/miku-home-reference.png", join(workspaceRoot, "assets", "miku-home-reference.png")]
]);

const mimeTypes = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml"
};

const reloadScript = `\n<script>\n(() => {\n  const stream = new EventSource('/__miku_reload');\n  stream.addEventListener('reload', () => window.location.reload());\n})();\n</script>\n`;

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

  if (url.pathname === "/__miku_reload") {
    response.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": "*"
    });
    response.write("event: connected\ndata: ready\n\n");
    clients.add(response);
    request.on("close", () => clients.delete(response));
    return;
  }

  if (staticFiles.has(url.pathname)) {
    try {
      const filePath = staticFiles.get(url.pathname);
      const body = await readFile(filePath);
      response.writeHead(200, {
        "Content-Type": mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
        "Cache-Control": "no-store"
      });
      response.end(body);
    } catch (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end(String(error));
    }
    return;
  }

  if (url.pathname === "/" || url.pathname === "/miku-home-preview.html") {
    try {
      const html = await readFile(pagePath, "utf8");
      const body = html.replace("</body>", `${reloadScript}</body>`);
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
      response.end(body);
    } catch (error) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end(String(error));
    }
    return;
  }

  response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Not found");
});

watch(pagePath, { persistent: true }, () => {
  for (const client of clients) client.write("event: reload\ndata: changed\n\n");
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Miku preview: http://127.0.0.1:${port}/`);
  console.log(`Watching: ${pagePath}`);
});
