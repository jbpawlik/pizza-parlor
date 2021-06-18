// Business Logic

//Make new order
function Order(pizzas, pizzaCost, totalPrice) {
  this.pizzas = [pizzas]
  this.totalPrice = totalPrice
}

// //Calculate price of order
// Order.prototype.sumTotal = function() {
//   this.totalPrice = 
// }

//Make custom pizza
function CustomPizza(name, topping, size, price) {
  this.name = name
  this.topping = topping
  this.size = size
  this.price = price
}

//Add new pizza to order
Order.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.name] = pizza
  this.totalPrice = this.totalPrice + pizza.price
}
// Order.prototype.addCost = function(pizza) {
// this.totalPrice = this.totalPrice + pizza.price
// }
//Name the pizza based off size and toppings
CustomPizza.prototype.namePizza = function() {
  this.name = this.size + " " + this.topping
}

let pizza1 = new CustomPizza('plain', 'none', 'regular', 10)
let pizza2 = new CustomPizza('large extra cheese', 'extra cheese', 'large', 15)
let order1 = new Order([pizza1, pizza2], 0, 0)
pizza1.namePizza(pizza1)
// order1.addCost(pizza2)
// order1.addCost(pizza1)
order1.addPizza(pizza1)
order1.addPizza(pizza2)

//User Interface Logic