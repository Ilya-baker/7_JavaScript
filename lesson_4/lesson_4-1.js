// Задача 1. 
// Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function showObject(userNum) {
    if (userNum.length == 2) {
        userNum.unshift('0');
    } else if (userNum.length == 1) {
        userNum.unshift('0', '0');
    };
    let obj = {единицы: userNum[2], десятки: userNum[1], сотни: userNum[0]};
        if (userNum.length > 3) {
            obj = {};
            return console.log('Введено недопустимое значение', obj);
        }
    return console.log(obj);
}

let userNum = String(prompt()).split('', 999);

showObject(userNum);

