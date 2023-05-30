'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a70c897f5a96174b9c9c5b25a0daf188",
"index.html": "75e7b8aeac176e0ae9473cbe0965551c",
"/": "75e7b8aeac176e0ae9473cbe0965551c",
"main.dart.js": "2620a7d97ec920b5c86751ca70efbae4",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "eb0cbc78f210e45f678775837983d510",
"icons/Icon-192.png": "6768b6cc574a68230ca156d0e6e93f5f",
"icons/Icon-maskable-192.png": "6768b6cc574a68230ca156d0e6e93f5f",
"icons/Icon-maskable-512.png": "14ac49207ea39eeadd0af0e5a4ead2a8",
"icons/Icon-512.png": "14ac49207ea39eeadd0af0e5a4ead2a8",
"manifest.json": "40ef2ba6b685c3819c9ca0f02d874dcb",
".git/config": "5842bae8f5afa55f0c08c275c1f00126",
".git/objects/95/ae8a8918679227065ecca4372db6270e80a8ae": "dc27ac0151e7e0347e959fd2df921e76",
".git/objects/59/13a85542bf7f1a740e03d84106b191edfe2b0c": "a0258e4d67254154e9a84b7dc74ddd3f",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/c5cd6d70ecf5c382237bd3cbfbd9367dd1993f": "d28442ab6a3aac52b3a70557ac509c98",
".git/objects/68/07d696f7f79923a561cf7f4ac926f98e240271": "c39ddd06f2cc9f312eb7fe3cf64ea056",
".git/objects/04/fbe606adfc703b941a9bed9529a6dee99cc68f": "3d42113b5ef66666a1b3eebe92e535db",
".git/objects/32/03fd2877bf4b60e27a240130215dc3c72b1db4": "3112ae03617962e3028dade4ce5756dd",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/37f17ca42222fde873aad022500c5043613229": "64fbda2044b81c5dd8cad645ccc71d7b",
".git/objects/67/cbbe6bea20d3d9ad18a542684b24a895bba699": "ca052f4c3ec043cc9d37da68902e7344",
".git/objects/94/d177b82ea4d60c3f6df2c4373f83ace5c839e8": "95de6a2e2232d4a5b9a3513ee6b55a3a",
".git/objects/94/8c45f42e10386cd601e2d0c3ec05daa6478a90": "720afcd405889225cec6361052a3fb38",
".git/objects/94/46479a3a3e07f1d834fd0d9230ef2700929d7c": "54ff8edd3bb2186162932c526aec7781",
".git/objects/34/e60cebe12000b57237a18c29c1f6987a61f697": "199293be4cc19915251ee5548a736848",
".git/objects/a3/4ca0bb235f5225d10c182e1bf355b4c4d44091": "8958b18ee58d7cc7c459721eb78bf726",
".git/objects/b5/58c5f4c5c9ca80a35c62fbf70f40fc39123e04": "e378129708b90dc931308616e33fdfb3",
".git/objects/b2/b04a284f106e15a67807fb3c44c4849771ffdd": "3cd26fae1500f1b8ec5f91c2eb083416",
".git/objects/d9/4c6bfd3b9fa65ec8f3cb8a1d13d66a4d7a0d1a": "d33f1d1ea999584a0c570fcb8a076980",
".git/objects/d9/b189b4a6a99e58ed918654ff5dba6848b50482": "c3068fdf08751555900b04d6e06e3331",
".git/objects/bb/da25e47aa3b787cfba85dba21bf08590e2db1b": "6cfec5308bb42237e33577a0e5289fed",
".git/objects/bb/54a8984884691db8da525d5533a47157e8efdd": "4491a33dc5b36bc70fc34ef6a2e93513",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/9b2643f5e705b79b5c5daa0991158e34c35cf3": "916c6e61c8a893c3580f5d18ad79b6a7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/ffac1b27b1cb47ae0beb6036e5b3a7730826bc": "7b6501e8d39f315f93b85047de2937a4",
".git/objects/f3/956c7e43df1625e33fc695adfad9caff2ff00b": "623cfcfaf1cd97f7a844f230c150fc9c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/efcad14f4233004d850668daad5608ed789ab2": "f7a5731f6d2aadb564ae866734557169",
".git/objects/eb/0d027dc5978e9b4efbaa5d4fc7b947812427ed": "72fab76ef0da380478429be670b65870",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/a08bfea0a69a4fda876b3b47bd014790af04e6": "298fb6562264ec3cbd0eb9a60bd23797",
".git/objects/c8/50e63d23c0262f230aa77758766e96b8035d81": "367be8e22fb6bbb106f6b335f822621b",
".git/objects/fb/905b9946714d996b3422348e111fca86ef04b2": "e45c4b231565a6bda8b95ec1a27b4c4c",
".git/objects/20/6681387b9719e2344c3493391badb7a166efb8": "d9e49692ca1ab4ca8b47bf0abc5095c7",
".git/objects/18/80a95efa9f85ae33d5c6016d4a8ec1fe473534": "8837b1ee9de0db9e074327def8ee9b0e",
".git/objects/7d/46ba1b9ae48a9c9601d5de7a4629cdec194d89": "54c7180805b541c61d2046748e29f111",
".git/objects/7c/5da4c77ec093613ed02a7e7ad78cbfec6f940f": "95a3014b32f74405caf8d35519fc499f",
".git/objects/16/554dc1e59b9c31a7aab181d388c8cb0f9c6013": "219c7a41dd36771e3d10d612439adffa",
".git/objects/42/e58ca27f13cfbaa6ebbba6d1d1cd8883208d7f": "fd0605cb1628be2cefa3da69115e9aa1",
".git/objects/42/579c70175da23d1e4085b0920a96643247ee8b": "056ad50002960aecaaaf31147e7712bd",
".git/objects/87/2b71ad7545c7d04e57f7d956045c4bc42c258f": "c6895cfb7fe9fff91e881bfe6c5ce606",
".git/objects/8a/a6f1c4e498193cc15adb9e0c1e6dd849db2a19": "9de48b65fcf4d49e29091e71f0b5d12f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/7faf4d00c77c198ae4ed8c2d1d2870139965e3": "55b3e3d93fa58a7238af2ab301a92ad6",
".git/objects/75/ca35ebb36420ce3f7be32f5959bd2d552b3da5": "3ffa6c91da01091ccff44c401046485b",
".git/objects/75/60194b809e17bc0e952fd6bf88efea9aaf2e25": "cf8ace7d2c951623922f071f97a3f8a3",
".git/objects/72/461ba73477f4f3ca0f4d7fd2e0bfe7a75e4f3d": "40dbeb5ee0580531fb5015610f2ccd25",
".git/objects/44/f1fc30799102a8d2e5864f65700eb79f550d16": "f5e54cbda283d938d733b7f8b20df9db",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d37f842aef6ca3b204727feeb8200d3f300345": "3a526e83a97b973d7c85194c544ab57a",
".git/objects/6b/aa165fb22c0c32fbe2090e5e73de72770e2d0c": "9b3d519eb24ad0087e21186ba105c9ed",
".git/objects/00/869a101821f0ef0279490dcea9a1a5a7ad7d2c": "d80e2d41e84654672fa53770ae87ea02",
".git/objects/5c/96a24618b90b701626f2415ede597e3b684ed0": "57f2b7beb118c7190ebe9d60706e0534",
".git/objects/5c/90e93dec3cd7d65eaeed4e9b95819b10f6da28": "e1d65112df84bb0a6d3cad1dffb6fc2d",
".git/objects/31/d6e558494aac0be29834edc05388de97a95d09": "e7b3acc60b97be9c5f80aed509c0eb75",
".git/objects/91/a9d9bd61e48709cf39baca349ab111912ab9e3": "28d9d1506ff21ad9f10adaf55dfc9985",
".git/objects/53/4c93bc16180efd93b21cee0ae3ab300b93dccb": "1c10dbb28c0841d82483ce190831a06e",
".git/objects/08/48902f4cb2e0638ba35db311790078dbc739b9": "463d198ade80dd6651c844483a7849b6",
".git/objects/99/05d38d528debcd39bc6a29035b43cf9a53e891": "eb9ec87bd6fca18272a424c5ca41e96e",
".git/objects/99/69f51098797b67fcdf2fd55e231784fb229ae8": "62bd1ccc4cba954ddbcc0428f912cd75",
".git/objects/99/10bc2c720f0915f6b830c86a390fe6efecd562": "dfed3331d417a2f209afc11f72d8ef45",
".git/objects/63/792ec20e9fc2f10907a1a1464484eb452e9478": "11eeeb6c7f70bf43f22ac45ae4009bb8",
".git/objects/64/7e93bd8b1a657c4ab4954d3971b23f7c02eca6": "08fa7d188bb559326b652adadf7dfd53",
".git/objects/90/ad781f87a3a1254bf8acbd5fe4e12e24498b54": "5ec1b85f0c0415d97fe818cbc0c27568",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/da74d53dfa6743a33534034422a82b8382c5df": "b52dc27123a152c5edcfa9845b533b37",
".git/objects/d2/83c6e6b80f39a68bf6bd921f15dd087b417de5": "5ea1aabe45ddddbc3d3f8fc89fa21794",
".git/objects/aa/553c5f68207869733a756f1a6d674a6ec10447": "fffe09665d7de9f30481838603d7b5c9",
".git/objects/af/d40c623abc960ac54217e781d509f42279c71a": "a960c28501e1caa346d842a892ae62c9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/ecdb4b50fc3c6f4e967a9fae93f5087aae9aad": "c077bf3f6b49db700af6a5527d02b067",
".git/objects/a1/8f9100827de4d38a7460d44ee8407a5478a9b6": "ec2d978aedfd96d77717ec2f43423234",
".git/objects/ea/019d1f1fb9c697af076db8da8c2fb639df9d6e": "23c005c02119c261ceefe53a79690555",
".git/objects/e1/bb1aecc053f1f96af9d1fd635370a7db2e6f14": "250e608ca93c101cd928da9658bd7c1f",
".git/objects/e6/162999029b9456dd27936fb6f51039ecd8e759": "75370bc9efea117885c43458e7e795c3",
".git/objects/fa/17dabe64abae99179a5a12ed10019ed4020afb": "10f3568b7b1010574576c5d959db2f12",
".git/objects/e0/557893309eaa952ecf2f52b13d37646b0b5f5b": "0923aeb3080448b38afcb4b1c9acedfd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/f49f8c54c8cf966a2132ea31249da500be22ab": "58f06eee0635b250ed894256a0e0f2e2",
".git/objects/79/af2920dfb7cb8e6b25e2a8e89aa71d8a18ea9d": "1e45f8103217d8abc7f7824df72863c2",
".git/objects/1e/609c24921a2fb0a2f98a305a7b838610d99b46": "368d6859aa73aa92376f8aea0492b76c",
".git/objects/23/092cc860a75d94a7702638c3ce1cbb57ed6578": "7d69c23cb6072bfba9a134a7d0cc1890",
".git/objects/4f/1a4d6ec697d9aa78a4e89c1dc58ee8ced2a9b4": "08ddc23fcffcd768e8b53ad39300d555",
".git/objects/15/6c38517b401b8d103c9b5950b428d9019219a5": "b952aeac828f75d8b7f6c7802a93e408",
".git/objects/1c/6831b14b94b556c5becdba78a33f7f171046e8": "e2dc3f16d71ad0931572f709216a76d7",
".git/objects/40/876c43b2faecc8fa33f78b10a1f71ebfe8a07c": "ef91dac2cadea0f3eb3a11143f963b50",
".git/objects/78/c7937911393a56420cdf071c51d793518c509b": "109fda933b99a0280b39296c37103d57",
".git/objects/78/b1a8f537b9bf8f3a49611e49b8dd3d33e5d91b": "9dcb801783a98f080d5e7c1c8b3c750f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ee4b3280f4ed587930f0066bbccdae9d",
".git/logs/refs/heads/main": "4e62ad47de293f184b75fce9085a1836",
".git/logs/refs/remotes/dalrae/main": "288303ace85c483643831e3b06db29e4",
".git/logs/refs/remotes/origin/main": "a8bd92f9c9e20e08c32bb9e693d25b82",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "73e0299756ccfe6fa002aa1ce99d494f",
".git/refs/remotes/dalrae/main": "73e0299756ccfe6fa002aa1ce99d494f",
".git/refs/remotes/origin/main": "846e2919f154e51028e7ddd0c7d337d1",
".git/index": "cd0449b3572ca1805c87a32571434b10",
".git/COMMIT_EDITMSG": "8ef196483201e0ecae40e922d2e80f86",
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
