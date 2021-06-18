// Business Logic

//Make new order
function Order(pizzas, totalPrice) {
  this.pizzas = pizzas
  this.totalPrice = totalPrice
}


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
}

//Name the pizza based off size and toppings
CustomPizza.prototype.namePizza = function() {
  this.name = this.size + " " + this.topping
}

let pizza1 = new CustomPizza('plain', 'none', 'regular', '$10')
let pizza2 = new CustomPizza('large extra cheese', 'extra cheese', 'large', '$15')
let order1 = new Order([pizza1, pizza2], '$25')
pizza1.namePizza(pizza1)
order1.addPizza([pizza1, pizza2])

//User Interface Logic