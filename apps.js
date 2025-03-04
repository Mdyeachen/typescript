"use strict";
var menu = [
    { name: "Margherita", price: 10 },
    { name: "Pepperoni", price: 12 },
    { name: "BBQ Chicken", price: 14 },
    { name: "Hawaiian", price: 13 },
    { name: "Meat Lovers", price: 15 },
    { name: "Veggie Supreme", price: 11 },
    { name: "Buffalo Chicken", price: 14 },
    { name: "Four Cheese", price: 13 },
    { name: "Mushroom & Truffle", price: 16 }
];
var cashInRegister = 100;
var orderId = 1;
var orderQueue = [];
// add pizza function
var addPizza = function (pizzaObject) {
    menu.push(pizzaObject);
};
// order place function
var placeOrder = function (pizzaName) {
    var findPizza = menu.find(function (pizzaObject) { return pizzaObject.name === pizzaName; });
    if (!findPizza) {
        console.error("".concat(pizzaName, " is not exit in the menu"));
        return;
    }
    cashInRegister += findPizza.price;
    var newOrder = { id: orderId++, pizza: findPizza.name, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
};
// order complete function
var completeOrder = function (orderid) {
    var findOrder = orderQueue.find(function (order) { return order.id === orderid; });
    if (!findOrder) {
        console.error("".concat(orderid, " was not found in the orderQueue"));
        return;
    }
    findOrder.status = "Completed";
    return findOrder;
};
addPizza({ name: "Pesto Chicken", price: 12 });
addPizza({ name: "bcd", price: 12 });
addPizza({ name: "efg", price: 12 });
placeOrder("Pesto Chicken");
placeOrder("bcd");
completeOrder(1);
console.log({ menu: menu });
console.log({ cash: cashInRegister });
console.log({ order: orderQueue });
