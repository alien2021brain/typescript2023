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

// optional parameter
// A required parameter cannot follow an optional parameter. use in the end
const addAll = (a: number, b: number, c?: number) => {
  if (c) {
    return a + b + c;
  }
  return a + b;
};
logMsg(addAll(1, 2));

const addAllNew = (a: number = 2, b: number, c: number = 4) => {
  return c + b + a;
};
// for first statement you have to give undefined
logMsg(addAllNew(undefined, 2));

// rest Parameter
const total = (a: number, ...num: number[]): number => {
  return (
    a +
    num.reduce((pre, cur) => {
      return (pre += cur);
    })
  );
};
logMsg(total(1, 2, 3));

const isnumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
// never type
// never type is used for when anything is infinite or errorw throw
//  use of never type
const createError = (errmsg: string) => {
  throw new Error(errmsg);
};

// const numberOrString = (value: number | string): string => {
//   if (typeof value === "string") return "string";
//   if (typeof value === "number") return "number";
//   return createError("This should never happen!");
// };

// using isnumber
const numberOrString = (value: number | string): string => {
  return isnumber(value) ? "number" : "string";
};
console.log(numberOrString(8));
