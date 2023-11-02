"use strict";
// Literals Type
let myName;
// literal are where we want to use only that perticular values
let userName;
userName = "Suruchi";
console.log(userName);
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (meassage) => {
    console.log(meassage);
};
logMsg("hellow");
logMsg(add(2, 3));
const Substract = (a, b) => {
    return a - b;
};
logMsg(Substract(10, 2));
const multiply = function (a, b) {
    return a * b;
};
// or
function multiplyF(a, b) {
    return a * b;
}
logMsg(multiply(2, 3));
logMsg(multiplyF(4, 5));
