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

// default, granted, denied
const pushNotification = () => {
    const notification = new Notification("It just is test notification, Don't worry about it !", {
        body: "Thanks for visit my site",
        icon: "../img/dish.png"
    });

    notification.onclick = () => {
        // window.location.href = "https://www.youtube.com/watch?v=Jncoj-Gvh9o";
    };
};

if(Notification.permission === 'granted') {
    pushNotification();
} else {
    Notification.requestPermission().then( permission => {
        if(permission  === 'granted') {
            pushNotification();
        }
    });
}