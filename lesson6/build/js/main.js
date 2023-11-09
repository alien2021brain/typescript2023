"use strict";
class car {
    constructor(name, price, serialno, model = "2023") {
        this.name = name;
        this.price = price;
        this.serialno = serialno;
        this.model = model;
    }
    opt() {
        return this.serialno;
    }
}
const carobj = new car("Sachin", 10, 10);
console.log("car", carobj.opt());
class bike extends car {
    constructor(color, name, price, serialno) {
        super(name, price, serialno);
        this.color = color;
    }
    pricefun() {
        return this.model;
    }
}
const obj = new bike("black", "bmw", 2000000, 12345);
console.log(obj.pricefun());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(actions) {
        return `${this.name} ${actions} the ${this.instrument}`;
    }
}
const page = new Guitarist("Jimmy", "guitar");
console.log(page.play("play"));
///////////////////////////////////////////////
// now using the static variable
class Peeps {
    // decalered static function
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Annu = new Peeps("Annu");
const Sachin = new Peeps("Sachin");
const Suruchi = new Peeps("Suruchi");
console.log(Suruchi.id);
// we can get the static varaible with help of peeps
console.log(Peeps.getCount());
///////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((ele) => typeof ele === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Params is not  an arry of string");
    }
}
const Bandsobj = new Bands();
Bandsobj.data = ["hii", "bye", "shy"];
console.log(Bandsobj.data);
