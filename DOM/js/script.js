'use strict';

// -------------->>> <<< МЕТОДЫ 'DOM'(ОБЪЕКТНАЯ МООДЕЛЬ ДОКУМЕНТА) >>> <<<--------------

const box = document.getElementById('box'), // возвращает эл-т по ID

    btns = document.getElementsByTagName('button'),  // возвр. эл-тЫ по тегу 
    // в виде псевдомассива(коллекции)(индекс здесь для возврата конкретного эл-та)

    circles = document.getElementsByClassName('circle'), // возвр. эл-тЫ по классу
    // в виде псевдомассива(коллекции)

    wrapper = document.querySelector('.wrapper'), // возв. эл-т по селектору CSS
    hearts1 = wrapper.querySelectorAll('.heart'),    // вариант получения доступа к КОНКРЕТНЫМ эл-м внутри блока ( c классом.wrapper попадающих под класс .heart)
    oneHeart = document.querySelector('.heart'),  // возв. эл-т по селектору CSS

    hearts = document.querySelectorAll('.heart'); // возвр. эл-тЫ по селектору CSS в виде псевдомассива(коллекции)


// box.style.backgroundColor = 'orange'; // изменяет стили элемента на странице
// box.style.width = '400px';
// ниже короткая запись нескольких свойств

box.style.cssText = 'background-color: orange; width: 400px;'

btns[0].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';
circles[1].style.backgroundColor = 'yellow';
circles[2].style.backgroundColor = 'green';

// чтобы задать стили всем элементам болкак можно использовать цикл forEach
hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
})

const d = document.createElement('div'); //создаёт эл-т, тег (например div) в js-документе
const text = document.createTextNode('любой текст'); // создаёт текстовый узел без оболочки тега

d.classList.add('black'); // добавляет класс к элементу внутри JS

wrapper.prepend(d); // добавляет эл-т на страницу в начало указанного блока/тега

// document.body.append(d); // добавляет эл-т на страницу в конец указанного блока/тега
// wrapper.append(d); // то же, что и document.body.append(d);
// .appendChild(d);  устаревший .append 

// hearts[0].before(d); // добавляет эл-т на страницу перед указаным элементом
// hearts[0].after(d); // добавляет эл-т на страницу после указанного элемента
// .insertBefore(a, b) // устаревший метод добавляет эл-т на стр. 1й арг(что), 2й арг(перед чем)

// circles[0].remove(); // удаляет эл-т со страницы
// wrapper.removeChild(circles[0]); // устаревший метод удаляет эл-т в скобках со стр. (обращение через родителя)

// hearts1[0].replaceWith(circles[0]); // заменят элемент на указанный в скобках
// wrapper.replaceChild(circles[0], hearts[0]) // устаревший м-д заменят элемент 1й арг(что), 2й арг(на что)

d.innerHTML = '<h1>Hello</h1>'; // добавляет HTML-структуру(или скрипт) на страницу (в указанный э-т)

// d.textContent = 'Hello'; // добавляет текст на страницу (в указанный э-т)

d.insertAdjacentHTML("beforebegin", '<h2>добавляет ПЕРЕД элементом</h2>');
d.insertAdjacentHTML('afterbegin', '<h2>добавляет в НАЧАЛО элемента</h2>');
d.insertAdjacentHTML('beforeend', '<h2>добавляет в КОНЕЦ элемента</h2>');
d.insertAdjacentHTML('afterend', '<h2>добавляет ПОСЛЕ элемента</h2>');