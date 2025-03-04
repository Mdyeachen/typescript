"use strict";

// Type of pizza menu
type PizzaType = {
    name: string;
    price: number;
};

type Order = {
    id: number;
    pizza: string;
    status: string;
};

const menu: PizzaType[] = [
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

let cashInRegister: number = 100;
let orderId: number = 1;
const orderQueue: Order[] = [];

// add pizza function
const addPizza = (pizzaObject: PizzaType) => {
    menu.push(pizzaObject);
}

// order place function
const placeOrder = (pizzaName) => {
    const findPizza = menu.find((pizzaObject) => pizzaObject.name === pizzaName);
    if(!findPizza){
        console.error(`${pizzaName} is not exit in the menu`)
        return
    }
        cashInRegister += findPizza.price;
        const newOrder:Order  = { id : orderId++, pizza : findPizza.name, status : "ordered"}
        orderQueue.push(newOrder)

        return newOrder
}


// order complete function
const completeOrder = (orderid: number) => {
    let findOrder = orderQueue.find(order => order.id === orderid);
    if(!findOrder){
        console.error(`${orderid} was not found in the orderQueue`)
        return        
    }
        findOrder.status = "Completed";

    return findOrder;
}

addPizza({ name: "Pesto Chicken", price: 12 });
addPizza({ name: "bcd", price: 12 });
addPizza({ name: "efg", price: 12 });


placeOrder("Pesto Chicken");
placeOrder("bcd");
completeOrder(1);

console.log({ menu : menu})
console.log({ cash : cashInRegister})
console.log({ order : orderQueue})