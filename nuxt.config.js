export default defineNuxtConfig({
  devtools: { enabled: true },
  target: 'static',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/masonry/4.0.0/masonry.pkgd.min.js",
          type: "text/javascript"
        }/* ,
        {
          src: "https://use.typekit.net/your-typekit-id.js"
        } */
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/lpb4lmp.css'
        }
      ]
    }
  },
  css: [
    '@/assets/css/styles.scss',
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/axios',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@bootstrap-vue-next/nuxt'],
})