self.importScripts('/assets/localforage-1.10.0.min.js');

// UPDATED: 5/12/22

const VERSION = 'v6';
const CACHE_NAME = `devtools-tips-${VERSION}`;

const PERIODIC_UPDATE_SUPPORTED = ('periodicSync' in registration);

// Static resources to cache initially.
const INITIAL_CACHED_RESOURCES = [
  '/',
  '/offline/',
  '/assets/style.css',
  '/assets/filter-tip-list.js',
  '/assets/share.js',
  '/assets/logo.png',
  'https://unpkg.com/prismjs@1.20.0/themes/prism-okaidia.css',
  '/assets/localforage-1.10.0.min.js'
];

// Cached resources that match the following strings should not be periodically updated.
// These are the tips html pages themselves, and their images, and a couple of JS deps.
// They are assumed to almost never change. So the periodic update should not worry about them.
// Everything else, we try to update on a regular basis, to make sure lists of tips get updated.
const DONT_UPDATE_RESOURCES = [
  '/tips/',
  '/assets/img/',
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

// On fetch, we have a cache-first strategy, where we look for resources in the cache first
// and only on the network if the resource is not found there.
// The exception to this is: if periodicSync is not supported, then we go to the network first
// for all lists of tips (/, /browser, and /tag), otherwise users can't see new tips there.
// When periodicSync is supported, we just always go to cache and update the cache in the background at intervals.
self.addEventListener('fetch', event => {
  const isTipListingPage = event.request.url === registration.scope ||
                           event.request.url.includes('/browser') ||
                           event.request.url.includes('/tag');
  const goNetworkFirst = isTipListingPage && !PERIODIC_UPDATE_SUPPORTED;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Try the cache first.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse !== undefined && !goNetworkFirst) {
      // Cache hit, let's send the cached resource.
      return cachedResponse;
    } else {
      // Nothing in cache, or we were told to go network first, let's go to the network.

      try {
        const fetchResponse = await fetch(event.request);
        if (!event.request.url.includes('google-analytics') && !event.request.url.includes('browser-sync')) {
          // Save the new resource in the cache (responses are streams, so we need to clone in order to use it here).
          cache.put(event.request, fetchResponse.clone());
        }

        // And return it.
        return fetchResponse;
      } catch (e) {
        // Fetching didn't work let's go to the error page.
        if (event.request.mode === 'navigate') {
          await rememberRequestedTip(event.request.url);
          const errorResponse = await cache.match('/offline/');
          return errorResponse;
        }
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
