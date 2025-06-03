export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-web-app.js';
    script.onload = () => {
      window.Telegram.WebApp.ready(); 
    };
    document.head.appendChild(script);
  }
});