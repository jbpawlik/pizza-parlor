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

}


//User Interface Logic
$(document).ready(function() {
  attachContactListeners()

  let order = new Order()

  const size = $('input:radio:checked[name=size]').val()

  let toppingArray = $('.topping:checked').map(function() {
    return this.value;
  }) .get();

  let name = size + " " + toppingArray.join(", ")    
  
  let pizza = new CustomPizza(name, toppingArray, size)


  $('button#addToOrder').click(function(event) {
    event.preventDefault();

    $('#pendingOrder').show();
    $('.col-3').show();
    
    let pizza1 = pizza
    
    if (pizza.number === 0) {
    pizza.makePizza() 
    console.log(pizza1);
    } else if (pizza.number > 0) {
      
    }


    $('#prepLine').html('<br>' + pizza1.name + '<br><br> Price: ' + pizza1.price)

    // let order = new Order()
    order.addPizza(pizza1)
    console.log(order)
  });


  function attachContactListeners() {
    $('button#removePizza').click(function(event) {
      event.preventDefault();
      $('.col-3').hide();
      delete pizza.number;
      order.totalPrice = 0
      console.log(pizza)
      console.log(order)
    });
  }


});

    // const pizzaOutput = Object.values(pizza1);
    // let pizzaString = "";
    // pizzaOutput.forEach(function(key) {
    //   pizzaString = pizzaString.concat('<li>' + key + '</li>');
    // })