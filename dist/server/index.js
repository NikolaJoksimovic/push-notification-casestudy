"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");
const http_status_codes_1 = require("http-status-codes");
const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;
const app = express();
// console.log(path.join(__dirname + "\\..\\client"));
app.use(express.static(path.join(__dirname + "\\..\\client")));
// middleware
app.use(bodyParser.json);
// console.log(publicKey, privateKey);
webpush.setVapidDetails("mailto:test@test.com", publicKey, privateKey);
// Subscribe Route
app.post("/subscribe", (req, res) => {
    // get push subscription object. Proci ce kroz middleware pa ce biti json objekat?
    const subscription = req.body;
    // send ok status
    res.status(http_status_codes_1.StatusCodes.OK).json({});
    // Create payload
    const payload = JSON.stringify({ title: "Push Test" });
    // Pass object into sendNotification
    webpush
        .sendNotification(subscription, payload)
        .catch((err) => console.error(err));
});
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}!`));
//# sourceMappingURL=index.js.map