// Задача 6
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических
// операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).



function mathOperation(arg1, arg2, operation) {
    switch(operation){
        case "+":
            return console.log(arg1 + arg2);
        case "-":
            return console.log(arg1 - arg2);
        case "*":
            return console.log(arg1 * arg2);
        case "/":
            return console.log(arg1 / arg2);
    }
}

var a = Math.floor(Math.random() * 10) + 1;

var b = Math.floor(Math.random() * 10) + 1;

var demo = mathOperation(a, b, "+");

demo = mathOperation(a, b, "-");

demo = mathOperation(a, b, "*");

demo = mathOperation(a, b, "/");
