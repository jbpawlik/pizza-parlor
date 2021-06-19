// Business Logic

//Make new order
function Order() {
  this.pizzas = {}
  this.totalPrice = 0
}

//Add new pizza to order
Order.prototype.addPizza = function(pizza) {
  // this.name = this.size + " " + this.topping
  this.pizzas[pizza.name] = pizza
  this.totalPrice = this.totalPrice + pizza.price
}

//Make custom pizza
function CustomPizza(name, toppings, size) {
  this.name = name
  this.toppings = toppings
  this.size = size
  this.number = 0

  // + this.toppings.length
  // if (size === 'XL') {
  //   this.price = this.price + 4
  // } else if (size === 'Large') {
  //   this.price = this.price + 2
  // } else {
  //   return this.price
  // }
  // this.name = this.size + " " + this.toppings
}

// makePizza function (kinda unnecessary but it's in the prompt)
CustomPizza.prototype.makePizza = function() {
this.price = 10
this.price = this.price + this.toppings.length
this.number = this.number += 1;
if (this.size === 'XL') {
  this.price = this.price + 4
} else if (this.size === 'Large') {
  this.price = this.price + 2
} else {
  return this.price
}

// this.name = ''
// this.name = this.size + " " + this.toppings
}


// if (this.topping === 'extra cheese') {
//     this.price = this.price + 2;
//   }
//   if (this.topping.length > 0) {
//     this.price = this.price + 2;
//   }


// //Name the pizza based off size and toppings
// CustomPizza.prototype.namePizza = function() {
//   this.name = this.size + " " + this.topping
// }

// let pizza1 = new CustomPizza(['Cheese', 'Meat'], 'Regular', 10)
// let pizza2 = new CustomPizza(['Extra Cheese'], 'XL', 15)
// let order1 = new Order([], 0, 0)
// // pizza1.namePizza(pizza1)
// pizza1.makePizza()
// pizza2.makePizza()
// order1.addPizza(pizza1)
// order1.addPizza(pizza2)

//User Interface Logic
$(document).ready(function() {
  attachContactListeners()

  let order = new Order()
  
  let pendingOrders = 0

  $('button#addToOrder').click(function(event) {
    event.preventDefault();

    $('#pendingOrder').show();

    const size = $('input:radio:checked[name=size]').val()
    
    let toppingArray = $('.topping:checked').map(function() {
      return this.value;
    }) .get();

    let name = size + " " + toppingArray.join(", ")    
    
    if (pendingOrders === 0) {
    let pizza1 = new CustomPizza(name, toppingArray, size)
    pizza1.makePizza() 
    $('#prepLine1').html(pizza1.number + '<br>' + pizza1.name + '<br><br> Price: ' + pizza1.price)
    $('#col1').show()
    order.addPizza(pizza1)
    pendingOrders = 1;
    } else if (pendingOrders === 1) {
    let pizza2 = new CustomPizza(name, toppingArray, size)
    pizza2.makePizza() 
    $('#col2').show()
    $('#prepLine2').html(pizza2.number + '<br>' + pizza2.name + '<br><br> Price: ' + pizza2.price)
    order.addPizza(pizza2);
    pendingOrders = 2;
    } else if (pendingOrders === 2) {
    let pizza3 = new CustomPizza(name, toppingArray, size)
    pizza3.makePizza() 
    $('#col3').show()
    $('#prepLine3').html(pizza3.number + '<br>' + pizza3.name + '<br><br> Price: ' + pizza3.price)
    order.addPizza(pizza3)
    pendingOrders = 3;
    
  }
    $('#totalPrice').text(order.totalPrice)
  console.log(order)
    // let order = new Order()
    // order.addPizza(pizza)
    // console.log(order)
  });


  function attachContactListeners() {
    $('button.removePizza').click(function(event) {
      event.preventDefault();



    });
  }


});

    // const pizzaOutput = Object.values(pizza1);
    // let pizzaString = "";
    // pizzaOutput.forEach(function(key) {
    //   pizzaString = pizzaString.concat('<li>' + key + '</li>');
    // })