// Tye Casting Or Type Assertion
// type aliease
type One = string;
type Two = string | number;
type Three = "hellow";

let a: One = "hellow";
let b = a as Two;
console.log(b);
let c = a;
console.log(c);

// the is another way it is same as as
let d = <One>"world";
let e = <string | number>"world";

// example
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c == "add") return a + b;
  return "" + a + b;
};
// we are force fully doing it
let myval: string = addOrConcat(2, 2, "concat") as string;

// Be careful ts see no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// if weant to do forcefully type assertion
10 as unknown as string;
// 10 as string

// The DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("img");
