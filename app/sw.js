// Service worker minimo: serve solo a rendere l'app installabile.
// Non salva niente in cache: i dati arrivano sempre freschi dal foglio Google.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* passa tutto alla rete */ });
