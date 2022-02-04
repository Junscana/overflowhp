const { API_KEY, API_URL } = process.env

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'OVERFLOW',
    titleTemplate: '%s｜OVERFLOWオフィシャルサイト',
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。OVERFLOWに関する情報をお届けしています。' },
      { name: "robots", content: "index, follow" },
      { hid: 'og:site_name', property: 'og:site_name', content: 'OVERFLOWオフィシャルサイト' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://overflowhp.com' },
      { hid: 'og:title', property: 'og:title', content: 'OVERFLOWオフィシャルサイト' },
      { hid: 'og:description', property: 'og:description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。OVERFLOWに関する情報をお届けしています。' },
      { hid: 'og:image', property: 'og:image', content: 'http://whitellama7.sakura.ne.jp/img/overflow/eyecatch/eyecatch.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@OVER_FLOW_info' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  mode: 'universal',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/day.js',
    {src: '~/plugins/vuejs-paginate', ssr:false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  publicRuntimeConfig: {
    apiUrl: API_URL,
  },

  privateRuntimeConfig: {
    apiKey: API_KEY
  }
}
