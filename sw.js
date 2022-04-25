const statisName = 'site-static-v1.0.0';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/materialize.min.js',
    './js/ui.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
];


/*
* licycle of service worker
* register service worker file
* add event install -> add event active
*/

self.addEventListener('install', (event) => {
    // console.log('service worker has been installed');
    event.waitUntil(caches.open(statisName).then((cache) => {
        console.log('caches shell');
        cache.addAll(assets);
    }).catch(() => {

    }));
    
});

self.addEventListener('activate', (event) => {
    console.log('service worker  has been activated');
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== statisName)
                .map( key => caches.delete(key))
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    console.log('fetch event', event);
    event.respondWith(
        caches.match(event.request).then((cacheRes) => {
            return cacheRes || fetch(event.request);
        })
    );
});