// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      title: "EatMate"
    }
  }
})
