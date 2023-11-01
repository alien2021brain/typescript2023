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
let bands: string[] = [];
// it will show type error
// bands.push(10)
bands.push("hiii");

// tuples
// tuples are same as array but fixed length with fixed type
let myTuple: [string, number, boolean] = ["hii", 10, true];

// error because notTuple follow union
let notTuple = ["hii", 20, false];
// myTuple = notTuple;

// error because tuple sized is fixed
// myTuple[3]=10

// OBJECT

// we will not this way because array are also object in js
let myobject: object;

// we will use thsi way
type props = {
  name: string;
  album: (number | string | boolean)[];
  optional?: boolean;
  sex?: string;
};

let mybob: props = {
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

const getoutput = (data: props) => {
  console.log(data.sex?.toUpperCase);
};

getoutput(myobj);

// enum

// by deafult enum propvide values

enum Grade {
  A = 5,
  B,
  c,
  D,
}
// here b c d will be 6,7,8,9 respectively
console.log(Grade.B);
