// in class we define variable in side constructor and acess private member
class car {
  constructor(
    public name: string,
    protected price: number,
    private serialno: number,
    protected model: string = "2023"
  ) {}

  public opt(): number {
    return this.serialno;
  }
}
const carobj = new car("Sachin", 10, 10);
console.log("car", carobj.opt());
class bike extends car {
  constructor(
    public color: string,
    name: string,
    price: number,
    serialno: number
  ) {
    // we use super class when we extend
    super(name, price, serialno);
  }

  public pricefun(): string {
    return this.model;
  }
}
const obj = new bike("black", "bmw", 2000000, 12345);
console.log(obj.pricefun());

// using interface with class
interface Musican {
  name: string;
  instrument: string;
  play(actions: string): string;
}

class Guitarist implements Musican {
  constructor(public name: string, public instrument: string) {}
  play(actions: string): string {
    return `${this.name} ${actions} the ${this.instrument}`;
  }
}
const page = new Guitarist("Jimmy", "guitar");
console.log(page.play("play"));

///////////////////////////////////////////////

// now using the static variable
class Peeps {
  static count: number = 0;
  // decalered static function
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.id = ++Peeps.count;
  }
}

const Annu = new Peeps("Annu");
const Sachin = new Peeps("Sachin");
const Suruchi = new Peeps("Suruchi");
console.log(Suruchi.id);
// we can get the static varaible with help of peeps
console.log(Peeps.getCount());

///////////////////////////////////

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((ele) => typeof ele === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Params is not  an arry of string");
  }
}
const Bandsobj = new Bands();
Bandsobj.data = ["hii", "bye", "shy"];
console.log(Bandsobj.data);
