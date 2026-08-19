document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.hero-section .container');
    setTimeout(() => {
        container.classList.add('visible');
    }, 100);
});


document.addEventListener("DOMContentLoaded", () => {
    // 1. Анимация появления Hero-секции (как было)
    const container = document.querySelector('.hero-section .container');
    setTimeout(() => {
        container.classList.add('visible');
    }, 100);

    // 2. Таймер обратного отсчета
    // Укажите здесь дату вашей свадьбы (Год, Месяц (0-11), День, Часы, Минуты)
    const weddingDate = new Date(2026, 8, 24, 15, 0).getTime(); // 24 сентября 2026, 15:00

    const timerElements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    function updateTimer() {
        const now = new Date().getTime();
        let distance = weddingDate - now;

        // Если дата уже прошла
        if (distance < 0) {
            timerElements.days.textContent = '00';
            timerElements.hours.textContent = '00';
            timerElements.minutes.textContent = '00';
            timerElements.seconds.textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Добавляем ноль впереди, если число меньше 10
        timerElements.days.textContent = days < 10 ? '0' + days : days;
        timerElements.hours.textContent = hours < 10 ? '0' + hours : hours;
        timerElements.minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        timerElements.seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    // Обновляем таймер каждую секунду
    updateTimer();
    setInterval(updateTimer, 1000);
});


// =========================================
// ZERO БЛОК + МУЗЫКА
// =========================================
let musicStarted = false;

function startMusic() {
    if (musicStarted) return;
    
    const zeroBlock = document.getElementById('zero-block');
    const audio = new Audio('1.mp3');
    
    // Запускаем музыку
    audio.play().catch(function(error) {
        console.log('Автовоспроизведение заблокировано, нужен клик пользователя');
    });
    
    // Прячем zero-блок
    zeroBlock.classList.add('hidden');
    
    // Удаляем блок из DOM после анимации
    setTimeout(function() {
        zeroBlock.style.display = 'none';
    }, 800);
    
    musicStarted = true;
    
    // Сохраняем аудио в глобальную переменную, чтобы оно не остановилось
    window.weddingAudio = audio;
}
