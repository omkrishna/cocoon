self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("cocoon").then(function (cache) {
      return cache.addAll([
        "/index.html",
        "/index.js",
        "/css/index.css",
        "/images/slide-1.PNG",
        "/images/slide-2.PNG",
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
