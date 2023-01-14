require("dotenv").config();
const express = require("express");
const webpush = require("web-push");
const cors = require("cors");

const app = express();
const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY;
const vapidPublicKey = process.env.VAPID_PUBLIC_KEY;

// console.log(vapidPrivateKey, vapidPublicKey);

webpush.setVapidDetails(
  "mailto:examle@test.org",
  vapidPublicKey,
  vapidPrivateKey
);

let sub = {};
webpush.sendNotification(sub, "test message");
