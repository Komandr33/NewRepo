'use strict';

let num1 = +prompt("Введите первое число", "");
let num2 = +prompt("Введите второе число", "");
let sum = num1 + num2;
console.log(sum);

//-----------------------------------------------


alert(Math.round(6, 35 * 10) / 10); //правильное округление (через .toFixed неточно)

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