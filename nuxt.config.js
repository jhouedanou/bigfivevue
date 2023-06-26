// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  target: 'static',
  head: {
    title: 'Big Five SOLUTIONS | Agence de communication intégrée | France  | Côte d\'Ivoire',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description', name: 'description', content: 'Brand Content / Digital / Communication. Laissez votre empreinte. BIG FIVE Solutions est une agence de agence de communication intégrée qui aide ses clients à se différencier, grâce à des solutions créatives, technologiques, évolutives et sur-mesure.'
      },
      {
        hid: 'keywords', name: 'description', content: 'Digital Brand Content Communication publicité Marketing identité graphique Sites web Sites E-commerce Social média Formations Coaching SEO/SEA Architecture de marque Analyse des tendances Stratégie de marque. Logo/Identité graphique Campagnes Édition Packagings'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:title', property: 'og:title', content: 'Big Five Abidjan' },
      { hid: 'og:url', property: 'og:url', content: 'https://bigfiveabidjan.com' },
      { hid: 'og:description', property: 'og:description', content: 'Brand Content / Digital / Communication. Laissez votre empreinte. BIG FIVE Solutions est une agence de agence de communication intégrée qui aide ses clients à se différencier, grâce à des solutions créatives, technologiques, évolutives et sur-mesure.' },
      { hid: 'og:image', property: 'og:image', content: "https://bigfiveabidjan.com/images/logobigfiven.png" },
      // twitter card
      { hid: "twitter:title", name: "twitter:title", content: 'Big Five Abidjan' },
      { hid: "twitter:url", name: "twitter:url", content: 'https://bigfiveabidjan.com' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Brand Content / Digital / Communication. Laissez votre empreinte. BIG FIVE Solutions est une agence de agence de communication intégrée qui aide ses clients à se différencier, grâce à des solutions créatives, technologiques, évolutives et sur-mesure.' },
      { hid: "twitter:image", name: "twitter:image", content: "https://bigfiveabidjan.com/images/logobigfiven.png" },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'preload', href: 'https://use.typekit.net/wst2spk.css' },
      // { rel: 'stylesheet', href: 'https://use.typekit.net/wst2spk.css' }
    ]
  },
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/masonry/4.0.0/masonry.pkgd.min.js",
      type: "text/javascript"
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
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@bootstrap-vue-next/nuxt'],

})
