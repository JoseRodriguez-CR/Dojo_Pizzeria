// Dojo Pizzeria

var pizza = {
    crustType:  "deep dish",// "hand tossed"],
    sauceType:  "traditional",//"tomato sauce","marinara","white sauce"],
    cheeses:  ["mozzarella","feta","lacey swiss cheese", "pepper jack", "parmesan"],
    toppings: ["mushrooms","olives","onions","bacon", "heirloom tomatoes", "pepperoni"]
};
    
//console.log(pizza);

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var firstPizza = pizzaOven("deep dish","traditional",["mozzarella"], ["pepperoni", "sausage"]);
console.log(firstPizza);


var secondPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(secondPizza);


var thirdPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["pepper", "tomatoes", "blue chesse"]);
console.log(thirdPizza);

var fourthPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["pinneaple", "turkey ham", "extra chesse"]);
console.log(fourthPizza);



//Random pizza

let crustType =  ["deep dish", "hand tossed"];
let sauceType =  ["traditional","tomato sauce","marinara","white sauce"];
let cheeses =  ["mozzarella","feta","lacey swiss cheese", "pepper jack", "parmesan"];
let toppings = ["mushrooms","olives","onions","bacon", "heirloom tomatoes", "pepperoni"];

function randomPizza(){
    
}