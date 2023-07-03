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
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.min.js",
          type: "text/javascript"
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.extensions.min.js",
          type: "text/javascript"
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/vendors/easings.min.js",
          type: "text/javascript"
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.min.css'
        },
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
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.resolve.alias['ScrollMagic'] = 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js';
        config.resolve.alias['debug.addIndicators'] = 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';
        config.resolve.alias['gsap'] = 'gsap/dist/gsap.min.js';
      }
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@bootstrap-vue-next/nuxt'],
})