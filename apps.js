const menu = [
    { name: "Margherita", price: 10 },
    { name: "Pepperoni", price: 12 },
    { name: "BBQ Chicken", price: 14 },
    { name: "Hawaiian", price: 13 },
    { name: "Meat Lovers", price: 15 },
    { name: "Veggie Supreme", price: 11 },
    { name: "Buffalo Chicken", price: 14 },
    { name: "Four Cheese", price: 13 },
    { name: "Mushroom & Truffle", price: 16 },
    
];

let cashInRegister = 100;
let orderId = 0;
const orderQueue = [];

// add pizza function
const addPizza = (pizzaObject) => {
    menu.push(pizzaObject);
}

// order place function
const placeOrder = (pizzaName) => {
    const findPizza = menu.find(pizzaObject => pizzaObject.name === pizzaName);
    if(findPizza) 
        cashInRegister += findPizza.price;
        const newOrder = { id : orderId++, pizza : findPizza.name, status : "ordered"}
        orderQueue.push(newOrder)

        return newOrder
}


// order complete function
const completeOrder = (orderid) => {
    const findOrder = orderQueue.find(order => order.id === orderid);
    if(findOrder)
        findOrder.status = "Completed";

    return findOrder;
}

addPizza({ name: "Pesto Chicken", price: 12 });
placeOrder("Pesto Chicken");
console.log(menu)
console.log(orderQueue)
console.log("Hello world")
completeOrder(2)
console.log(orderQueue)