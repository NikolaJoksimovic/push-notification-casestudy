self.addEventListener("install", (event) => {
  console.log("service worker has been installed again");
});

self.addEventListener("activate", (event) => {
  console.log("service worker has been activated again");
});

// ozbiljnije stvari
self.addEventListener("push", (event) => {
  self.registration.sendNotification("test message", {});
});
