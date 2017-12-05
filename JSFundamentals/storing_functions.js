/*
var store = {
    nextId: 1, // keeps track of next available id to be assigned
    cache: {}, // servers as cache to store functions
    add: function (fn) {
        if (!fn.id) { // if id on a function is undefined its a new function
            fn.id = this.nextId++; // the reason we can use "THIS" is object creation is inline. Don't confuse with constructor                                         //function/ object creator methods
            this.cache[fn.id] = fn; // create a property with name equal to id and store the function to it
            return true;
        } else
            return false;
    }
};

function ninja() {
};

console.log("Adding function ninja for first time returns " + store.add(ninja));
console.log(ninja);
console.log("Adding function ninja for second time returns " + store.add(ninja));
*/

/*
var store = {
  nextId : 0,
  cache : [],
  add : function(fn) {
    console.log(fn.id);
  	if(!fn.id) {
  			fn.id = this.nextId++;
  			this.cache[fn.id] = fn;
  		  return true;
		} else {
        return false;
    }
	}
};

function foo() {
  console.log("i am foo");
}

console.log(store.add(foo));
console.log(store.add(foo));
 */

/*
var store = {
    nextId : 1,
    cache : {},
    add : function(fn) {
        if(!fn.id) {
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        } else {
            return false;
        }
    }
};

function foo() {}

console.log(store.add(foo));
console.log(foo)
console.log(store.add(foo));

*/