// Задача 2.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

const basket = [
  ['shop_1', 20, 4],
  ['shop_2', 70, 2],
  ['shop_3', 40, 1],
  ['shop_4', 311, 3],
  ['shop_5', 24, 8],
  ['shop_6', 120, 5],
  ['shop_7', 30, 1],
  ['shop_8', 160, 7]
];

function countBasketPrice(basket) {
  let sumList = [];
  let result = 0;
  for (let i = 0; i < basket.length; sumList.push(basket[i][1] * basket[i][2]), i++);
  result = sumList.reduce(function(sum, cor) {
      return sum + cor;
    }, 0);
  return result;
}

console.log(countBasketPrice(basket))

