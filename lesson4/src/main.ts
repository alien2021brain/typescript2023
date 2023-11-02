// Type Aliases
type stringOrNumber = string | number;

type stringorNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  // here we can directly define alise i.e album will be arrray of number | string
  albums: stringorNumberArray;
};

type userId = stringOrNumber;

// Literals Type
let myName: "sachin";

// literal are where we want to use only that perticular values

let userName: "Sachin" | "Annu" | "Suruchi";

userName = "Suruchi";
console.log(userName);

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (meassage: any) => {
  console.log(meassage);
};

logMsg("hellow");
logMsg(add(2, 3));

// alise for matmatical operation
type math = (a: number, b: number) => number;

const Substract: math = (a, b) => {
  return a - b;
};
logMsg(Substract(10, 2));

const multiply: math = function (a, b) {
  return a * b;
};
// or

function multiplyF(a: number, b: number): number {
  return a * b;
}

logMsg(multiply(2, 3));
logMsg(multiplyF(4, 5));
