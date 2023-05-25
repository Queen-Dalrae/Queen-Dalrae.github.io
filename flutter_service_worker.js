'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "18de99d76d3f67f18ce5c38b7a46f33f",
"index.html": "7c7009795e88f69995c0639a1a74f735",
"/": "7c7009795e88f69995c0639a1a74f735",
"main.dart.js": "df3f4fa4b289d3a4ba6273b29bb6c3c8",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "40ef2ba6b685c3819c9ca0f02d874dcb",
"assets/AssetManifest.json": "f56aa8565c3df6c3c82978e3111dcdfc",
"assets/NOTICES": "c7f941e00b4911dffccd6dc3ec841297",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8ddca8be667bfa77ff00654cc9dab05b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "f8ced9f1f35cafbfc29401f9f3ead58a",
"assets/fonts/MaterialIcons-Regular.otf": "f27574bb50fb969ee9703670d02e09a8",
"assets/assets/10.jpeg": "abfb92b1b78ed2174514c01d390d86f9",
"assets/assets/KakaoTalk_Photo_2023-05-04-17-00-11%2520019.jpeg": "f17141fb922938684118c56fd3b4d3bc",
"assets/assets/0.jpeg": "40e3a13c4fd36031c13845c262834d20",
"assets/assets/KakaoTalk_Photo_2023-05-04-17-00-11%2520023.jpeg": "ffffe4076d54d4e0c528de048c5e0421",
"assets/assets/KakaoTalk_Photo_2023-05-04-17-00-10%2520011.jpeg": "0a7aa8da472382be3f53767980e9e798",
"assets/assets/1.jpeg": "4f37ffc71175ae514a98ea5b10bb6e7f",
"assets/assets/11.jpeg": "b3594ba5ee61f51293293c3a592b99de",
"assets/assets/16.jpeg": "8cb88e4e3c18810fca9cee77f964b147",
"assets/assets/6.jpeg": "31c2a96c5d57e36a6bcd6ed5b636161f",
"assets/assets/KakaoTalk_Photo_2023-05-04-17-00-11%2520024.jpeg": "fe9e3a201c1dd0e8e9f61a15e010a5e8",
"assets/assets/7.jpeg": "1f6492b06bd6dc4bfdbb0d5c76f4f62e",
"assets/assets/intro.png": "0c501d585572066b03abb550606e3220",
"assets/assets/intro.jpg": "0c501d585572066b03abb550606e3220",
"assets/assets/17.jpeg": "e2372807ee8d737dfc37d259adeba13f",
"assets/assets/8.jpeg": "868d4572d74484c3a9e73ac01421b97f",
"assets/assets/KakaoTalk_Photo_2023-05-04-17-00-10%2520014.jpeg": "6fdfd9b2d6610614b6377c9523ba6521",
"assets/assets/KakaoTalk_Photo_2023-05-04-17-00-11%2520027.jpeg": "a1b0b535fc1c6899cab7f29a43eab72f",
"assets/assets/4.jpeg": "c6c1d65044e48fd73f258c1dce4b9dfa",
"assets/assets/14.jpeg": "b1dbad783f719fb0867c396c835c6a0f",
"assets/assets/15.jpeg": "85c9a2094199664688888181c8179999",
"assets/assets/5.jpeg": "c02a9407dab381cece7296f8139ebecc",
"assets/assets/KakaoTalk_Photo_2023-05-04-17-00-11%2520026.jpeg": "9840a5127b17ce106fd777663f015f5e",
"assets/assets/KakaoTalk_Photo_2023-05-04-17-00-10%2520015.jpeg": "d0ddd94440d6b3dc5ce72e4b3fc603c5",
"assets/assets/9.jpeg": "1524de2597657adea82a43b8df5e58f9",
"assets/assets/KakaoTalk_Photo_2023-05-04-17-00-11%2520021.jpeg": "c1037aae256f3e44449b0b49b0505878",
"assets/assets/2.jpeg": "c129fb464936b2b782b01552763a4460",
"assets/assets/12.jpeg": "a3c607170aca3a9881c1883e41e026bf",
"assets/assets/KakaoTalk_Photo_2023-05-04-17-00-11%2520017.jpeg": "6ac09f6749f9808db36eb52a24fee78f",
"assets/assets/KakaoTalk_Photo_2023-05-04-17-00-10%2520012.jpeg": "5b2ebccbb011aa20326bd7901a0af324",
"assets/assets/KakaoTalk_Photo_2023-05-04-17-00-10%2520013.jpeg": "bd403217588ef6264770affa016363c3",
"assets/assets/KakaoTalk_Photo_2023-05-04-17-00-11%2520016.jpeg": "e9ff5dbd809c829e345beb75ef634eac",
"assets/assets/13.jpeg": "5b2b10528d44f3a6c6cf3db6fbc2a201",
"assets/assets/3.jpeg": "dba49bf91fc46f5eb32e60e467d170ea",
"canvaskit/skwasm.js": "8f8767b45dcf2923c973308baaea118e",
"canvaskit/skwasm.wasm": "5ab59cbb8a780aa2ca37843c43d65303",
"canvaskit/chromium/canvaskit.js": "5c5fc4c97eeb8c099eeaeb6185e3c53c",
"canvaskit/chromium/canvaskit.wasm": "32ebd380e084e7d918ad40c9947b89a1",
"canvaskit/canvaskit.js": "f6aef5d531a0b63d0ddfdada9047580a",
"canvaskit/canvaskit.wasm": "4138f495a8ca8c4d23f5ba866526a7c0",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
