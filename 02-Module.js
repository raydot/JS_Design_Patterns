/*  Several options for implementing modules, this is the module pattern. */

/* 
Quick review of object literals: 
var myObjectLiteral = {
	variableKey: variableValue,
	functionKey: function() {
		// ...
	}
};
*/

/* More complete example of a module defined using object literal notation: */

var myModule = {
	//	object literals can contain properties and methods/
	//	e. g. you can define a further object for module configration.
	myConfig: {
		useCaching: true,
		language: "en"
	},

	// 	basic method
	saySomething: function() {
		console.log("Whoo, just proud to be on the team!");
	},

	//	output a value based on the current config
	reportMyConfig: function() {
		console.log("Caching is: " + (this.myConfig.useCaching ? "enabled" : "disabled"));
	},

	// override the current config
	updateMyConfig: function(newConfig) {
		if(typeof newConfig === "object") {
			this.myConfig = newConfig;
			console.log(this.myConfig.language);
		}
	}
};

myModule.saySomething();
myModule.reportMyConfig();
myModule.updateMyConfig({
	language:"fr",
	useCaching: false
});
myModule.reportMyConfig();