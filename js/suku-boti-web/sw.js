const C = "boti-v2",
  F = [
    "index",
    "profil",
    "falsafah",
    "motif",
    "audio",
    "peta",
    "graf",
    "tugas",
  ]
    .map((x) => x + ".html")
    .concat([
      "css/base.css",
      "js/data.js",
      "js/layout.js",
      "manifest.json",
      "assets/icon.svg",
    ]);
[
  "home",
  "profil",
  "falsafah",
  "motif",
  "audio",
  "peta",
  "graf",
  "tugas",
].forEach((x) => {
  F.push("css/" + x + ".css", "js/" + x + ".js");
});
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(C).then((c) => Promise.allSettled(F.map((f) => c.add(f)))),
  );
});
self.addEventListener("activate", (e) =>
  e.waitUntil(
    caches
      .keys()
      .then((k) =>
        Promise.all(k.filter((x) => x !== C).map((x) => caches.delete(x))),
      )
      .then(() => clients.claim()),
  ),
);
// network-first: selalu ambil versi terbaru, cache hanya cadangan offline
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((r) => {
        const cp = r.clone();
        caches.open(C).then((c) => c.put(e.request, cp));
        return r;
      })
      .catch(() => caches.match(e.request)),
  );
});
