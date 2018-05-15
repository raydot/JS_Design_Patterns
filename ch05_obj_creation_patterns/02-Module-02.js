MYAPP.namespace('MYAPP.utilities.array');

MYAPP.utilities.array = (function () {
		//dependencies
	var	uobj 	=	MYAPP.utilities.object,
		ulang 	=	MYAPP.utilities.lang,

		//private properties 
		array_string	=	"[object array]",
		ops				=	Object.prototype.toString; //what is this?

		//private methods
		// ...

		//end var

	// optionally one-time init procedures
	// ...

	// public API
	return {
		inArray: function (needle, haystack) {
			for (var i = 0, max = haystack.length; i < max; i+= 1) {
				if (haystack[i] === needle) {
					return true;
				}
			}
		}, //what's going on with the chained return here?

		isArray: function (a) {
			return ops.call(a) === array_string;
		}

		//more methods and properties
	};
}());