// UPDATED: 02/03/2026

const VERSION = 'v13';
const CACHE_NAME = `devtools-tips-${VERSION}`;

// Static resources to cache initially.
const INITIAL_CACHED_RESOURCES = [
  '/',
  '/offline/',
  '/assets/style.css',
  '/assets/dialog-lightbox.js',
  '/pagefind/pagefind-ui.js',
  '/assets/logo-small.png',
  'https://unpkg.com/prismjs@1.20.0/themes/prism-okaidia.css'
];

// Cached resources that match the following strings should not be periodically updated.
// They are assumed to almost never change. So the periodic update should not worry about them.
// Everything else, we try to update on a regular basis, to make sure lists of tips get updated.
const DONT_UPDATE_RESOURCES = [
  '/offline/',
  'prismjs'
];

// Use the activate event to delete old caches and avoid running out of space.
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map(name => {
      if (name !== CACHE_NAME) {
        return caches.delete(name);
      }
    }));
  })());
});

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll(INITIAL_CACHED_RESOURCES);
  })());
});

// On fetch, we have a network-first strategy, where we look for resources on the network first
// and only fall back to the cache if the network fails.
self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    try {
      const fetchResponse = await fetch(event.request);
      // Save the new resource in the cache (responses are streams, so we need to clone in order to use it here).
      cache.put(event.request, fetchResponse.clone());
      // And return it.
      return fetchResponse;
    } catch (e) {
      // Fetching didn't work, try the cache.
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      } else if (event.request.mode === 'navigate') {
        // Couldn't find anything in the cache, and this is a request to a page, let's go to the error page.
        const errorResponse = await cache.match('/offline/');
        return errorResponse;
      }
    }
  })());
});
