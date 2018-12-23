self.addEventListener("fetch", event =>
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  )
);

workbox.precaching.precache(["/to-be-precached"]);
