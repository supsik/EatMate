export default defineNuxtPlugin(nuxtapp => {
  const mainStore = useMainStore()
  const tg = window.Telegram.WebApp

  if (tg) {
    tg.expand()
    mainStore.setUserData(tg.initDataUnsafe?.user || {})
  }
})