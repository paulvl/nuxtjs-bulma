var baseURL = 'https://api.cloudstarter.io'
if (process.env.NODE_ENV == 'development')
  baseURL = 'http://development.app'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CloudStarter.io | Deploys en un solo click',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** CSS configuration
  */
  css: [
    { src: '~assets/sass/index.sass', lang: 'sass' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Modules configuration
  */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Modules options
  */
  axios: { baseURL: baseURL, credentials: false },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      // 'axios'
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: ['eslint-loader'],
          exclude: /(node_modules)/
        })
      }
    }
  }
}
