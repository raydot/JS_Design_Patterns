// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript

"use strict";

// Each of the following will create a new empty object:

var newObject = {};

var newObject = Object.create( Object.prototype );

var newObject = new Object();
// The last one creates an object wrapper for a specific value, or where no value is passed it will create an empty object and return it.

// ECMAScript 3 approaches:

// 1. Dot syntax

// Set props
newObject.someKey = "Dave Rules!";

//get props:
newObject.someKey;

// 2.  Square bracket syntax

// setter
newObject["someKey"] = "Dave Rules!";

//getter
var value = newObject["someKey"];

// ECMAScript 5 only compatible approaches.

// 3.  Object.defineProperty

// setter:
Object.defineProperty( newObject, "someKey", {
	value: "for more control of the property's behavior",
	writable: true,
	enmerable: true,
	configurable: true
});

// shorthand for the above:
var defineProp = function (obj, key, value) {
	var config = {
		value: value, 
		writable: true,
		enumerable: true,
		configurable: true
	};
	Object.defineProperty( obj, key, config );
};

// To use, we then creae a new empty "person" object
var person = Object.create( Object.prototype );

// populate the object with properties:
defineProp( person, "car", "Delorian");
defineProp( person, "faveColor", "Green");
defineProp( person, "wearsBoxers", true);

console.log(person);

// 4.  Object.defineProperties

// setProperties
Object.defineProperties( newObject, {
	"somekey": {
		value: "Dave rules!", 
		writable: true
	},

	"someOtherKey": {
		value: "Bibimbop", 
		writable: false
	}
});

// getters for 3 and 4 can be done using any of the options in 1 and 2

// We can use these methods for inheritance!
var driver = object.create( person );

// set some props for the driver
defineProp(driver, "topSpeed", "100mph");

//get an inherited property (green!)
console.log( driver.faveColor );

//get the property we set (100mph)
console.log(driver.topSpeed);
