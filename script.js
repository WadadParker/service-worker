//  Check first we service worker is supported by the browser or not

if(navigator.serviceWorker) {
    // Register the service worker

    // You can define the scope of the service worker, by default it takes root
    navigator.serviceWorker.register("./sw.js", {
        scope: "./",
    })
    .then(res=> {
        console.log("Service worker registered succesfully")
    })
    .catch((err) => {
        console.log("Error registering service worker")
    })
}
