"use strict";
let a = "hellow";
let b = a;
console.log(b);
let c = a;
console.log(c);
// the is another way it is same as as
let d = "world";
let e = "world";
// example
const addOrConcat = (a, b, c) => {
    if (c == "add")
        return a + b;
    return "" + a + b;
};
// we are force fully doing it
let myval = addOrConcat(2, 2, "concat");
