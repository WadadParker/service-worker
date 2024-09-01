//  Check first we service worker is supported by the browser or not

if(navigator.serviceWorker) {
    // Register the service worker

    navigator.serviceWorker.register("./sw.js")
    .then(res=> {
        console.log("Service worker registered succesfully")
    })
    .catch((err) => {
        console.log("Error registering service worker")
    })
}
