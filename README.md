# typescript2023

TypeScript is JavaScript with syntax for types.
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

<!--
initilizing the type script
 -->

1: Command using npm: Having TypeScript set up on a per-project basis lets you have many projects with many different versions of TypeScript, this keeps each project working consistently.
command:npm install typescript --save-dev

2: Global command:with help of global command we can use typescript anywhere in our terminal
command:npm install -g typescript

<!-- creating tsconfig file -->

tsc --init

<!-- modification in tsconfig.json -->

1.root->change it to ./src
2.outdir-> change it to ./build/js
3.target->for older browser you can change it to es5 else leave it to es2016
4."noEmitOnError": true,:it is used for we want it should on wrong type

<!-- adding include to tsconfig -->

if we want to compile ts file inside src folder then we have to add include
syntax:include:["src"]

<!-- difference between typescript and javascript -->

Typescript:typescript is strongly typed langangued which is staticaly typed it is checked in compile time
JavaScript:Javascript is lossly typed language which is dynamacily type which mean it is checked in run time
