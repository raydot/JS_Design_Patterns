/* the * denotes a generator function */

function* countSomeSales() {
	var saleList = [3, 7, 5];
	for(var i = 0; i < saleList.length; i++) {
		yield saleList[i];  
		// yield is like a special return for a genarator
		// it is used to pause and resume a generator function
	}
}

var someStore = countSomeSales(); //Generator { }
console.log(someStore.next());
console.log(someStore.next());
console.log(someStore.next());
console.log(someStore.next());




