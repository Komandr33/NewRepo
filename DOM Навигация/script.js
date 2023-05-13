'use strict';

// console.log(document.head);
// console.log(document.documentElement);    // Возвращает весь HTML - документ
// console.log(document.body.childNodes);    // Возвращает все ноды внутри указ. родителя
// console.log(document.body.firstChild);    // Возвращает (ноду) первого потомка
// console.log(document.body.lastChild);     // Возвращает (ноду) последнего потомка
// console.log(document.body.lastElementChild);     // Возвращает последнего потомка (ЕЛЕМЕНТ)


// console.log(document.querySelector('#current').parentNode.parentNode); /* .parentNode - Возвр. ноду-родителя элемента,
// при каждом повторении переходит выше по дереву */

// console.log(document.querySelector('#current').parentElement);  /* .parentElement Возвр. родительский ЭЛ_Т,
// при каждом повторении переходит выше по дереву */

// [data-...=""] -> дата-атрибуты, назначаются как якори/метки для ориентира и хранения доп. информации
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // Возвращает следующий за атр-ту эл-т, т.е. соседа снизу
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); // Возвращает предидущий атр-ту эл-т, т.е. соседа сверху

const li = document.querySelector('[data-current]');
console.log(li.dataset.current); // вернёт 3 -> .dataset доступ к data-атрибуту(получить, изменить) Вводится значение после data (дефисы в имени преобразуются в camelCase, т.е. data-index-number == indexNumber)