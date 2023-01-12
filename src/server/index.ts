const express = require("express");
import { Request, Response } from "express";

console.log("hello world!");
console.log("this is kinda crazy");

const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
  res.json({ greeting: "Hello world!" });
});

app.listen(port, () => {
  console.log(`🚀 server started at http://localhost:${port}`);
});
