console.log('Intro to JS');

//x = 100; //global variable
//var x = 'abc';


//console.log(x);

/*function foo() {
	console.log(x);
	x = 500;
}

foo();
*/

//Types
var a = 1; //integer
var b = 'abc'; //string
var c = 3.0; //float

//expression
var d = function() {console.log('this is a function expression')}; //function
d();

//declaration
function foo() {console.log('this is a function declaration')}
foo();

//iife
(function () {
	console.log('iife function')
}) ();

/*
//Operators
&& //and
|| //or
== //equal to
=== //equal to strict equality
!= //not equal to
!== //not strictly equal to
=~ //regular expression
< //less than
> //greater than
<= //less than or equal to
>= //greater than or equal to
*/

var x = true;
var y = false;

if(x || y) {
	console.log('Both x and y are true');
}


var b = 10;
var c = 50;
if(b == c) {
	console.log('b equals c');
} else if(b > c) {
	console.log('b is greater than c');
} else
	console.log('nada');

//Objects
var object = {
	sum: function(a, b) {
		var total = a + b;
		console.log(total);
	}
};


object.sum(2, 12);

//or this way works
function sum(a, b) {
	var total = a + b;
	console.log(total);
}


sum(4, 8);





