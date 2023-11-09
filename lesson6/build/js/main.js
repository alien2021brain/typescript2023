"use strict";
class car {
    constructor(name, price, serialno) {
        this.name = name;
        this.price = price;
        this.serialno = serialno;
    }
    opt() {
        return this.serialno;
    }
}
class bike extends car {
    pricefun() {
        return this.price;
    }
}
const obj = new bike("bmw", 2000000, 12345);
console.log(obj.pricefun());
