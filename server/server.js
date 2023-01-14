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
  "BFEklZmIr03GoqLLEp6qw2iC7Ful36SFLC8nR6vgY1ju9E7BFgTANwLnz1UHiZPVxsuyfNqJC7XXlC5UvRALTjE",
  "gwxNC9Fu7LtTW2xg7pt0r0ZNCAjCSqjQTNJQPzSqrBc"
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/d8zS6l_6kmU:APA91bHiZDaq4IGMYenVrPzq_N1wKr0_sN9gf15pmg80KPMtv_DvOQbfjNBGOif01tgElmHspO2WLJ4vaSEBqQowNP1tiNn19OdhqGqbTTq4r8KJnrqUlLvp4tq2b8EbJtt4VFN8OGVz",
  expirationTime: null,
  keys: {
    p256dh:
      "BGsG5IYVxl8wJZeXv-P26BiZ83QVXDpO84lGpWehLY4qaDimi1dxMTEIDbUos0q4AwrgQ0RaQzTyYFVsO1KDIn4",
    auth: "-A2B0Q6V0tcm1uTrEtPEJQ",
  },
};
webpush.sendNotification(sub, "test message");
