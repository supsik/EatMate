export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    const mainStore = useMainStore()

    const script = document.createElement('script')
    script.src = 'https://telegram.org/js/telegram-web-app.js'

    script.onload = () => {
      const tg = window.Telegram?.WebApp

      // if (!tg)
        // return abortNavigation(createError({ statusCode: 404, statusMessage: 'Not found' }));
      tg?.ready()
      mainStore.setUserData(tg?.initDataUnsafe?.user || 'error')
    }

    document.head.appendChild(script)
  }
})