//Page 089

//unsafe
var MYAPP = {};

//better
if (typeof MYAPP === "undefined") {
	var MYAPP = {};
}

//shorter
var myAPP = MYAPP || {};

/*  Added checks can quickly result in repeating code.
	MYAPP.modules.module2 needs three checks to make sure
	it doesn't collide with anything. So a reusable namespace
	function is best.											*/

//using a namespace function
MYAPP.namespace('MYAPP.modules.module2');

//equivalent to:
var MYAPP = {
	modules: {
		module2: {}
	}
};

//	Example implementation.  Non-desctructive, meaning that if the namespace
//	exists it won't be recreated

var MYAPP || {};
MYAPP.namespace = function (ns_string) {
	var parts = ns_string.split('.'),
	parent = MYAPP,
	i;

	// strip reduncdant leading global
	if (parts[0] === "MYAPP") {
		parts = parts.slice(1);
	}

	for (i = 0; i < parts.length; i += 1) {
		//create a property if it doesn't exist
		if (typeof parent[parts[i]] === "undefined") {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
};

// IMPLEMENTATION:
// assign returned value to a local var
var module2 = MYAPP.namespace('MYAPP.modules.module2');
module2 === MYAPP.modules.module2 // true

//skip inital myapp
MYAPP.namespace('modules.module51');

//long namespace
MYAPP.namespace('once.upon.a.time.there.was.a.long.nested.property');

//see also: https://addyosmani.com/blog/essential-js-namespacing/