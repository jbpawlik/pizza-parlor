// Business Logic

//Make new order
function Order() {
  this.pizzas = {}
  this.totalPrice = 0
}

//Add new pizza to order
Order.prototype.addPizza = function(pizza) {
  // this.name = this.size + " " + this.topping
  this.pizzas[pizza.number] = pizza
  this.totalPrice = this.totalPrice + pizza.price
}

//Remove pizza from order
Order.prototype.removePizza = function(pizza) {
  delete this.pizzas[pizza.number]
  this.totalPrice = this.totalPrice - pizza.price
}

//Make custom pizza
function CustomPizza(name, toppings, size) {
  this.name = name
  this.toppings = toppings
  this.size = size
  this.number = 0
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
}


//User Interface Logic
$(document).ready(function() {

  let order = new Order()
  
  let pendingOrders = 0

  let pizzaA = {}
  let pizzaB = {}
  let pizzaC = {}

  let oven1full = false
  let oven2full = false
  let oven3full = false

  $('button#addToOrder').click(function(event) {
    event.preventDefault();

    $('#pendingOrder').show();

    const size = $('input:radio:checked[name=size]').val()
    
    let toppingArray = $('.topping:checked').map(function() {
      return this.value;
    }) .get();

    let name = size + " " + toppingArray.join(", ")    

    if (pendingOrders === 0 && oven1full === false) {
    let pizza1 = new CustomPizza(name, toppingArray, size)
    pizza1.makePizza() 
    pizzaA = pizza1
    pizza1.number = 1
    $('#prepLine1').html(pizza1.number + '<br><br>' + pizza1.name + '<br><br> Price: ' + pizza1.price)
    $('#col1').show()
    order.addPizza(pizza1)
    pendingOrders = 1;
    oven1full = true;
    } else if ( oven2full === false) {
    let pizza2 = new CustomPizza(name, toppingArray, size)
    pizza2.makePizza() 
    pizzaB = pizza2
    pizza2.number = 2;
    $('#col2').show()
    $('#prepLine2').html(pizza2.number + '<br><br>' + pizza2.name + '<br><br> Price: ' + pizza2.price)
    order.addPizza(pizza2);
    pendingOrders = 2;
    oven2full = true;
    } else if (oven3full === false) {
    let pizza3 = new CustomPizza(name, toppingArray, size)
    pizza3.makePizza()
    pizza3.number = 3;
    pizzaC = pizza3
    $('#col3').show()
    $('#prepLine3').html(pizza3.number + '<br><br>' + pizza3.name + '<br><br> Price: ' + pizza3.price)
    order.addPizza(pizza3)
    pendingOrders = 3;
    oven3full = true;
  }
    $('#totalPrice').text(order.totalPrice)
    
  }
  );


    $('button#removePizza1').click(function(event) {
      event.preventDefault();
      $('#col1').hide();
      order.removePizza(pizzaA);
      $('#totalPrice').text(order.totalPrice);
      pendingOrders = 0;
      oven1full = false;
    }
    );

    $('button#removePizza2').click(function(event) {
      event.preventDefault();
      $('#col2').hide();
      order.removePizza(pizzaB);
      $('#totalPrice').text(order.totalPrice);
      pendingOrders = 0;
      oven2full = false
    }
    );
    
    $('button#removePizza3').click(function(event) {
      event.preventDefault();
      $('#col3').hide();
      order.removePizza(pizzaC);
      $('#totalPrice').text(order.totalPrice)
      pendingOrders = 0;
      oven3full = false;
    }
    );
  
});

    // const pizzaOutput = Object.values(pizza1);
    // let pizzaString = "";
    // pizzaOutput.forEach(function(key) {
    //   pizzaString = pizzaString.concat('<li>' + key + '</li>');
    // })