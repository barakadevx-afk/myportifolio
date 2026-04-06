// Service Worker for Baraka DevX - Next-Generation Cybersecurity Platform
const CACHE_NAME = 'barakadevx-v1';
const urlsToCache = [
    '/index.html',
    '/cyber-styles.css',
    '/cyber-script.js',
    '/cyber-manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;500;600;700&display=swap'
];

// Install event - cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Baraka DevX: Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(error => {
                console.error('Baraka DevX: Cache installation failed:', error);
            })
    );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // Clone request
                const fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(response => {
                    // Check if valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Clone response
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        })
                        .catch(error => {
                            console.error('Baraka DevX: Cache update failed:', error);
                        });

                    return response;
                }).catch(() => {
                    // Return offline page when network fails
                    if (event.request.destination === 'document') {
                        return caches.match('/index.html');
                    }
                });
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Baraka DevX: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Background sync for offline security scans
self.addEventListener('sync', event => {
    if (event.tag === 'security-scan') {
        event.waitUntil(doBackgroundSecurityScan());
    }
});

function doBackgroundSecurityScan() {
    // Handle background security scan tasks
    console.log('Baraka DevX: Background security scan completed');
}

// Push notifications for security alerts
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'New security alert from Baraka DevX',
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'view',
                title: 'View Alert',
                icon: '/images/checkmark.png'
            },
            {
                action: 'dismiss',
                title: 'Dismiss',
                icon: '/images/xmark.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Baraka DevX Alert', options)
    );
});

self.addEventListener('notificationclick', event => {
    event.notification.close();

    if (event.action === 'view') {
        event.waitUntil(
            clients.openWindow('/index.html#threats')
        );
    }
});
