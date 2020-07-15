self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("cocoon").then(function (cache) {
      return cache.addAll(["/index.html", "/index.js", "/css/index.css"]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
