self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("cocoon").then(function (cache) {
      return cache.addAll([
        "https://omkrishna.github.io/cocoon",
        "https://omkrishna.github.io/cocoon/index.html",
        "https://omkrishna.github.io/cocoon/index.js",
        "https://omkrishna.github.io/cocoon/css/index.css",
      ]);
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
