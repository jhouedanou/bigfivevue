export default defineNuxtConfig({
  target: 'static',
  devtools: { enabled: true },
  //modify nitro config to output in dist folder
  nitro: {
    app: {
      head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        script: [
          {
            src: "https://cdnjs.cloudflare.com/ajax/libs/masonry/4.0.0/masonry.pkgd.min.js",
            type: "text/javascript"
          },
          /*  {
             src: "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.min.js",
             type: "text/javascript"
           },
           {
             src: "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.extensions.min.js",
             type: "text/javascript"
           }, */
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
          }/* ,
        { src: '/fullpage.js/dist/fullpage.min.js' },
        { src: '/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js' },
        { src: '/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js' },
        { src: '/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js' },
 */
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
    ]/* ,
  build: {

  } */
    // Modules: https://go.nuxtjs.dev/config-modules
    ,
    modules: ['@bootstrap-vue-next/nuxt'
    ],
  })