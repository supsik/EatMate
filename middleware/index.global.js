
export default defineNuxtRouteMiddleware(() => {
  if (process.client) {
    const mainStore = useMainStore()
    window.Telegram?.WebApp.ready();
    const tg = window.Telegram?.WebApp;

    mainStore.setUserData(tg)
    
    // if (!tg || !tg.initDataUnsafe?.user)
      // return abortNavigation(createError({ statusCode: 404, statusMessage: 'Not found' }));
  }
});