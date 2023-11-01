"use strict";
// implicit defining
let stringArr = ["one", "hey", "sachiin"];
let fruits = ["apple", "banana", 1994];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "one2";
// number is not assignable to stringArr
// stringArr.push(0)
stringArr.push("cow");
// we can assign number because  (string | number)
fruits[0] = 10;
// we can push (string | number | boolean ) in mixed data
mixedData.push(10);
mixedData.push(false);
// by default empty array has any type
let test = [];
let bands = [];
// it will show type error
// bands.push(10)
bands.push("hiii");
// tuples
// tuples are same as array but fixed length with fixed type
let myTuple = ["hii", 10, true];
// error because notTuple follow union
let notTuple = ["hii", 20, false];
// myTuple = notTuple;
// error because tuple sized is fixed
// myTuple[3]=10
// OBJECT
// we will not this way because array are also object in js
let myobject;
let mybob = {
    name: "sachin",
    album: [true],
    optional: true,
};
// optional is optional
let myobj = {
    name: "hii",
    album: [10],
};
mybob = myobj;
const getoutput = (data) => {
    var _a;
    console.log((_a = data.sex) === null || _a === void 0 ? void 0 : _a.toUpperCase);
};
getoutput(myobj);
// enum
// by deafult enum propvide values
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 5] = "A";
    Grade[Grade["B"] = 6] = "B";
    Grade[Grade["c"] = 7] = "c";
    Grade[Grade["D"] = 8] = "D";
})(Grade || (Grade = {}));
// here b c d will be 6,7,8,9 respectively
console.log(Grade.B);
