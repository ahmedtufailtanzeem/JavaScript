// function definition
function foo() {

}

// function expression
var funcFoo = function () {
    console.log("called via useless")
}

//Assigning function to array
var ninjaArray = [];
ninjaArray.push(function () {
})

// Assigning function to Object property
var ninja = {};
ninja.func = function () {
};

function useless(func) {
    func();
}

useless(funcFoo);

function baz() {
    return function () {
    };
}

console.log(baz());

var ninjaFunction = function () {
};
ninjaFunction.data = "its a function";
console.log(ninjaFunction.data);
console.log(ninjaFunction);


// EXAMPLES OF CALL BACK FUNCTIONS
var values = [10, 5, 56, -5, 12];
console.log("Before sorting...")
console.log(values);

console.log("After sorting...")
console.log(values.sort(function (value1, value2) {
    return value1 - value2; // REVERSE IF RESULT IS POSITIVE SO ON....
}));

values.map(function(item){
    console.log(item);
})






