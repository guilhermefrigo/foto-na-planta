const CACHE = "foto-na-planta-v6";
const ASSETS = ["./", "index.html", "pdf.worker.min.js", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  // páginas: rede primeiro (pega a versão nova), cache quando estiver sem internet
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(res => { const cl = res.clone(); caches.open(CACHE).then(c => c.put("index.html", cl)); return res; })
      .catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
    if (res.ok && (req.url.startsWith(self.location.origin) || req.url.includes("cdnjs"))) { const cl = res.clone(); caches.open(CACHE).then(c => c.put(req, cl)); }
    return res;
  })));
});
