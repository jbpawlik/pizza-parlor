# __Pizza Pal__
### by [James Benjamin Pawlik](http://github.com/jbpawlik)

<img src="" alt="" width="200"/>

### __Description__

Pizza Pal is a proof-of-concept website for a pizza parlor. The customer can select one or more individual toppings to put on a pizza. The site returns a price based on the size and amount of toppings.

### __Technologies Used__
Pizza Pal uses custom HTML and CSS. JavaScript and JQuery are used for the business and interface logic.

### __Setup/Installation__
1. Download or clone the [repository](http://github.com/jbpawlik/pizza-parlor) to your local machine
2. Navigate to the top level of the directory
3. Open index.html in your browser

Alternately, visit [Github Pages](http://jbpawlik.github.io/pizza-parlor) to view the site.

### __Tests/Specifications__
Describe CustomPizza(toppings, size, price)

Test 1: "Should construct a pizza object"
Code: let pizza1 = new CustomPizza()
Expected Output: CustomPizza {toppings: undefined, size: undefined, price: undefined}

Test 2: "Given properties, should construct pizza object with those qualities"
Code: let pizza1 = new CustomPizza('none', 'regular', '$10')
Expected Output: CustomPizza {toppings: "none", size: "regular", price: "$10"}

4997934 (HEAD -> main) increase price of pizza depending on size
f210eaf increase price of pizza per topping
7d40f6a merge name function into addPizza
4f503e6 add pizza prices to order
5a1db92 name pizza based off size and topping
a0a1767 use addPizza protoype to add pizzas to order
52104ef add Order constructor
4ef7ab7 add CustomPizza constructor
edb3303 (gh-pages) add index.html, README.md, scripts.js, styles.css


### __Known Bugs / Future Goals__
No bugs have been found or reported. Please contact the author if you experience poor performance.

Future goals for Mr. Robogers' Numberhood are to take alphanumberic and mixed data to return a wider variety of responses.

### __License__
This software is licensed under the [BSD license](license.txt).

[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

Copyright (c) 2021 James Benjamin Pawlik

### __Contact Information__
Contact the author at __james.benjamin.pawlik@gmail.com__
