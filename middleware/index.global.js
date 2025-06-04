
export default defineNuxtRouteMiddleware(() => {
  if (process.client) {
    const mainStore = useMainStore()
    const tg = window.Telegram?.WebApp;

    mainStore.setUserData(tg?.initDataUnsafe?.user || 900)
    
    // if (!tg || !tg.initDataUnsafe?.user)
      // return abortNavigation(createError({ statusCode: 404, statusMessage: 'Not found' }));
  }
});