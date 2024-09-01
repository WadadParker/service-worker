# Service Worker

You need to do the following steps to integrate a service worked within your app

## Register

- navigator.serviceWorker is the API for service worker which the chrome browser gives access to
- Before registering the service worker, you need to check whether your browerser/os even supports it or not
- Then register the service worker through the .register() API and give the file path of the service worker inside it
- The register API returns a promise cuz we need to validate whether the service worker was successfully registered or not