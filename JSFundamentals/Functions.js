// Using call with different object "this" reference
/*
function Bicycle(cadence, speed, gear, tirePressure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function () {
        this.tirePressure += 3;
    }
}

var bicycle1 = new Bicycle(30, 23, 25, 30);

function Mechanic(name) {
    this.name = name;
}

var bicycleMechanic = new Mechanic("mike");
bicycleMechanic.inflateTires = bicycle1.inflateTires;
bicycleMechanic.inflateTires.call(bicycle1);
console.log(bicycle1);
*/

// Shared constructor function that works with this reference
/*
function Employee(firstName, lastName, age, employeeId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.employeeId = employeeId;
}

Employee.prototype.getDetails = function () {
    console.log();
    console.log("Employee details are as below");
    console.log("Employee Name : " + this.firstName + " " + this.lastName);
    console.log("Employee Age : " + this.age);
    console.log("Employee Id : " + this.employeeId);
}

var tanzeem = new Employee("Tanzeem", "Ahmed", 30, 1167);
var mike = new Employee("Mike", "Holley", 40, 1100);

Employee.prototype.getDetails.call(tanzeem);
Employee.prototype.getDetails.call(mike);
*/


// IIFE - Immediately invokable function expressions
/*
(function() {
    var name = "MI";
    console.log(name);
})();
*/

// write operation need not have var keyword
/*
value = 10;  // GLOBAL SCOPE
console.log(10);

function printValue(value) {
    var value1 = 20; // LOCAL SCOPE
    console.log(value)
}

console.log(value2); // This will result in exception. So it depends on read/write mode. write is fine but read complains.
*/

// if a variable is not declared and used directly for write, it resides in Global scope despite being inside the method
/*
function printVariables() {
    x = 10; // interpreter will check if x is declared in local scope, it wont find then check in Global scope, it does not find.
    y = 20; // now since the operation is write it will create a variable and unfortunately does that in Global scope
    console.log(x + " " + y);

    function foo() {
        f = 20;
    }

foo();
console.log(f);
}
*/


// Compiler step followed by interpreter
/*
a = 10;
console.log(b);
console.log(c++);

var a;
var b;
var c;
*/

// First think compile = LHS, then think interpreter RHS. If value is found it wont go and check on Global scope
// Always remember - write with no variable declaration will create a global scope variable since it is already inside global and checking there

/*
var a = 10;

function outer() {
    var b = a;
    var c = 1;
    console.log(a);
    console.log(b);
    console.log(c);
    function inner() {
        console.log(b);
        var b = 20;
        console.log(b);
    }
    inner();
}
outer();
*/

// Also, function declaration works but function expression wont if not declared in right order
// Below works because a and b are present in Global scope during compile, when any one is executed interpretter will find them in Global scope.
/*
function a() {
    b();
}

function b(){
    a();
}*/

// This wont work since b will be undefined if a is invoked and vice versa
/*
var a = function() {
    b();
}

var b = function() {
    a();
}
*/

/*
function juggle() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    this.result = result;
}

var ninja1 = {};
var ninja2 = {};

juggle.call(ninja1, 1, 2, 3, 4); // comma separated values
console.log(ninja1);


juggle.apply(ninja2, [1, 2]); // Apply takes array
console.log(ninja2);
*/
