importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "controller-netflix",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.d6c29629f5084d561db5.js",
    "revision": "36e3b2f436f1bfc98ee63301d521b014"
  },
  {
    "url": "/_nuxt/layouts_default.c8312bf85cff6642fdd9.js",
    "revision": "a5f5c485d05e26cc64298454484aad89"
  },
  {
    "url": "/_nuxt/manifest.1f3a99142a391560fbc3.js",
    "revision": "86b3b334b917c270009b45fc501c233a"
  },
  {
    "url": "/_nuxt/pages_genres.c7f0d54ef9b49e5f26e8.js",
    "revision": "1c212fa0839d7eff13609d857373c909"
  },
  {
    "url": "/_nuxt/pages_index.69277bc83c9eac60aa3d.js",
    "revision": "a5f1129a026e93e139ee9362b111b5a7"
  },
  {
    "url": "/_nuxt/pages_player.cce29e6c7a6a4038749f.js",
    "revision": "9ecf39476c02987707784e489a17810c"
  },
  {
    "url": "/_nuxt/pages_reader.eca0043f77efdd0ca3b7.js",
    "revision": "380632d353b6830c3924439149d5b6ad"
  },
  {
    "url": "/_nuxt/pages_shows.2d65c8a79e0695c54e6a.js",
    "revision": "e8f8af86a5ccfd3fa6cd6fdec358ee81"
  },
  {
    "url": "/_nuxt/vendor.12a8302a0c76017671dd.js",
    "revision": "1305edfc36d6fea3158ef692dd8a0bc3"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

