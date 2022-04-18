/*
* licycle of service worker
* register service worker file
* add event install -> add event active
*/

self.addEventListener('install', (event) => {
    console.log('service worker has been installed');
});

self.addEventListener('activate', (event) => {
    console.log('service worker  has been activated');
});

self.addEventListener('fetch', (event) => {
    console.log('fetch event', event);
});