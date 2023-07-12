export default defineNuxtConfig({
  target: 'static',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [

        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/vendors/easings.min.js",
          type: "text/javascript"
        },
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
  plugins: [
  ],

  components: true,
  buildModules: [
    '@nuxtjs/axios',
    '@nuxtjs/composition-api/module'
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  modules: [
    '@bootstrap-vue-next/nuxt', '@nuxt/content'
  ],
  content: {
    dir: 'content', // Path to the "content" directory
    fullTextSearchFields: ['title', 'description'] // Optional: Specify fields for full-text search
  },
  // In your nuxt.config.js file
  router: {
    routes: [
      {
        path: '/realisations/:id',
        component: '~/pages/realisations.vue',
      },
    ],
  },
})