// Business Logic

//Make new order
function Order() {
  this.pizzas = {};
  this.totalPrice = 0;
}

//Add new pizza to order
Order.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.Number] = pizza;
  this.totalPrice = this.totalPrice + pizza.Price;
}

//Remove pizza from order
Order.prototype.removePizza = function(pizza) {
  delete this.pizzas[pizza.Number];
  this.totalPrice = this.totalPrice - pizza.Price;
}

//Make custom pizza
function CustomPizza(name, toppings, size) {
  this.Name = name;
  this.Toppings = toppings;
  this.Size = size;
  this.Price = 10;
}

// makePizza function
CustomPizza.prototype.makePizza = function() {
  this.Price = this.Price + this.Toppings.length;
  if (this.Size === 'XL') {
    this.Price = this.Price + 4;
  } else if (this.Size === 'Large') {
    this.Price = this.Price + 2;
  } else {
    return this.Price;
  }
}


//User Interface Logic
$(document).ready(function() {

  let order = new Order();
  
  let oven1full = false;
  let oven2full = false;
  let oven3full = false;

  // Add pizzas to order
  $('button#addToOrder').click(function() {

    $('#pendingOrder').show();

    const size = $('input:radio:checked[name=size]').val();
    
    let toppingArray = $('.topping:checked').map(function() {
      return this.value;
    }) 
    .get();
    
    let name = size + " " + toppingArray.join(" and ");

    if (oven1full === false) {
    pizzaA = new CustomPizza(name, toppingArray, size);
    pizzaA.makePizza();
    pizzaA.Number = 1;
    $('#prepLine1').html(pizzaA.Name + '<br><br> Price: ' + pizzaA.Price);
    $('#col1').show();
    order.addPizza(pizzaA);
    return oven1full = true;
    } else if (oven2full === false) {
    pizzaB = new CustomPizza(name, toppingArray, size);
    pizzaB.makePizza();
    pizzaB.Number = 2;
    $('#col2').show()
    $('#prepLine2').html(pizzaB.Name + '<br><br> Price: ' + pizzaB.Price);
    order.addPizza(pizzaB);
    return oven2full = true;
    } else if (oven3full === false) {
    pizzaC = new CustomPizza(name, toppingArray, size);
    pizzaC.makePizza();
    pizzaC.Number = 3;
    $('#col3').show();
    $('#prepLine3').html(pizzaC.Name + '<br><br> Price: ' + pizzaC.Price);
    order.addPizza(pizzaC);
    return oven3full = true;
    }
    $('#totalPrice').text(order.totalPrice);
  });

  // Remove pizzas from order
  $('button#removePizza1').click(function(event) {
    event.preventDefault();
    $('#col1').hide();
    order.removePizza(pizzaA);
    $('#totalPrice').text(order.totalPrice);
    oven1full = false;
    $('#receiptField').hide(); 
  });

  $('button#removePizza2').click(function(event) {
    event.preventDefault();
    $('#col2').hide();
    order.removePizza(pizzaB);
    $('#totalPrice').text(order.totalPrice);
    oven2full = false;
    $('#receiptField').hide();
  });
  
  $('button#removePizza3').click(function(event) {
    event.preventDefault();
    $('#col3').hide();
    order.removePizza(pizzaC);
    $('#totalPrice').text(order.totalPrice)
    oven3full = false;
    $('#receiptField').hide();
  });

  //Generates a receipt from the final order
  $('button#orderFinal').click(function(event) {
  
  let receipt = "Thank you for choosing Pizza Pal! <br>";

  if (oven1full === true) {
    receipt = 'Thank you for choosing Pizza Pal! <br><br>' + '<li> ' + pizzaA.Name + '  $' + pizzaA.Price + '</li>';
  }
  if (oven2full === true) {
    receipt = receipt.concat('<br>' + '<li> ' + pizzaB.Name + '  $' + pizzaB.Price + '</li>');
  }
  if (oven3full === true) {
    receipt = receipt.concat('<br>' + '<li> ' + pizzaC.Name + '  $' + pizzaC.Price + '</li>');
  }
  $('#receiptField').show();
  $('#receiptField').html(receipt + '<br>Order Total: $' + order.totalPrice);
  });
});