const callButton = document.getElementById('callButton');

// Добавляем обработчик события клика на кнопку
callButton.addEventListener('click', function() {
    // Замените номер телефона на свой
    const phoneNumber = '+99670618181';
    
    // Формируем ссылку для звонка
    const telLink = 'tel:' + phoneNumber;

    // Выполняем звонок, если браузер поддерживает вызовы по ссылке tel
    if ('href' in HTMLAnchorElement.prototype) {
        window.location.href = telLink;
    } else {
        console.log('Ваш браузер не поддерживает звонки по номеру телефона.');
    }
});
const callButton2 = document.getElementById('callButton2');

// Добавляем обработчик события клика на кнопку
callButton2.addEventListener('click', function() {
    // Замените номер телефона на свой
    const phoneNumber = '+99670618181';
    
    // Формируем ссылку для звонка
    const telLink = 'tel:' + phoneNumber;

    // Выполняем звонок, если браузер поддерживает вызовы по ссылке tel
    if ('href' in HTMLAnchorElement.prototype) {
        window.location.href = telLink;
    } else {
        console.log('Ваш браузер не поддерживает звонки по номеру телефона.');
    }
});