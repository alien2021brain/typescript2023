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
// optional parameter
// A required parameter cannot follow an optional parameter. use in the end
const addAll = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(1, 2));
const addAllNew = (a = 2, b, c = 4) => {
    return c + b + a;
};
// for first statement you have to give undefined
logMsg(addAllNew(undefined, 2));
// rest Parameter
const total = (a, ...num) => {
    return (a +
        num.reduce((pre, cur) => {
            return (pre += cur);
        }));
};
logMsg(total(1, 2, 3));
const isnumber = (value) => {
    return typeof value === "number" ? true : false;
};
// never type
// never type is used for when anything is infinite or errorw throw
//  use of never type
const createError = (errmsg) => {
    throw new Error(errmsg);
};
// const numberOrString = (value: number | string): string => {
//   if (typeof value === "string") return "string";
//   if (typeof value === "number") return "number";
//   return createError("This should never happen!");
// };
// using isnumber
const numberOrString = (value) => {
    return isnumber(value) ? "number" : "string";
};
console.log(numberOrString(8));
