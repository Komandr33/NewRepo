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
