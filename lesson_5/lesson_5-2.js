// Задание 2. 
// Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 2.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

const toHtml = {
    showBasket(val) {
        return `<div class="val">
                    <div><b>Меню</b>: ${val.menu}</div>
                    <div><b>Цена</b>: ${val.price}</div>
                    <div><b>Количество</b>: ${val.quantity}</div>
                    <div><b>Итого</b>: ${val.quantity * val.price}</div>
                </div>`;
    },
};

const basket = {
    toHtml,
    blockList: [],
    buttonTouch: [],
    product: [
        {
            menu: 'Пирог', 
            price: 120,
            quantity: 2,
        },
        {
            menu: 'Чизкейк', 
            price: 200,
            quantity: 3,
        },
        {
            menu: 'Кекс', 
            price: 150,
            quantity: 5,
        },
        {
            menu: 'Пицца', 
            price: 600,
            quantity: 1,
        },
        {
            menu: 'Кофе', 
            price: 80,
            quantity: 4,
        },
    ],
    
    init() {
        this.blockList = document.querySelector('.list_basket');
        this.buttonTouch = document.querySelector('.clear_basket');
        this.buttonTouch.addEventListener('click', this.deletProd.bind(this));
        this.showBasket();
    },

    showBasket() {
        if (this.product.length) {
            this.product.forEach(val => {
                this.blockList.insertAdjacentHTML('beforeend', this.toHtml.showBasket(val));
            });
            if (this.product.length >= 5) {
                this.blockList.insertAdjacentHTML('beforeend', `В Корзине ${this.product.length} товаров. 
                <br> Общая стоимость: ${this.sumPrice()}р.`);
            } else if (this.product.length === 1) {
                this.blockList.insertAdjacentHTML('beforeend', `В Корзине ${this.product.length} товар. 
                <br> Общая стоимость: ${this.sumPrice()}р.`);
            } else {
                this.blockList.insertAdjacentHTML('beforeend', `В Корзине ${this.product.length} товарa. 
                <br> Общая стоимость: ${this.sumPrice()}р.`);
            }
        } else {
            this.blockList.textContent = 'Корзина пуста';
        }
    },

    sumPrice() {
        return this.product.reduce(function (price, val) {
            return price + val.price * val.quantity;
        }, 0);
    },
    
    deletProd() {
        this.product = [];
        this.showBasket();
    },
};

basket.init();
