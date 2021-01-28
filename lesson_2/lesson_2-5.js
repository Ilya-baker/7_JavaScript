// Задача 5 
// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

var a = Math.floor(Math.random() * 100) + 1;

var b = Math.floor(Math.random() * 100) + 1;

var result = 0;

function sum(a, b) {
    return a + b;
} 

function dif(a, b) {
    return a - b;
} 

function multi(a, b) {
    return a * b;
} 

function divis(a, b) {
    return a / b;
} 

result = sum(a, b);
console.log(`${a} + ${b} = ${result}`);

result = dif(a, b);
console.log(`${a} - ${b} = ${result}`);

result = multi(a, b);
console.log(`${a} * ${b} = ${result}`);

result = divis(a, b);
console.log(`${a} / ${b} = ${result.toFixed(2)}`);