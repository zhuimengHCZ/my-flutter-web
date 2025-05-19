'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "29494e0817a71823856a27b9ae8862db",
"version.json": "19e4324cbed02d23f0840e51df41a2d0",
"index.html": "1d88fc242e9cb14f7810d2b8e494529b",
"/": "1d88fc242e9cb14f7810d2b8e494529b",
"main.dart.js": "f9f0461c346a23d3ff8fbf31cd566fc9",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d27ab8cd6f703705853777d225bb1785",
"assets/AssetManifest.json": "5a8bbfb89b5d021175b8f9408291ee8b",
"assets/NOTICES": "7f35b65816c84a8a66029b41f1f32b05",
"assets/FontManifest.json": "9a12949fab0e7df6bb27f4747d90b532",
"assets/AssetManifest.bin.json": "d7cc4315ead50f7cae650a67151a21c8",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/gpt_markdown/lib/fonts/JetBrainsMono-Regular.ttf": "d09f65145228b709a10fa0a06d522d89",
"assets/packages/wechat_assets_picker/assets/icon/indicator-live-photos.png": "a96d2373c82eb49440e29d2fcbd21d37",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "649890f47815a225d2382878908a7aac",
"assets/fonts/MaterialIcons-Regular.otf": "0917962c2ea098e1b9a4217118e8810c",
"assets/assets/svg/search_net.svg": "25c32177fe6bb3e3498477b77fafbdbb",
"assets/assets/svg/msg_delete.svg": "542f773958a80ceab04d17a89c20030c",
"assets/assets/svg/msg_unlike.svg": "e80471ec8ada62b167c7ea39a73fdcca",
"assets/assets/svg/chat_new.svg": "4f82d2ee85275af78a0810de2f61414c",
"assets/assets/svg/msg_copy.svg": "e8d987255629eee65fc98976dcf83b8c",
"assets/assets/svg/msg_share.svg": "f394ef6611cf306b9832ff72a5460a38",
"assets/assets/svg/msg_play.svg": "6ed95fbeb3f119870296e30858f24229",
"assets/assets/svg/search_r.svg": "b966e4cffb77751598f9639dcf2ae20e",
"assets/assets/svg/msg_edit.svg": "6ac070fcfbbe50100123cf5945133b5e",
"assets/assets/svg/drawer_open.svg": "f072bdbbb2b84aefb818da93bdbf3ad8",
"assets/assets/svg/search_fill.svg": "aa07a14dfc83318f59ea0fc045c2e630",
"assets/assets/svg/msg_stop.svg": "e64a122c089144d2be69e1cd1c08f6ea",
"assets/assets/svg/msg_like.svg": "3695dea344b126fb28442affe1bf8b80",
"assets/assets/svg/msg_refresh.svg": "f3664dc2cd54622efcaf67e0538c7cd7",
"assets/assets/images/update/update_bg_02.png": "06b842d8ba1854915f4e5fadddefd3eb",
"assets/assets/images/update/update_bg_01.png": "22948df8c5b4c233024352d63cf568da",
"assets/assets/images/chat/room_right_arrow.png": "2b4d897694ed2ca8340f50bbcea4b1d1",
"assets/assets/images/chat/room_send_world_chat_sub.png": "7b492d4a704d1f51ea11e45e1ea32cf2",
"assets/assets/images/chat/loading_message.gif": "8f4973090c3d7e3fd5d95faee7950fe2",
"assets/assets/images/chat/room_func_clear_integral.png": "df6e58bef508e91054916f0b46d360dc",
"assets/assets/images/chat/message_chat_shortcut_delete.png": "2d19ea20b409f5d4fc27dfab12a06bd9",
"assets/assets/images/chat/ic_voice.png": "dc2fba0a9e33c323a9f002b8828da83c",
"assets/assets/images/chat/message_long_tap_revoked.png": "dc53656a7ebd76f2b7dccf2f2003b5b1",
"assets/assets/images/chat/message_chat_hi.png": "b120bad748eb4b68486c66f118387766",
"assets/assets/images/chat/msg_right_bg_top.png": "6d561746ebd6eb75a1e28b02a6084476",
"assets/assets/images/chat/chat_pdf.png": "a21a301cac59f9933ad9c4943f545ab1",
"assets/assets/images/chat/room_send_world_chat_add.png": "4b7b7f1f867058f05dc7d9941550b1ee",
"assets/assets/images/chat/message_long_tap_multiple_select.png": "cf2f514faa8eacf5d7116de8ca92dfa4",
"assets/assets/images/chat/doc.png": "a385a41f3e2f7bd2671a6739f6691bd7",
"assets/assets/images/chat/chat_kimi.png": "a9a6ce5e81c32b54f745ef0bfe15e372",
"assets/assets/images/chat/msg_left_loading_top.png": "5dd48c5241747898b5705cfed6265a10",
"assets/assets/images/chat/room_func_clear_public_chat.png": "ea0a57b2af9c8937787f2203bbf695af",
"assets/assets/images/chat/room_func_report.png": "0e77045a012a484c3c16dcd33ee82c2f",
"assets/assets/images/chat/txt.png": "d7490f17609693b46e4be898f7b36313",
"assets/assets/images/chat/message_relation_invite_heart.png": "3b9097a59fdab1dc899581755f70f400",
"assets/assets/images/chat/room_float_bar_close.png": "dcc33f219a31996f1882172ac0b65c17",
"assets/assets/images/chat/message_chat_shortcut_close.png": "95330242565922f03c28b99d1172a6c0",
"assets/assets/images/chat/message_chat_more.png": "755a25631d1a5e531b7b0e4973800b31",
"assets/assets/images/chat/ic_details_media.webp": "63de15a9eca6ce82429a0e8df23656cd",
"assets/assets/images/chat/message_chat_send.png": "1f29cad3ad14b77206a12513d12b4b21",
"assets/assets/images/chat/room_music_pause.png": "e9d81472a0e886e27e1b4f31fd7e655a",
"assets/assets/images/chat/room_music_last.png": "bb58e6547c01c19f0c63c1cc11bbee6a",
"assets/assets/images/chat/room_func_public_chat_close.png": "56f8f225b78dcd0523b272a6b987edc3",
"assets/assets/images/chat/ic_details_file.webp": "c935d5bcf0d00c8d09812ddf03db0a89",
"assets/assets/images/chat/pdf.png": "c9f63d66e639d1e1f4ec90b2f59afb78",
"assets/assets/images/chat/message_relation_invite_icon_5.png": "90d1765e18ef5b59b27e5272883d983d",
"assets/assets/images/chat/message_tool_bar_shortcut.png": "a04e81e3d3bb43ede6708a17ff50b955",
"assets/assets/images/chat/room_music_next.png": "9cfba0c2e4a48ebdf9455639abf25bc0",
"assets/assets/images/chat/message_relation_invite_icon_4.png": "c41d1e607ce338739860dccc5bba9e32",
"assets/assets/images/chat/chat_doubao.png": "d3fb180ad486316a83c9124f81221152",
"assets/assets/images/chat/message_relation_invite_icon_6.png": "2b22b1303405d7ea4ad86c1dc5e6dbd0",
"assets/assets/images/chat/message_tool_bar_delete.png": "f419a56f67697602b6bdc3ef20977246",
"assets/assets/images/chat/ic_details_transfer.webp": "7aab889df52b551ba59e8f636a15cadc",
"assets/assets/images/chat/message_relation_invite_icon_3.png": "ab9ac8d55f01c936e97de74e8d97cb97",
"assets/assets/images/chat/msg_left_bg_top.png": "a11efe0fc9d34524d4e008beb75617eb",
"assets/assets/images/chat/message_relation_invite_icon_2.png": "8ae7df1493fdc722e2b06f741feefda9",
"assets/assets/images/chat/room_music_play.png": "89f0f15179edafa8739b5130a7faa86d",
"assets/assets/images/chat/message_relation_invite_icon_1.png": "32deeb73d8921a75a0fcd4a2bb052987",
"assets/assets/images/webp/splash.webp": "010777e9291e7423e0c33ccac2149e35",
"assets/assets/images/common/icon_coin_exchange.png": "866708e9f65c09fb727e8f6368a31aa9",
"assets/assets/images/common/common_friend.png": "b5e0188fea25c9749c7a73ad43ac086c",
"assets/assets/images/common/common_search.png": "95dc4938fe5422018f74b36612fc5ac6",
"assets/assets/images/common/common_arrow_down.png": "6149582ac14f6840b26cfa3689b17051",
"assets/assets/images/common/default_header.png": "98a251b98cd6abc39561533f6ca0cb62",
"assets/assets/images/common/icon_back.png": "20b527a05c2ca6f898aa26c5ee45bb22",
"assets/assets/images/common/icon_pic_delete.png": "c48a66c10b4f88d7eb60e383dfe62ab6",
"assets/assets/images/common/common_like.png": "a870d1fa221e90bc4196e5565d6a2a07",
"assets/assets/images/common/common_mute_close.png": "ea0316994c8f5ba12466e73c50e87399",
"assets/assets/images/common/icon_nav_logo.png": "58215e149cc0c6a71c959ed00410ba8f",
"assets/assets/images/common/common_photo.png": "b6a211e82efc0fdd6a15d14d2c61ecfb",
"assets/assets/images/common/permission_storage_icon.png": "bdbb4001855d98e64f141a7d4e8c3a00",
"assets/assets/images/common/moments_msg.png": "5eb56dc818ad403beae7acfb1c2483e9",
"assets/assets/images/common/common_clear.png": "e6bad98b08f7b944bcc4b9fa133e4820",
"assets/assets/images/common/common_camera.png": "c96f4884ee010675af5d2fad71575e4b",
"assets/assets/images/common/common_mute_open.png": "c58d0442078741f2c7e1880e8f1a4679",
"assets/assets/images/common/icon_empty.png": "bb7d7226209cb1f7ee5d6b482065722c",
"assets/assets/images/common/common_copy.png": "5bc4c5226395dcb0039c59e40371e398",
"assets/assets/images/common/permission_camera_icon.png": "7ccb5c3d32e1e6285595da00a6d3e40f",
"assets/assets/images/common/icon_check_s.png": "6de655daebcfb68b2133b1d51d02af15",
"assets/assets/images/common/common_delete.png": "001ff21662bb0577966e01a45bbcddbb",
"assets/assets/images/common/permission_record_audio_icon.png": "2ba69d6182a4b899bc773ed4a7e441d0",
"assets/assets/images/common/icon_delete.png": "90f2e8c7f5296a7b696411fbf4c04503",
"assets/assets/images/common/common_unlike.png": "bc380f0686135bff1355098dcd2d22ff",
"assets/assets/images/common/icon_check_u.png": "353df500d0f94cf5ec51814640629b37",
"assets/assets/images/common/common_arrow_right.png": "4cd27e5c3367776fb4ab548c6d44d216",
"assets/assets/images/login/login_bg.png": "991ec480928cff5459dd7e4f73253cb9",
"assets/assets/images/login/login_mailbox.png": "d0ced503e67f82fdf117196f0594b297",
"assets/assets/images/login/login_name.png": "d059e3666e6ead06b4bafdd830093e0d",
"assets/assets/images/login/login_icon.png": "c9dbe492f944247a7e5d22b2aa1eed8d",
"assets/assets/images/login/login_sel_t.png": "ccc81ff308e36211edde2a02b7ee289e",
"assets/assets/images/login/login_wechat.png": "feb6b612a080c1da180ff3c3ff890731",
"assets/assets/images/login/login_sel_f.png": "353df500d0f94cf5ec51814640629b37",
"assets/assets/images/login/login_clear.png": "933257e797867f82c3e4ea649b4c747f",
"assets/assets/images/share/share_wechat.png": "f5b701b0117b95889e16b07c2f7f62c5",
"assets/assets/images/share/share_wechat_circle.png": "ab94e6f75e47c75a3ff82e42b00862bb",
"assets/assets/images/share/share_qq.png": "ff0d1e559bad762c04dd1160ebe9b43a",
"assets/assets/lottie/room/room_living.json": "2ba521824aeb5ea78c5d02d34bb4fdd6",
"assets/assets/lottie/room/room_boy_sound_wave.json": "a90b410c0a7375cb3efa5e9d60965690",
"assets/assets/lottie/room/room_girl_sound_wave.json": "7dafa7a5aaa9c0d2cfd44590937238f1",
"assets/assets/lottie/live.json": "60d0e487e5309c17c8a8a73b4c7190a7",
"assets/assets/lottie/message/hi_l.json": "b35c57866467d72bb3305f4f4c2d1dd4",
"assets/assets/lottie/message/hi_r.json": "64c9cb0f4fa5322b7c67adcb87a98977",
"assets/assets/lottie/common/loading.json": "83e3a0f8f774925d915f83d46e80a0fc",
"assets/assets/lottie/common/live.json": "92fbdcac0898cf552e6ddac82214900b",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
