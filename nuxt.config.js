export default defineNuxtConfig({
  target: "static",
  devtools: { enabled: false },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      script: [],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "title",
          content:
            "Agence de communication digitale à Paris , Abidjan et Capetown | Big Five",
        },
        { name: "msapplication-TileColor", content: "#82368c" },
        { name: "theme-color", content: "#ffffff" },
        {
          hid: "description",
          name: "description",
          content:
            "À la recherche d'une agence de communication digitale de premier plan? Notre agence offre des solutions innovantes pour propulser votre présence en ligne.De la conception de sites web modernes à la gestion efficace des médias sociaux, nous sommes les experts de confiance qui vous aideront à atteindre vos objectifs numériques.Contactez - nous dès aujourd'hui pour des stratégies personnalisées, une créativité exceptionnelle et des résultats tangibles. Faites confiance à notre agence de communication digitale pour vous positionner en tête des SERP de Google et stimuler votre succès en ligne.",
        },
        {
          property: "og:title",
          content: "Big Five Solutions | Agence de communication digitale",
        },
        {
          property: "og:description",
          content:
            "Agence de communication digitale à Paris , Abidjan et Capetown | Notre agence",
        },
        {
          property: "og:image",
          content: "https://bigfivevue.vercel.app/img/logo.jpg",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://use.typekit.net/lpb4lmp.css",
        },
        { rel: "icon", type: "image/x-icon", href: "/img/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/img/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/img/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/img/favicon-16x16.png",
        },
        { rel: "manifest", href: "/img/site.webmanifest" },
        {
          rel: "mask-icon",
          href: "/img/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
        // Préconnecter à Adobe Fonts (remplacez `use.typekit.net` par votre URL Adobe Fonts)
        { rel: "preconnect", href: "https://use.typekit.net" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/masonry/4.0.0/masonry.pkgd.min.js",
      type: "text/javascript",
    },
    {
      src: "https://unpkg.com/vue-masonry@0.12.1/dist/vue-masonry.min.js",
      type: "text/javascript",
    },
    {
      src: "https://unpkg.com/vue",
      type: "text/javascript",
    },
    {
      src: "https://unpkg.com/vue-ico",
      type: "text/javascript",
    },
  ],
  css: ["@/assets/css/styles.scss", "bootstrap/dist/css/bootstrap.min.css"],
  plugins: [],
  components: true,
  buildModules: [
    "@nuxtjs/axios",
    "@nuxtjs/composition-api/module",
    "@nuxt/image",
    { provider: "static", dir: "assets/images" },
    "@aceforth/nuxt-optimized-images",
  ],
  optimizedImages: {
    optimizeImages: true,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
    maxRedirects: 5,
    abortOnRedirect: true,
  },
  modules: ["@bootstrap-vue-next/nuxt", "@nuxt/content", "@nuxt/image"],
  image: {
    provider: process.env.VERCEL_ENV ? "vercel" : "ipx",
    ipx: {
      dir: "assets/images", // Le répertoire où se trouvent vos images
    },
  },
  content: {
    dir: "content", // Path to the "content" directory
    fullTextSearchFields: ["title", "description"], // Optional: Specify fields for full-text search
  },
  router: {
    /*     routes: [
      {
        path: "/realisations/:id",
        component: "~/pages/realisations.vue",
      },
      {
        path: "/solutions/:id",
        component: "~/pages/solutions.vue",
      },
      {
        path: "/solutions/bigcity",
        redirect: "~/pages/solutions/bigcity.vue",
      },
      {
        path: "/solutions/bigcrm",
        redirect: "~/pages/solutions/bigcrm.vue",
      },
    ], */
  },
  workbox: {
    // Workbox options
  },
  /* build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = "source-map";
      }
    },
    cssSourceMap: true,
  }, */
});
