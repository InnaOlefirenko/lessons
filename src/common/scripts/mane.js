//задание 1
function randomInteger(min, max) {
    return Math.random() * (max - min) + min;
}

let number = randomInteger(5,10);
console.log(number);

// задание 2
let user = new Object();
console.log(user);
user.name = 'Вася';
console.log(user);
user.surname = 'Петров';
console.log(user);
user.name = 'Сергей';
console.log(user);
delete user.name;
console.log(user);


// задание 3
function isEmpty(obj) {
 for (let key in obj) {
     return false;
 }
 return true;
}
let user1 = new Object();

console.log( isEmpty(user1) );

user1.name = 'Вася';

console.log( isEmpty(user1) );


//задание 4
let salaries = {
    'Сергей': 1200,
    'Егор': 1300,
    'Света':1200,
    'Маша':1350,
    'Глаша':1270
};
let sum = 0;
for (let name in salaries) {
    sum += salaries[name];
}
console.log (sum);

// задание 5
let salaries1 = {
    'Сергей': 1200,
    'Егор': 1300,
    'Света':1200,
    'Маша':1350,
    'Глаша':1270
};
let max = 0 ;
let maxName = "";
for (let name in salaries1) {
    if (max < salaries1[name]) {
        max = salaries1[name];
        maxName = name;
    }
}
console.log ( maxName || "нет сотрудников" );

//задание 6
let config = {
    color: "red",
    age: 35,
    height: 120
};
function isNumeric(config) {
    return !isNaN(parseFloat(config)) && isFinite(config);
}
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(config);
console.log ("config color=" + config.color + " config age=" + config.age + " config height=" + config.height);

//задание 7
let tree = ["Липа", "Клен", "Дуб", "Каштан"];
let rand = Math.floor(Math.random() * tree.length);

alert( tree[rand] );
console.log(tree[rand]);

//задание 8
let numbers = [];

while (true) {

    let value = prompt("Введите число", 0);

    if (value === "" || value === null || isNaN(value)) break;

    numbers.push(+value);
}

let sum1 = 0;
for (let x = 0; x < numbers.length; x++) {
    sum1 += numbers[x];
}

console.log( sum1 );

//задание 9
function find(array, value) {

    for (let i = 0; i < array.length; i++) {
        if ([].indexOf) {

            let find = function (array, value) {
                return array.indexOf(value);
            }

        } else {
            let find = function (array, value) {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === value) return i;
                }

                return -1;
            }
        }
    }
}
let numbers2 = [83, 20, 35, 54, 21, 14];
console.log(find(numbers2,20));

