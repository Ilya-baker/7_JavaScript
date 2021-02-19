"use strict";

const menu = {
    basket: [],
    menuBox: [],
    menuList: [
        {
            id: 123,
            nameProduct: 'Пирог',
            price: 120,
        },
        {
            id: 321,
            nameProduct: 'Чизкейк',
            price: 200,
        },
        // {
        //     id: 547,
        //     nameProduct: 'Кекс',
        //     price: 150,
        // },
        // {
        //     id: 232,
        //     nameProduct: 'Пицца',
        //     price: 600,
        // },
        // {
        //     id: 777,
        //     nameProduct: 'Кофе',
        //     price: 80,
        // },
    ],

    showMenu(value) {
        return `<div class="product">
                <h2>${value.nameProduct}</h2>
                <p>${value.price}р.</p>
                <button class="in-basket" data-id="${value.id}">Купить</button>
            </div>`;
    },

    init(menuBlock, basket) {
        this.menuBox = document.querySelector(`.${menuBlock}`);
        this.basket = basket;
        this.render();
        this.touchClick();
    },

    render() {
        this.menuList.forEach(value => {
        this.menuBox.insertAdjacentHTML('beforeend', this.showMenu(value));
    });
    },

    touchClick() {
        this.menuBox.addEventListener('click', event => this.idBasket(event));
    },
    
    idBasket(event) {
        if (!event.target.classList.contains('in-basket')) return;
        const id = +event.target.dataset.id;
        this.basket.idBasket(id);
    }, 
};

const basket = {
    basketBox: [],
    basketButton: [],
    basketList: [],
    goods: [],

    init(classBasket, basketButton, basketList) {
        this.basketBox = document.querySelector(`.${classBasket}`);
        this.basketButton = document.querySelector(`.${basketButton}`);
        this.basketList = basketList;
        this.touchClick();
        this.render();
    },

    touchClick() {
        this.basketButton.addEventListener('click', this.delBasket.bind(this)); 
    },

    delBasket() {
        this.goods = [];
        this.render();
    },

    render() {
        if (this.goods.length != 0) {
            this.basketListRender();
        } else {
            this.messageBasket();
        }
    },

    searchByid(id) {
        return this.basketList.find(product => product.id == id);
    },

    idBasket(id) {
        const product = this.searchByid(id);
        if (product) {
            const findInBasket = this.goods.find(({id}) => product.id === id);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({...product, quantity: 1});
            }
            this.render();
        } 
    },

    messageBasket() {
        this.basketBox.innerHTML = '';
        this.basketBox.insertAdjacentHTML('beforeend', 'Корзина пуста');
    },

    basketListRender() {
        this.basketBox.innerHTML = '';
        this.goods.forEach(value => {
            this.basketBox.insertAdjacentHTML('beforeend', this.valueRender(value));
        });
    },

    valueRender(value) {
        return `<div>
                <h2>${value.nameProduct}</h2>
                <p>${value.price}р.</p>
                <p>${value.quantity} шт.</p>
                <p>Итого: ${value.price * value.quantity}р.</p>
            </div>`;
    },
};

menu.init('menu', basket);
basket.init('basket', 'clr-basket', menu.menuList);
