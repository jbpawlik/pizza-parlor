// Business Logic

//Make new order
function Order() {
  this.pizzas = {};
  this.totalPrice = 0;
}

//Add new pizza to order
Order.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.number] = pizza;
  this.totalPrice = this.totalPrice + pizza.price;
}

//Remove pizza from order
Order.prototype.removePizza = function(pizza) {
  delete this.pizzas[pizza.number];
  this.totalPrice = this.totalPrice - pizza.price;
}

//Make custom pizza
function CustomPizza(name, toppings, size) {
  this.name = name;
  this.toppings = toppings;
  this.size = size;
  this.price = 10;
}

// makePizza function
CustomPizza.prototype.pricePizza = function() {
  this.price = this.price + this.toppings.length;
  if (this.size === 'XL') {
    this.price = this.price + 4;
  } else if (this.size === 'Large') {
    this.price = this.price + 2;
  } else {
    return this.price;
  }
}


//User Interface Logic
$(document).ready(function() {

  let order = new Order();

  let oven1Full = false;
  let oven2Full = false;
  let oven3Full = false;

  // Add pizzas to order
  $('button#addToOrder').click(function() {

    $('#pendingOrder').show();

    const size = $('input:radio:checked[name=size]').val();

    let toppingArray = $('.topping:checked').map(function() {
      return this.value;
    }).get();

    let name = size + " " + toppingArray.join(" and ");

    if (oven1Full === false) {
    pizzaA = new CustomPizza(name, toppingArray, size);
    pizzaA.pricePizza();
    pizzaA.number = 1;
    $('#prepLine1').html(pizzaA.name + '<br><br> Price: ' + pizzaA.price);
    $('#col1').show();
    order.addPizza(pizzaA);
    $('#totalPrice').text(order.totalPrice);
    return oven1Full = true;
    } else if (oven2Full === false) {
    pizzaB = new CustomPizza(name, toppingArray, size);
    pizzaB.pricePizza();
    pizzaB.number = 2;
    $('#col2').show()
    $('#prepLine2').html(pizzaB.name + '<br><br> Price: ' + pizzaB.price);
    order.addPizza(pizzaB);
    $('#totalPrice').text(order.totalPrice);
    return oven2Full = true;
    } else if (oven3Full === false) {
    pizzaC = new CustomPizza(name, toppingArray, size);
    pizzaC.pricePizza();
    pizzaC.number = 3;
    $('#col3').show();
    $('#prepLine3').html(pizzaC.name + '<br><br> Price: ' + pizzaC.price);
    order.addPizza(pizzaC);
    $('#totalPrice').text(order.totalPrice);
    return oven3Full = true;
    }
  });

  // Remove pizzas from order
  $('button#removePizza1').click(function() {
    $('#col1').hide();
    order.removePizza(pizzaA);
    $('#totalPrice').text(order.totalPrice);
    oven1Full = false;
    $('#receiptField').hide();
  });

  $('button#removePizza2').click(function() {
    $('#col2').hide();
    order.removePizza(pizzaB);
    $('#totalPrice').text(order.totalPrice);
    oven2Full = false;
    $('#receiptField').hide();
  });

  $('button#removePizza3').click(function() {
    $('#col3').hide();
    order.removePizza(pizzaC);
    $('#totalPrice').text(order.totalPrice)
    oven3Full = false;
    $('#receiptField').hide();
  });

  //Generates a receipt from the final order
  $('button#orderFinal').click(function() {

    let receipt = "Thank you for choosing Pizza Pal! <br>";

    if (oven1Full === true) {
      receipt = 'Thank you for choosing Pizza Pal! <br><br>' + '<li> ' + pizzaA.name + '  $' + pizzaA.price + '</li>';
    }
    if (oven2Full === true) {
      receipt = receipt.concat('<br>' + '<li> ' + pizzaB.name + '  $' + pizzaB.price + '</li>');
    }
    if (oven3Full === true) {
      receipt = receipt.concat('<br>' + '<li> ' + pizzaC.name + '  $' + pizzaC.price + '</li>');
    }
    $('#receiptField').show();
    $('#receiptField').html(receipt + '<br>Order Total: $' + order.totalPrice);
  });
});