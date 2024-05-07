import Mode from 'frontmatter-markdown-loader/mode'

const isDev = process.env.NODE_ENV === 'development'
export default {
  ssr: false,
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Stef\'s webpage online',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Developer with 5+ years of experience in building tools for creativity. Build and launched products with SwiftUI, React and TypeScript'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'me', href: 'https://subculture.chat/@stef' }
    ]
  },
  server: {
    port: isDev ? 3000 : 80
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    '~/plugins/vue-formulate',
    { src: "~/plugins/simple-analytics.js", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/svg",
    '@nuxtjs/style-resources',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ["nuxt-social-meta",
      {
        url: "https://stefkors.com",
        title: "Stef\'s webpage online",
        site_name: "Stef\'s webpage online",
        description: "Developer with 5+ years of experience in building tools for creativity. Build and launched products with SwiftUI, React and TypeScript",
        img: "https://stefkors.com/social.png",
        locale: "en_US",
        twitter: "@stef_kors",
        twitter_card: "summary_large_image",
        themeColor: "#05ffe2",
      },]
  ],
  // Doc: https://hackernoon.com/how-i-use-scss-variables-mixins-functions-globally-in-nuxt-js-projects-while-compiling-css-utilit-58bb6ff30438
  styleResources: {
    scss: ['assets/scss/main.scss'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // https://regenrek.com/posts/create-a-frontmatter-markdown-powered-blog-with-nuxt.js/
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.VUE_COMPONENT, Mode.META, Mode.BODY]
        }
      })
    }
  }
}
