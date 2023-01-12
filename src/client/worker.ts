export default null;
declare let self: any;

console.log("service worker loaded");
self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("push recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Travesty Media",
  });
});
