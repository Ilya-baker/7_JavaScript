// Задача 1.
// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let arr = [];

for (num = 0; num < 101; num++) arr.push(num);

console.log(arr)

let primeNumber = [1, 2, 3, 5, 7];

i = 8;

while (i < 101) {
    if (arr[i] % 2 != 0 
        && arr[i] % 3 != 0
        && arr[i] % 5 != 0
        && arr[i] % 7 != 0) {
            primeNumber.push(arr[i]);
            i++;
    } else {
        i++;
    }
}

console.log(primeNumber)


