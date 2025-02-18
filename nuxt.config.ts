// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true }
// })

export default defineNuxtConfig({
  modules: ['bootstrap-vue-3/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.min.css'],

  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3002'
    }
  },
  devServer: {
    port: 3003
  },

  compatibilityDate: '2025-02-16'
})