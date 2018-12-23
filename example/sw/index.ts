/// <reference types="../node_modules/types-serviceworker" />
/// <reference types="../node_modules/types-serviceworker/lib/workbox" />

self.addEventListener("fetch", null);

self.addEventListener("fetch", event =>
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  )
);

workbox.precaching.precache("/to-be-precached");
workbox.precaching.precache(["/to-be-precached"]);
