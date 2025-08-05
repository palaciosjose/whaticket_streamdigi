//simple express server to run frontend production build;
const express = require("express");
const path = require("path");
const compression = require("compression");

const app = express();

// enable gzip compression for all responses
app.use(compression());

// serve static assets with cache headers
app.use(
  express.static(path.join(__dirname, "build"), {
    setHeaders: (res, filePath) => {
      if (path.extname(filePath) === ".html") {
        res.setHeader("Cache-Control", "no-cache");
      } else {
        res.setHeader(
          "Cache-Control",
          "public, max-age=31536000, immutable"
        );
      }
    },
  })
);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 3000);

