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
    pizzaA.makePizza();
    pizzaA.Number = 1;
    $('#prepLine1').html(pizzaA.Name + '<br><br> Price: ' + pizzaA.Price);
    $('#col1').show();
    order.addPizza(pizzaA);
    $('#totalPrice').text(order.totalPrice);
    return oven1Full = true;
    } else if (oven2Full === false) {
    pizzaB = new CustomPizza(name, toppingArray, size);
    pizzaB.makePizza();
    pizzaB.Number = 2;
    $('#col2').show()
    $('#prepLine2').html(pizzaB.Name + '<br><br> Price: ' + pizzaB.Price);
    order.addPizza(pizzaB);
    $('#totalPrice').text(order.totalPrice);
    return oven2Full = true;
    } else if (oven3Full === false) {
    pizzaC = new CustomPizza(name, toppingArray, size);
    pizzaC.makePizza();
    pizzaC.Number = 3;
    $('#col3').show();
    $('#prepLine3').html(pizzaC.Name + '<br><br> Price: ' + pizzaC.Price);
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
      receipt = 'Thank you for choosing Pizza Pal! <br><br>' + '<li> ' + pizzaA.Name + '  $' + pizzaA.Price + '</li>';
    }
    if (oven2Full === true) {
      receipt = receipt.concat('<br>' + '<li> ' + pizzaB.Name + '  $' + pizzaB.Price + '</li>');
    }
    if (oven3Full === true) {
      receipt = receipt.concat('<br>' + '<li> ' + pizzaC.Name + '  $' + pizzaC.Price + '</li>');
    }
    $('#receiptField').show();
    $('#receiptField').html(receipt + '<br>Order Total: $' + order.totalPrice);
  });
});