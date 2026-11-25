// Network-first for the app shell and course data (so content updates reach phones),
// with the cache as the offline fallback. Bump CACHE when the file list changes.
const CACHE = 'study-streak-v2';
const CORE = [
  './', './index.html', './manifest.json', './icon.svg',
  './data/catalog.js', './data/cos409.js', './data/ins401.js', './data/ins401_past.js',
  './data/sen412.js', './data/sen412_extra.js', './data/sen401.js', './data/sen401_extra.js',
  './data/sen419.js', './data/sen419_chain.js', './data/sen408.js',
  './data/csc420.js', './data/sen418.js', './data/sen418_extra.js', './data/past_rules.js'
];
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)));
});
self.addEventListener('activate', event => event.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
    .then(() => self.clients.claim())
));
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const isAsset = new URL(req.url).pathname.includes('/assets/');
  if (isAsset) {
    // Large study-guide files: cache-first once downloaded.
    event.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.status === 200) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
    return;
  }
  event.respondWith(fetch(req).then(res => {
    if (res.status === 200) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html'))));
});
