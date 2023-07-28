export default defineNuxtConfig({
  target: 'static',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'title', content: 'Agence de communication digitale à Paris , Abidjan et Capetown | Big Five' },
        { name: 'msapplication-TileColor', content: '#82368c' },
        { name: 'theme-color', content: '#ffffff' },
        {
          hid: 'description',
          name: 'description',
          content: 'À la recherche d\'une agence de communication digitale de premier plan? Notre agence offre des solutions innovantes pour propulser votre présence en ligne.De la conception de sites web modernes à la gestion efficace des médias sociaux, nous sommes les experts de confiance qui vous aideront à atteindre vos objectifs numériques.Contactez - nous dès aujourd\'hui pour des stratégies personnalisées, une créativité exceptionnelle et des résultats tangibles. Faites confiance à notre agence de communication digitale pour vous positionner en tête des SERP de Google et stimuler votre succès en ligne.',
        },
        {
          property: 'og:title',
          content: 'Big Five',
        },
        {
          property: 'og:description',
          content: 'Agence de communication digitale à Paris , Abidjan et Capetown | Notre agence',
        },
        {
          property: 'og:image',
          content: 'https://bigfivevue.vercel.app/img/logo.jpg',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/lpb4lmp.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' },
        { rel: 'manifest', href: '/img/site.webmanifest' },
        { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#5bbad5' }

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
      src: "https://unpkg.com/vue",
      type: "text/javascript"
    },
    {
      src: "https://unpkg.com/vue-ico",
      type: "text/javascript"
    }
  ],
  css: [
    '@/assets/css/styles.scss',
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/axios',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/pwa'
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
  pwa: {
    manifest: {
      name: 'Big Five Abidjan',
      short_name: 'Big Five Abidjan',
      lang: 'fr',
      display: 'standalone'
    },
    icons: [
      {
        src: '/img/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/img/android-chrome-256x256.png',
        sizes: '256x256',
        type: 'image/png'
      }
    ]
  },
  workbox: {
    // Workbox options
  }

})