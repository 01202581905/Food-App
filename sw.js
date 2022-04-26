const statisName = 'site-static-v1.0.3';
const dynamicCache = 'site-dinamic-v1.0.3';
const chormeExt = 'chrome-extension://';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/materialize.min.js',
    './js/ui.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    '/pages/fallback.html'
];


/*
* licycle of service worker
* register service worker file
* add event install -> add event active
*/

self.addEventListener('install', (event) => {
    // console.log('service worker has been installed');
    event.waitUntil(caches.open(statisName).then((cache) => {
        cache.addAll(assets);
    }).catch(() => {

    }));
    
});

// when this serive worker active
self.addEventListener('activate', (event) => {
    // console.log('service worker  has been activated');
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== statisName && key !== dynamicCache)
                .map( key => caches.delete(key))
            );
        })
    );

    setTimeout(() =>{
        fetch('/pages/fallback.html').then().catch();
    }, 2000);
});

// will runing with per request
self.addEventListener('fetch', (event) => {
    if(event.request.url.startsWith(chormeExt)) {
        fetch(event.request);
    } else {
        event.respondWith(
            caches.match(event.request).then((cacheRes) => {
                return cacheRes || fetch(event.request).then(fetchRes => {
                    return caches.open(dynamicCache).then(cache => {
                        cache.put(event.request.url, fetchRes.clone());
                        return fetchRes;
                    });
                })
                .catch(() => {
                    return caches.match('/pages/fallback.html');
                });
            })
        );
    }
});