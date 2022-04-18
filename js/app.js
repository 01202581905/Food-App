if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then((service) => {
        console.log('serviceWorker registered', service);
    })
    .catch((error) => {
        console.log('serviceWorker not registered');
    })
} else{
    console.log("Browser not support serviceWorker");
}