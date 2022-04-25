if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then((service) => {
        // console.log('serviceWorker registered', service);
        // Todo when service worker can register
    })
    .catch((error) => {
        // console.log('serviceWorker not registered');
        // do something when browser can't register service worker
    })
} else{
    // console.log("Browser not support serviceWorker");
    // do something when browser can't support service worker
}