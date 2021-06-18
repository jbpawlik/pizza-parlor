// Business Logic

//Make new order
function Order(pizzas, totalPrice) {
  this.pizzas = pizzas
  this.totalPrice = totalPrice
}

//Make custom pizza
function CustomPizza(topping, size, price) {
  this.topping = topping
  this.size = size
  this.price = price + this.topping.length
  if (size === 'XL') {
    this.price = this.price + 4
  } else if (size === 'Large') {
    this.price = this.price + 2
  } else {
    return this.price
  }
  this.name = this.size + " " + this.topping
}
// if (this.topping === 'extra cheese') {
//     this.price = this.price + 2;
//   }
//   if (this.topping.length > 0) {
//     this.price = this.price + 2;
//   }

//Add new pizza to order
Order.prototype.addPizza = function(pizza) {
  // this.name = this.size + " " + this.topping
  this.pizzas[pizza.name] = pizza
  this.totalPrice = this.totalPrice + pizza.price
}
// //Name the pizza based off size and toppings
// CustomPizza.prototype.namePizza = function() {
//   this.name = this.size + " " + this.topping
// }

let pizza1 = new CustomPizza(['Cheese', 'Meat'], 'Regular', 10)
let pizza2 = new CustomPizza(['Extra Cheese'], 'XL', 15)
let order1 = new Order([], 0, 0)
// pizza1.namePizza(pizza1)
order1.addPizza(pizza1)
order1.addPizza(pizza2)

//User Interface Logic