const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Istok Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/partner/sign.vue')
      })
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    { src:'~assets/scss/all.scss', lang: 'scss'}
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/clickOutside.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',

    ['nuxt-fontawesome', {
      component: 'fai', 
      imports: [
       {
         set: '@fortawesome/free-solid-svg-icons',
         icons: ['fas']
       },
     ]
    }],
  ],
  /*
   ** Axios module configuration
   */

  /*
   ** server
   */
  server: {
    host: '0.0.0.0',
    port: 8779
  },
  axios: {
    // baseURL: 'http://207.154.193.34:8000/',
    baseURL: 'https://istokhome.com/',
    proxy: false
  },
  proxy: {
    '/api': {
      // target: 'http://207.154.193.34:8000/',
      target: 'http://185.146.3.49:8000/',
      changeOrigin: true
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
