if ('serviceWorker' in navigator) { // Проверяем поддержку браузером
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js'); // Регистрируем воркер
  });
}

// Регистрация Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

// Проверка онлайн-статуса и обновление
window.addEventListener('online', () => {
  console.log('You are now online!');
});

window.addEventListener('offline', () => {
  console.log('You are now offline!');
});

// Проверяем статус при загрузке
if (!navigator.onLine) {
  console.log('Started in offline mode');
}