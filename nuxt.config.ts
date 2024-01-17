export default defineNuxtConfig({
  devtools: { enabled: false },
  components: [
    '~/components',
    {
      path: '~/shared',
      prefix: '',
    },
  ],
  alias: {
    css: '/assets/css',
  },
  app: {
    baseURL: process.env.BASE_URL,
  },
  css: ['@/assets/css/main.css', '@/assets/css/tailwind.css'],
  modules: [
    'nuxt-openapi-docs-module',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    [
      '@nuxtjs/i18n',
      {
        vueI18n: './i18n',
      },
    ],
    [
      'nuxt-openapi-docs-module',
      {
        folder: './docs/openapi',
        name: 'OpenApiDocs',
        files: function () {
          return { 'News-API': 'News API' };
        },
        locales: ['pt'],
      },
    ],
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  ui: {
    global: true,
    icons: [],
  },
});
