// implicit :when we dont define strictly ,here typescript infer it is string
let a = "abc";

// Explicit when we provide a strict type to data ,here it is not infering because it already know it is string
let b: string = "sachin";

// typescript will infer sum function returning string because sum of number and string is string
const sum = (a: number, b: string) => {
  return a + b;
};

// multiple types in type-script
let myname: string = "Dave";
let meagningOFlife: number;
let isLoading: boolean;
// we use any type sometime when we donot know about the types
let album: any;

// union in typescript
let postID: string | number;

// regex
const reg: RegExp = /\w+/g;
