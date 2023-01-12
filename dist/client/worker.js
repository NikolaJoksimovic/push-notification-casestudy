"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
console.log("service worker loaded");
self.addEventListener("push", (e) => {
    const data = e.data.json();
    console.log("push recieved...");
    self.registration.showNotification(data.title, {
        body: "Notified by Travesty Media",
    });
});
//# sourceMappingURL=worker.js.map