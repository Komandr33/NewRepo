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

console.log(Object.keys(options))  // возвращает все ключи объекта в виде массива строк

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



let str = 'Aladdin Asaassin Baaarguzin Piramida'
const reg = /a+/gi;

console.log(str.match(reg));

let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // '^' указывает на отрицание. Т.е. указывает на символы которые не нужно сопоставлять
let result = quoteSample.match(myRegex);
console.log(result);


const isLeapYear = (year) => (year % 400 === 0 || year % 4 === 0 & year % 100 !== 0) ? true : false

console.log(isLeapYear(2020));


function findNextSquare(sq) {
    const s = Math.sqrt(sq);
    return s % s === 0 ? (s + 1) * (s + 1) : -1
}

console.log(findNextSquare(122));


const users = {
    myFriends: [
        { id: 1, name: 'John', age: 25, address: { street: '123 Main St', city: 'New York' } },
        { id: 2, name: 'Alice', age: 30, address: { street: '456 Elm St', city: 'San Francisco' } },
        { id: 3, name: 'Bob', age: 35, address: { street: '789 Oak St', city: 'Seattle' } },
        { id: 4, name: 'John', age: 44, address: { street: '123 Maple Ave', city: 'Dallas' } },
        { id: 5, name: 'Mary', age: 13, address: { street: '456 Elm St', city: 'Los Angeles' } },
        { id: 6, name: 'James', age: 18, address: { street: '987 Pine Rd', city: 'Dallas' } },
        { id: 7, name: 'Jennifer', age: 21, address: { street: '654 Birch Ct', city: 'Seattle' } },
        { id: 8, name: 'Robert', age: 4, address: { street: '876 Spruce Way', city: 'San Francisco' } },
        { id: 9, name: 'Jessica', age: 12, address: { street: '543 Willow Dr', city: 'San Francisco' } },
        { id: 10, name: 'Emily', age: 55, address: { street: '765 Aspen Blvd', city: 'Los Angeles' } },
    ]
}

//   let [currentUsers, setCurrentUsers] = useState<UsersObjectType>(users);

const filterUsers = () => {
    const filteredUsers = users.myFriends.filter(u => u.address.city == 'Los Angeles');
    return filteredUsers
    // setCurrentUsers({ myFriends: filteredUsers });
};

console.log(filterUsers())



    < input id = "client" value = "it-incubator" />

        <script>
            const searchInputElement = document.querySelector(XXX);
            searchInputElement.value = '';

        /* 
        Что нужно написать внутри скобок вместо XXX, чтобы значение в поле ввода зачищалось?
        */
        </script>


<script>
    function removeWhitespaces(string) {
         string.split(' ').filter(s => s !== '').join('_')
    }

    console.log(removeWhitespaces('you are JS developer'))
</script>


Чему равно значение св - ва name объекта user ?

    <script>
        let user = {
            name: 'samurai',
        age: 18
    }

        let user2 = user;

        user2.name = 'ninja';
    </script>


<input id="search"/>
<button id="find">find</button>

<script>
    const searchInputElement = document.getElementById('search')
    const lookButtonElement = document.getElementById('find')

    XXX.addEventListener(YYY, () => {
        console.log(searchInputElement.value)
    })

/*
Что нужно написать внутри скобок вместо XXX и YYY, чтобы при нажатии на кнопку увидеть текст, введённый в input?
Ответ дайте через пробел.
Пример ответа: firstword secondword
*/

</script>


let user = { age: 0 };
for (let i = 0; i < 10; i++) {
    user.age = i;
}


<input id="uzbekistan" value="it-incubator"/>

<script>
    const inputElement = document.getElementById('uzbekistan');
    inputElement.value = '';

   /* Что нужно написать вместо XXX, чтобы значение в поле ввода зачищалось?
❗В качестве ответа укажите строчку целиком.  */
</script>



===========================

<input id="client" value="it-incubator"/>

<script>
    const searchInputElement = document.querySelector(XXX);
    searchInputElement.value = '';

/*
Что нужно написать внутри скобок вместо XXX, чтобы значение в поле ввода зачищалось?
*/
</script>

============================
<input id="search"/>
<button id="find">find</button>

<script>
    const searchInputElement = document.getElementById('search')
    const lookButtonElement = document.getElementById('find')

    XXX.addEventListener(YYY, () => {
        console.log(searchInputElement.value)
    })

/*
Что нужно написать внутри скобок вместо XXX и YYY, чтобы при нажатии на кнопку увидеть текст, введённый в input?
Ответ дайте через пробел.
Пример ответа: firstword secondword
*/

</script>

