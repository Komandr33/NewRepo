function createCounter() {
    let counter = 0
    const myFunction = function () {
        counter = counter + 1
        return counter
    }
    return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)

//--------------------------------------------------------------

function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    function checkNumber() {
        console.log(num);
    }
    num++;
    return checkNumber;
}

var number = numberGenerator();
number(); // 2\

//--------------------------------------------------------------
// пример колбэк функции ниже

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}.`);
    callback();
}

function done() {
    console.log('Я прошел этот урок.')
}

learnJS('JavaScript', done);

//--------------------------------------------------------------
// for...in - цикл для перебора массива. пример ниже

const options = {
    name: 'test',
    width: 1200,
    height: 800,
    colors: {
        border: 'black',
        bg: 'red'
    },

    makeTest: function () {      // пример создания метода для объекта
        console.log('test');
    }
}

options.makeTest();             // запуск созданного метода

for (let key in options) {
    if (typeof (options[key]) === 'object')
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

Object.keys(options) // возвращает все ключи объекта в виде массива строк

//--------------------------------------------------------------


function Animal(name) {
    this.a = name
}

animal = new Animal('baba');
console.log(animal);


let user = { name1: "John", years: 30 };

let { name1, years: age, isAdmin = false } = user; // деструктуризация объекта

alert(name1); // John
alert(age); // 30
alert(isAdmin); // false




arr.forEach(function (value, index, arr) {    // метод пребора массива без модиф-ии arr
    console.log(`${index}: ${value} внутри массива ${arr}`)
})


let arr = [2, 3, 1, 5, 7, 10];

function LinearSearch(index, myArr) {
    let result = -1
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] == index) {
            result = i
        }
    }
    return result;
}
console.log(LinearSearch(41, arr));



const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (prop in contacts[i]) {
                return contacts[i][prop];
            } else return 'No such property';
        }
    }
    return 'No such contact';
}
console.log(lookUpProfile("Harry", "likes"));


const rps = (p1, p2) => {
    if (p1 !== p2) {
        if ((p1 == "scissors" && p2 == "paper")
            || (p1 == "paper" && p2 == "rock")
            || (p1 == "rock" && p2 == "scissors")) {
            return "Player 1 won!";
        } else return "Player 2 won!";
    } else return "Draw!";
};

function century(year) {
    return Math.ceil(year / 100);
}




function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf("needle", 0)}`;
}

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        } else continue;
    }
    return sum;
}

console.log(positiveSum([1, 2, -3, 5]));

function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 10);
}

const repeatStr = (n, s) => s.repeat(n);

function createCounter() {
    counter = 0;

    const myFunction = function () {
        counter += 1;
        return counter;
    }

    return myFunction;
}

//-----------------------------------------------------

let y = [1, 2, 3];
let x = [1, 2, 3];
// console.log(x);
console.log(!!(0 && 2));



