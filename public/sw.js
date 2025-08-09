// This is the most basic service worker, allowing the app to be installed.
// It doesn't provide any offline capabilities.

self.addEventListener('fetch', (event) => {
  // The service worker is not intercepting any requests.
  // This is a "pass-through" service worker.
  return;
});
