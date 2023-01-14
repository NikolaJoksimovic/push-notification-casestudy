window.addEventListener("load", async () => {
  if ("serviceWorker" in navigator) {
    await navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => {
        console.log("service worker registered", reg);
      })
      .catch((err) => console.log("service worker not registered", err));
  }

  // subscribe button
  const subscribeBtnEl = document.getElementById("sbcrb-btn");
  subscribeBtnEl.addEventListener("click", async () => {
    let sw = await navigator.serviceWorker.ready;
    // server worker se subcribuje na server iz browsersa korisnika i onda pomocu tih subscripsna saljemo notifikacije korisnicima.
    let push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BFEklZmIr03GoqLLEp6qw2iC7Ful36SFLC8nR6vgY1ju9E7BFgTANwLnz1UHiZPVxsuyfNqJC7XXlC5UvRALTjE",
    });
    console.log(JSON.stringify(push));
  });
});
