// Обработка кнопок для показа QR-кодов
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.qr-button');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const qrType = button.getAttribute('data-qr');
      const qrElement = document.getElementById(`${qrType}-qr`);
      const isCurrentlyShown = qrElement.style.display === 'block';
      
      // Скрываем все QR-коды
      document.querySelectorAll('.qr-item').forEach(item => {
        item.style.display = 'none';
      });
      
      // Если QR не был показан, показываем его
      if (!isCurrentlyShown) {
        qrElement.style.display = 'block';
      }
      
      // Обновляем текст всех кнопок
      buttons.forEach(btn => {
        const btnQrType = btn.getAttribute('data-qr');
        const isActive = btnQrType === qrType && !isCurrentlyShown;
        
        btn.textContent = getButtonText(btnQrType, isActive);
      });
    });
  });
});

// Функция для генерации текста кнопки
function getButtonText(qrType, isActive) {
  const qrNames = {
    'phone': 'номера телефона',
    'tg': 'Telegram',
    'wechat': 'WeChat'
  };
  
  return `${isActive ? 'Скрыть' : 'Показать'} QR ${qrNames[qrType]}`;
}

// Остальной код (Service Worker и проверка онлайн-статуса) остается без изменений
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

window.addEventListener('online', () => {
  console.log('You are now online!');
});

window.addEventListener('offline', () => {
  console.log('You are now offline!');
});

if (!navigator.onLine) {
  console.log('Started in offline mode');
}