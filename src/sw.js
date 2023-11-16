self.importScripts('/assets/localforage-1.10.0.min.js');

// UPDATED: 11/16/2023

const VERSION = 'v12';
const CACHE_NAME = `devtools-tips-${VERSION}`;

const PERIODIC_UPDATE_SUPPORTED = ('periodicSync' in registration);

// Static resources to cache initially.
const INITIAL_CACHED_RESOURCES = [
  '/',
  '/offline/',
  '/assets/style.css',
  '/assets/dialog-lightbox.js',
  '/pagefind/pagefind-ui.js',
  '/assets/logo-small.png',
  'https://unpkg.com/prismjs@1.20.0/themes/prism-okaidia.css',
  '/assets/localforage-1.10.0.min.js'
];

// Cached resources that match the following strings should not be periodically updated.
// They are assumed to almost never change. So the periodic update should not worry about them.
// Everything else, we try to update on a regular basis, to make sure lists of tips get updated.
const DONT_UPDATE_RESOURCES = [
  '/offline/',
  'prismjs',
  'localforage'
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
      if (!event.request.url.includes('pixel.php') && !event.request.url.includes('browser-sync')) {
        // Save the new resource in the cache (responses are streams, so we need to clone in order to use it here).
        cache.put(event.request, fetchResponse.clone());
      }

      // And return it.
      return fetchResponse;
    } catch (e) {
      // Fetching didn't work, try the cache.
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      } else if (event.request.mode === 'navigate') {
        // Couldn't find anything in the cache, and this is a request to a page, let's go to the error page.
        await rememberRequestedTip(event.request.url);
        const errorResponse = await cache.match('/offline/');
        return errorResponse;
      }
    }
  })());
});

async function rememberRequestedTip(url) {
  let tips = await localforage.getItem('bg-tips');
  if (!tips) {
    tips = [];
  }

  tips.push(url);
  await localforage.setItem('bg-tips', tips);
}

// Listen to background sync events to load requested tips that couldn't be retrieved when offline.
self.addEventListener('sync', event => {
  if (event.tag === 'bg-load-tip') {
    event.waitUntil(backgroundSyncLoadTips());
  }
});

// Fetch the requested tips now, and put them in cache.
async function backgroundSyncLoadTips() {
  const tips = await localforage.getItem('bg-tips');
  if (!tips || !tips.length) {
    return;
  }

  // Fetch and cache each tip.
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(tips);

  // Re-engage user with a notification.
  registration.showNotification(`${tips.length} DevTools Tips was/were loaded in the background and is/are ready`, {
    icon: "/assets/logo-192.png",
    body: "View the tip",
    data: tips[0]
  });

  await localforage.removeItem('bg-tips');
}

self.addEventListener('notificationclick', event => {
  // assuming only one type of notification right now
  event.notification.close();
  clients.openWindow(event.notification.data);
});

// Listen the periodic background sync events to update the cached resources.
self.addEventListener('periodicsync', event => {
  if (event.tag === 'update-cached-content') {
    event.waitUntil(updateCachedContent());
  }
});

async function updateCachedContent() {
  const requests = await findCacheEntriesToBeRefreshed();
  const cache = await caches.open(CACHE_NAME);

  for (const request of requests) {
    try {
      // Fetch the new version.
      const fetchResponse = await fetch(request);
      // Refresh the cache.
      await cache.put(request, fetchResponse.clone());
    } catch (e) {
      // Fail silently, we'll just keep whatever we already had in the cache.
    }
  }
}

// Find the entries that are already cached and that we want to periodically update.
// There are some resources we never want to bother with updating.
// They can always be force-updated by updating the CACHE version.
async function findCacheEntriesToBeRefreshed() {
  const cache = await caches.open(CACHE_NAME);
  const requests = await cache.keys();
  return requests.filter(request => {
    return !DONT_UPDATE_RESOURCES.some(pattern => request.url.includes(pattern));
  });
}
