// Anonymous Function
let anonymousFun = function(p) {
console.log("Anonymous Function: " + p);
};
// Overloaded Anonymous Function
const overloadedAnonymousFun = function(p1, p2) {
console.log("Overloaded Anonymous Function: " + p1 + ", " + p2);
};
// Anonymous Function with Default Value
const anonymousFunWithDefault = function(p = 0) {
console.log("Anonymous Function with Default Value: " + p);
};
anonymousFun(10); 
overloadedAnonymousFun(20, 30); 
anonymousFunWithDefault(); 
anonymousFunWithDefault(40);