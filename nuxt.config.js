export default defineNuxtConfig({
  target: 'static',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      /*       script: [
  
            ], */
      link: [
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/lpb4lmp.css'
        }
      ]
    }
  },
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/masonry/4.0.0/masonry.pkgd.min.js",
      type: "text/javascript"
    },
    {
      src: "https://unpkg.com/vue-masonry@0.12.1/dist/vue-masonry.min.js",
      type: "text/javascript"
    },
    {
      src: '@/assets/js/slider.js',

    }
  ],
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
    '@bootstrap-vue-next/nuxt',
    '@nuxt/content',
    '@nuxt/image'],
  image: {
    format: ['webp'],
    quality: 80
  },
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