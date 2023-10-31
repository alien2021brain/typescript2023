"use strict";
// implicit :when we dont define strictly ,here typescript infer it is string
let a = "abc";
// Explicit when we provide a strict type to data ,here it is not infering because it already know it is string
let b = "sachin";
// typescript will infer sum function returning string because sum of number and string is string
const sum = (a, b) => {
    return a + b;
};
// multiple types in type-script
let myname = "Dave";
let meagningOFlife;
let isLoading;
// we use any type sometime when we donot know about the types
let album;
// union in typescript
let postID;
// regex
const reg = /\w+/g;
