// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  devServer: {
    port: 8080
  },
  modules: ['@pinia/nuxt'],
  css: ['/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/variables.scss" as *;`
        }
      }
    }
  },
  app: {
    head: {
      title: "EatMate",
      script: [
        { src: 'https://telegram.org/js/telegram-web-app.js' }
      ]
    }
  }
})
