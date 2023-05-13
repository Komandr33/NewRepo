'use strict'

/* "Всплытие событий" - это срабатывание обработчика сначала на самом вложенном эл-те,
а после по иерархии вверх (currentTarget позволяет увидеть это всплытие)*/

const btn = document.querySelector('button'),
    btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay'),
    link = document.querySelector('a');


// btn.onclick = function () { // Первое событие
//     alert('Click');
// };

// btn.onclick = function () {  // Второе событие
//     alert('second click');   // при такой записи сработает только второе событие,
// };                           // первое перезатрётся

btn.addEventListener('click', () => {  // срабатывает при клике
    alert('Click');
});

btn.addEventListener('click', () => {  // при такой записи отработат все события
    alert('Second click');
});

btn.addEventListener('mouseover', (e) => { // 'mouseover' и 'mouseenter' срабатывает при наведении курсора 
    // console.log(e);          // (e) в колбеке означает event(событие), передаётся первым аргументом и получает
    console.log('Hover');       // данные об используемом елементе (например координаты или target)
    // console.log(e.target);   //  target - эл-т на котором произошло событие
});

let i = 0;
const delElem = (e) => {
    console.log(e.target);     // как пример действия с элементом с помощью арг. 'e'
    console.log(e.type);       // как пример действия с элементом с помощью арг. 'e'
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', delElem);   // удаляю обработчик события
    // }
}


// btn.addEventListener('click', delElem);     // назначаю обработчик события
// overlay.addEventListener('click', delElem);

// Чтобы назначит обработчик событий нескольким одинаковым элемента используем forEach

btns.forEach((btn) => {
    btn.addEventListener('click', delElem, { once: true }); // здесь, 3й арг.(необяз-й объект) - опции события //-> once: означает, что действие выполнится только один раз(вместо условия 'if') если 'true', бработчик автоматически удаляется при вызове
});

link.addEventListener('click', (e) => {
    e.preventDefault(); // отменяет стандартное поведение браузера с элементом если это возможно
    console.log(e.target);
});

