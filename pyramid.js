"use strict";

for (i = 0; i < 3; i++) {
    console.log(i);
    for (j = 0; j < 3; j++) {
        console.log(j);
    }
}

let result = '';
const length = 10;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += '\n';
}

console.log(result);


first: for (i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}

let i, j;



// НЕ МОГУ ПОНЯТЬ КАК ОТРАБОТАЛ КОД НИЖЕ!!!!!!!!!!!!!!!!!!!!!!!
loop1:
for (i = 0; i < 3; i++) {      //Первый цикл, обозначенный меткой "loop1"
    loop2:

    for (j = 0; j < 3; j++) {   //Второй цикл, обозначенный меткой "loop2"
        if (i === 1 && j === 1) {
            continue loop1;
        }
        console.log('i = ' + i + ', j = ' + j);
    }
}
// Вывод:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Обратите внимание на пропуск "i = 1, j = 1" и "i = 1, j = 2"

let str = '';

loop1:
for (let i = 0; i < 5; i++) {
    // if (i === 1) {
    //     continue loop1;
    // }
    str = str + i;
}
console.log(+str);
