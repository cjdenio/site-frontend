export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Caleb Denio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Caleb Denio: Software Developer and Graphic Designer',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Caleb Denio',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Software developer, graphic designer, and lasagna enthusiast',
      },
      {
        hid: 'color-scheme',
        name: 'color-scheme',
        content: 'dark',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://code.tidio.co/gddlejvxb0ys39hipq00maugortt9rnf.js',
        body: true,
        async: true,
      },
      {
        src: 'https://site-analytics.host.calebdenio.me/umami.js',
        async: true,
        defer: true,
        'data-website-id': '2d264786-962a-4654-8f1f-db54c834d912',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'highlight.js/styles/atom-one-dark.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/fontawesome.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  googleFonts: {
    families: {
      'Josefin+Sans': [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Lato: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Fira+Code': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/uses',
        redirect: '/tech',
      });
    },
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.BACKEND_URL || 'http://localhost:1337/graphql',
      },
    },
  },
};
