// Builds docs/index.html (a standalone page for GitHub Pages) from index.html (the Claude artifact source).
// Usage: node build.js
const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
${src}
</body>
</html>
`;
fs.mkdirSync(path.join(__dirname, "docs"), { recursive: true });
fs.writeFileSync(path.join(__dirname, "docs", "index.html"), page);
console.log("Wrote docs/index.html");
