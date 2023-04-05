'use strict';

let num1 = +prompt("Введите первое число", "");
let num2 = +prompt("Введите второе число", "");
let sum = num1 + num2;
console.log(sum);

//-----------------------------------------------


alert(Math.round(6.35 * 10) / 10); //правильное округление (через .toFixed неточно)

//-----------------------------------------------

function random(min, max) {                     // возвращает рандомное число c плав. точ. от min до max
    return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

//-----------------------------------------------

function random(min, max) {                         // возвращает рандомное число от min до max
    let a = min + Math.random() * (max + 1 - min);  // c равной вероятностью
    return Math.floor(a);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

//-----------------------------------------------

switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;

    default:
        alert('We hope that this page looks ok!');
}  // ->->->->

if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome' ||
    browser == 'Firefox' ||
    browser == 'Safari' ||
    browser == 'Opera') {
    alert('Okay we support these browsers too');
} else alert('We hope that this page looks ok!');

//-----------------------------------------------

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
    alert('Вы ввели число 0');
}

if (number === 1) {
    alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
    alert('Вы ввели число 2, а может и 3');
}  // ->->->->

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;

    case 1:
        alert('Вы ввели число 1');
        break;

    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}

//-----------------------------------------------

function min(a, b) {
    if (a < b) {
        return a
    } else
        return b;
} // ->->->->

function min(a, b) {
    return a < b ? a : b;
}

//-----------------------------------------------


function pow(x, y) {
    let result = x ** y;
    return result;
}

let a = prompt('x?', '');
let b = prompt('y?', '');

(b < 1) ? alert(`Степень ${y} не поддерживается, используйте натуральное число`) : alert(pow(a, b));

function pow(x, n) {
    let result = x ** n;
    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

(n < 1) ? alert(`Степень ${n} не поддерживается, используйте натуральное число`) : alert(pow(x, n));

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    function () { alert("Вы согласились."); },
    function () { alert("Вы отменили выполнение."); }
);

let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}

ask(
    'Вы согласны?',
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);

//-----------------------------------------------


let user = {};             // создал объект
user.name = 'John';        // добавил свойство объекта  
user.surname = 'Smith';    // добавил свойство объекта 
user.name = 'Pith';        // добавил свойство объекта 
delete user.name;          // удалил свойство объекта 

//-----------------------------------------------


function isEmpty(obj) {
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

//-----------------------------------------------

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let summ = 0;
for (let key in salaries) {
    summ += salaries[key];
};
console.log(summ);

//-----------------------------------------------

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


// после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

function multiplyNumeric(m) {
    for (let key in m) {
        if (typeof m[key] === 'number') {
            m[key] *= 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu);

//-----------------------------------------------

let user = {
    name: 'Andrew',
    age: 36,
};

let add = {
    sity: 'Krasnodar',
}

let add2 = {
    country: 'Russia',
}

Object.assign(user, add, add2); // объединяет объекты

console.log(user);

//-----------------------------------------------

let calculator = {

    read() {
        this.a = +prompt('a?', '0');
        this.b = +prompt('b?', '0');
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//-----------------------------------------------

let num = 1e4; // вернёт 10000 т.к. 'е' умножает на 1 с кол-вом нулей указанным после 'e'
let m = 1e-3;  // вернёт 0.001 т.к. 'е' делит на 1 с кол-вом нулей указанным после 'e', если оно отрицательное
//-----------------------------------------------

let num3 = 255;
console.log(num3.toString(2));  // вернёт число 255 в 2-чной системе исчисления в виде строки
console.log(num3.toString(8));  // вернёт число 255 в 8-чной системе исчисления в виде строки
console.log(num3.toString(16)); // вернёт число 255 в 16-чной системе исчисления в виде строки

//-----------------------------------------------

let num_1 = 1.23456;
console.log(Math.floor(num_1 * 100) / 100); /* 1.23456 -> 123.456 -> 123 -> 1.23   Math.floot() округляет
                                               в меньшую сторону 3.1 становится 3, а -1.1 — -2 */

//-----------------------------------------------

let num_2 = 12.34;
let num_22 = 12.36;
console.log(num_2.toFixed(1));  // 12.34 -> 12.3    toFixed(n) округляет число до 'n' знаков после запятой 
console.log(num_22.toFixed(1)); // 12.36 -> 12.4    и возвращает строковое представление результата. 
//                  Округляет как в большую, так и меньшую стороны 

//-----------------------------------------------

isNaN('value');      // преобразует значение в число и проверяет является ли оно NaN и еслм да, возвр true.
isFinite('value');   /* преобразует аргумент в число и возвращает true,
                        если оно является обычным числом, т.е. НЕ NaN/Infinity/-Infinity */
Number.isNaN('value');//  НЕ преобразует значение в число и проверяет является ли оно NaN
Number.isFinite('value');  /* НЕ преобразует аргумент в число и возвращает true,
                             если оно является обычным числом, т.е. не NaN/Infinity/-Infinity */

//-----------------------------------------------

Object.is(a, b); // идентичен а === b и может сравнивать NaN === NaN   Object.is(NaN, NaN) -> true

//-----------------------------------------------

parseInt('str', 'radix'); /* возвращает целое число из строки.
                             Во втором арг.(необяз) указывается система исчисления */

parseFloat('str');        // возвращает число с плав. точкой из строки

//-----------------------------------------------



//-----------------------------------------------
