"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
console.log("hello world!");
console.log("this is kinda crazy");
const app = express();
const port = 5000;
app.get("/", (req, res) => {
    res.json({ greeting: "Hello world!" });
});
app.listen(port, () => {
    console.log(`🚀 server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map