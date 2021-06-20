// Business Logic

//Make new order
function Order() {
  this.pizzas = {}
  this.totalPrice = 0
}

//Add new pizza to order
Order.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.Number] = pizza
  this.totalPrice = this.totalPrice + pizza.Price
}

//Remove pizza from order
Order.prototype.removePizza = function(pizza) {
  delete this.pizzas[pizza.Number]
  this.totalPrice = this.totalPrice - pizza.Price
}

//Make custom pizza
function CustomPizza(name, toppings, size) {
  this.Name = name
  this.Toppings = toppings
  this.Size = size
  this.Number = 0
}

// makePizza function
CustomPizza.prototype.makePizza = function() {
  this.Price = 10
  this.Price = this.Price + this.Toppings.length
  this.Number = this.Number += 1;
  if (this.Size === 'XL') {
    this.Price = this.Price + 4
  } else if (this.Size === 'Large') {
    this.Price = this.Price + 2
  } else {
    return this.Price
  }
}


//User Interface Logic
$(document).ready(function() {

  let order = new Order()
  
  // let pendingOrders = 0

  let pizzaA = {}
  let pizzaB = {}
  let pizzaC = {}

  let oven1full = false
  let oven2full = false
  let oven3full = false

  // Add pizzas to order
  $('button#addToOrder').click(function(event) {
    event.preventDefault();

    $('#pendingOrder').show();

    const size = $('input:radio:checked[name=size]').val()
    
    let toppingArray = $('.topping:checked').map(function() {
      return this.value;
    }) .get();

    let name = size + " " + toppingArray.join(", ")    

    if ( oven1full === false) {
    let pizza1 = new CustomPizza(name, toppingArray, size)
    pizza1.makePizza() 
    pizzaA = pizza1
    pizza1.Number = 1
    $('#prepLine1').html(pizza1.Name + '<br><br> Price: ' + pizza1.Price)
    $('#col1').show()
    order.addPizza(pizza1)
    // pendingOrders = 1;
    oven1full = true;
    } else if ( oven2full === false) {
    let pizza2 = new CustomPizza(name, toppingArray, size)
    pizza2.makePizza() 
    pizzaB = pizza2
    pizza2.Number = 2;
    $('#col2').show()
    $('#prepLine2').html(pizza2.Name + '<br><br> Price: ' + pizza2.Price)
    order.addPizza(pizza2);
    // pendingOrders = 2;
    oven2full = true;
    } else if (oven3full === false) {
    let pizza3 = new CustomPizza(name, toppingArray, size)
    pizza3.makePizza()
    pizza3.Number = 3;
    pizzaC = pizza3
    $('#col3').show()
    $('#prepLine3').html(pizza3.Name + '<br><br> Price: ' + pizza3.Price)
    order.addPizza(pizza3)
    // pendingOrders = 3;
    oven3full = true;
  }
    $('#totalPrice').text(order.totalPrice)
  }
  );

  // Remove pizzas from order
  $('button#removePizza1').click(function(event) {
    event.preventDefault();
    $('#col1').hide();
    order.removePizza(pizzaA);
    $('#totalPrice').text(order.totalPrice);
    // pendingOrders = 0;
    oven1full = false;
  }
  );

  $('button#removePizza2').click(function(event) {
    event.preventDefault();
    $('#col2').hide();
    order.removePizza(pizzaB);
    $('#totalPrice').text(order.totalPrice);
    // pendingOrders = 0;
    oven2full = false
  }
  );
  
  $('button#removePizza3').click(function(event) {
    event.preventDefault();
    $('#col3').hide();
    order.removePizza(pizzaC);
    $('#totalPrice').text(order.totalPrice)
    // pendingOrders = 0;
    oven3full = false;
  }
  );

  //Generates a receipt from the final order
  $('button#orderFinal').click(function(event) {
  
  //(Probably not necessary)
    // orderFinal = order.pizzas
  // const orderKeys = Object.keys(orderFinal);
  // const orderValues = Object.values(orderFinal)
  // let orderString = "";
  // $('#receiptField').show();
  // orderValues.forEach(function(key) {
  //   orderString = orderString.concat(key + orderFinal[key]);
  //   return orderString

  // })
  // Working on outputting receipt as string
  const pizzaStringA = JSON.stringify(pizzaA)
  const pizzaStringB = JSON.stringify(pizzaB)
  const pizzaStringC = JSON.stringify(pizzaC)
  $('#receiptField').text(pizzaStringA + pizzaStringB + pizzaStringC)
  $('#receiptField').show();
    console.log(pizzaString)
  })

    
});
