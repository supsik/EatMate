export default defineNuxtRouteMiddleware(() => {
  if (process.client) {
    const tg = window.Telegram?.WebApp;
    
    if (!tg || !tg.initDataUnsafe?.user) {
      return abortNavigation(createError({ statusCode: 404, statusMessage: 'Not found' }));
    }
  }
});