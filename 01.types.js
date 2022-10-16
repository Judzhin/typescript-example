var isTrue = true;
var isFalse = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var str = "Hello TypeScript";
var nums01 = [1, 2, 3];
var nums02 = [1, 2, 3]; // generic array types
var words = ["Hello", "TypeScript"];
// Tuple
var contact = ["Phone", 0987654321];
// Any
// let variable = 42
var variable = 42;
// variable = 'contact';
variable = "New String";
variable = [];
function sayMyName(name) {
    console.log("Hello ".concat(name));
}
sayMyName("John");
// Never called
function throwError(message) {
    throw new Error(message);
}
function infinity() {
    while (true) { }
}
var login = "admin";
var id1 = "UUID";
var id2 = 123;
