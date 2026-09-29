const http = require("node:http");

// Development-only, fixed destination: this is not a general-purpose proxy.
module.exports = function loginProxy(req, res, next) {
  if (req.url !== "/api/auth/login/GLSC") return next();
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.writeHead(405, { Allow: "POST" });
    return res.end();
  }
  const upstream = http.request(
    "http://192.168.10.69:4000/auth/login/GLSC",
    {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    },
    (response) => {
      res.writeHead(response.statusCode, {
        "Content-Type": response.headers["content-type"] || "application/json",
      });
      response.on("error", () => res.destroy());
      response.pipe(res);
    },
  );
  upstream.setTimeout(12000, () => upstream.destroy(new Error("timeout")));
  upstream.on("error", () => {
    if (res.destroyed) return;
    if (res.headersSent) return res.destroy();
    res.writeHead(502, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "The development server cannot reach the login API. Check that the API is running and reachable on the local network." }));
  });
  req.on("aborted", () => upstream.destroy());
  res.on("close", () => { if (!res.writableFinished) upstream.destroy(); });
  req.pipe(upstream);
};
