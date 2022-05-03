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
        body: "Thanks for visit my site", // text for body
        icon: "../img/dish.png", // icon of notficaiton
        // image to display banner image
        image: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/272132934_614582622965361_6091361890239161660_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=v2r2IeyZhToAX9j-nL5&_nc_ht=scontent.fdad3-6.fna&oh=00_AT--SwltdI1ToVDjlDTCCvNgPVELeBXdVQOv-Supbi9MAg&oe=62761350",
        silent: false, // setting push notification with sound, default false
        vibrate: [200, 100, 300] // setting vibrate for notificaition

    });

    notification.onclick = () => {
       // TODO href
    };

    // notification.close(); close, remove the previous notification
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