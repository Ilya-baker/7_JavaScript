// Задача 2.
// Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. 
// Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

const BasketPrice = {
    product: [
        {
            prod_name: 'пирог', 
            price: 120,
            quantity: 2,
        },
        {
            prod_name: 'чизкейк', 
            price: 200,
            quantity: 3,
        },
        {
            prod_name: 'кекс', 
            price: 150,
            quantity: 5,
        },
        {
            prod_name: 'пицца', 
            price: 600,
            quantity: 1,
        },
    ],

    sumPrice() {
        return console.log('Общая сумма заказа:', this.product.reduce(function (price, val) {
            return price + val.price * val.quantity;
        }, 0));
    }    
};

BasketPrice.sumPrice();

    


