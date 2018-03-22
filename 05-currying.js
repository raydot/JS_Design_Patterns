//defie a function
var sayHi = function(who) {
	return "Hello" + (who ? ", " + who: "") + "!";
};

//invoke a function
var test = sayHi();
console.log(test);
var test2 = sayHi('world');
console.log(test2);

//apply a function
var test3 = sayHi.apply(null, ["hello"]);//
console.log(test3);

//general-purpose curry function
function curryFunction(fn) {
	var slice = Array.prototype.slice, stored_args = slice.call(arguments, 1);
	return function () {
		var new_args = slice.call(arguments), args = stored_args.concat(new_args);
		return fn.apply(null, args);
	};
}

//now a normal add function
function add(x, y) {
	return x + y;
}

var myVar = curryFunction(add, 6)(7);
console.log(myVar);