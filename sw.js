// Service Worker is event driver, and there is a lifecycle that needs to be followed in service worked
// You need to attach event listeners to it because service workers are actually event driven.

// It's a good practice to keep the cache name as a constant variable

const CACHE_NAME = "demo/v1"

self.addEventListener("install", e => {
// install event happens page load

    e.waitUntil(
        // We need to open a new cache here which will be stored in the cache storage
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(["./index.html","./style.css","./script.js"])
        })
    )

});

self.addEventListener("activate", e => {
    // Clean up useless cache
    e.waitUntil(
        caches.keys().then(keyList => {
            // When you delete a key, it returns a promise, hence we use a promise.all to return a success once all useless keys are deleted
            return Promise.all(
                keyList.map(ket => {
                    if(key!==CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        })
    )

});

self.addEventListener("fetch", e => {

    // Offline experience.
    // Whenever a file is requested
    // Fetch from network, update my cache, if no network present then use cache as fallback

    e.respondWith(
        fetch(e.request)
        .then(res=> {
            // update my cache
            const cloneData = res.clone();
            caches.open(CACHE_NAME).then(cache => {
                cache.put(e.request, cloneData)
            })
            return res;
        })
        .catch(()=> {
            return caches.match(e.request).then((file)=>file);
        })
    )

});