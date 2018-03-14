// Basic constructors

/* 
	By simply prefixing a call to a constructor function with
	the keyword "new", we can tell JavaScript we wold like the 
	function to behave like a constructor and instantiate a new
	object with the members defined by that function.

	Inside a constructor, the keyword "this" references the new 
	object that's being created.  Revisiting object creation, a basic constructor may look as follows:
*/

function Car(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;

	this.toString = function() {
		return this.model + " has driven " + this.miles + " miles";
	};
}

var car1 = new Car("Honda Accord", 2008, 70000);
var car2 = new Car("Toyota Tercel", 1984, 40000);

console.log( car1.toString() );