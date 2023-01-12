require("dotenv").config();

const publicKey = process.env.PUBLIC_KEY;

if ("serviceWorker" in navigator) {
  send().catch((err) => console.error(err));
}

// register service worker SW, register Push, send Push
async function send() {
  // register SW
  console.log("registering service worker...");
  const register = await navigator.serviceWorker.register("/worker", {
    scope: "/",
  });
  console.log("service worker registered...");

  // regiser push
  console.log("register push...");
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: publicKey,
  });
  console.log("push registered...");

  // send push notification
  console.log("sending push...");
  await fetch("/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json",
    },
  });
  console.log("push sent...");
}
