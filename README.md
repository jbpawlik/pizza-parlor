# __Pizza Pal__

<img src="img/TheNetPizza.jpg" alt="Sandy Bullock ordering pizza online" width="400"/>    

### by [James Benjamin Pawlik](http://github.com/jbpawlik)


### __Description__

Pizza Pal is a proof-of-concept website for a pizza parlor. The customer can select one or more individual toppings to put on a pizza, then add the pizzas to an order. The site returns a total price based on the size and amount of toppings.

### __Technologies Used__
Pizza Pal uses custom HTML and CSS. JavaScript and JQuery are used for the business and interface logic.

### __Setup/Installation__
1. Download or clone the [repository](http://github.com/jbpawlik/pizza-parlor) to your local machine
2. Navigate to the top level of the directory
3. Open index.html in your browser

Alternately, visit [Github Pages](http://jbpawlik.github.io/pizza-parlor) to view the site.

### __Tests/Specifications__

__Describe CustomPizza(toppings, size, price)__ 

Test 1: "Should construct a pizza object"    
Code: let pizza1 = new CustomPizza()    
Expected Output: CustomPizza {name: undefined, toppings: undefined, size: undefined, price: undefined}    

Test 2: "Given properties, should construct pizza object with those qualities (and number, set to 0)"        
Code: let pizza1 = new CustomPizza('plain,' 'regular', '$10')    
Expected Output: CustomPizza {toppings: "plain", size: "regular", price: 10, number: 0}    


__Describe Order()__   

Test 1: "Should create a blank order object"    
Code: let order1 = new Order()    
Expected Output: order1 {pizzas: {}, totalPrice: 0}    


__Describe CustomPizza.prototype.makePizza()__    

Test 1: "Should calculate cost of pizza based on number of toppings"    
Code: pizza1.makePizza()     
Expected Output: pizza1 {toppings: ['Extra Cheese', 'Mushrooms"], size: 'XL', price: 16, number: 0}

Test 2 "Should assign a number to the pizza"    
Code: pizza1.makePizza()    
Expected Output: pizza1 {toppings: ['Extra Cheese', 'Mushrooms"], size: 'XL', price: 16, number: 1}


__Describe Order.prototype.addPizza(CustomPizza)__

Test 1: "Should add CustomPizza object to Order object"    
Code: order1.addPizza(pizza1)    
Expected Output: order1 {pizzas: pizza1 {...}, totalPrice: 10}    


__Describe Order.prototype.removePizza(CustomPizza)__     

Test 1: "Should remove CustomPizza object from Order object"    
Code: order1.removePizza(pizza1)    
Expected Output: order1 {pizzas: {}, totalPrice: 0}


### __Known Bugs / Future Goals__
No bugs have been found or reported. Please contact the author if you experience poor performance.

Future goals for Pizza Pal:
1. Increase number of pizzas that a customer can order.
2. Add mix-and-match sides and beverages.
3. Widen variety of toppings with different costs and discounts.
4. Allow half-and-half pizzas.

### __License__
This software is licensed under the [BSD license](license.txt).

[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

Copyright (c) 2021 James Benjamin Pawlik

### __Contact Information__
Contact the author at __james.benjamin.pawlik@gmail.com__
