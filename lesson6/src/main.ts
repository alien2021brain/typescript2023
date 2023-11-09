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
class bike extends car {
  constructor(
    public color: string,
    name: string,
    price: number,
    serialno: number
  ) {
    super(name, price, serialno);
  }

  public pricefun(): number {
    return this.price;
  }
}
const obj = new bike("black", "bmw", 2000000, 12345);
console.log(obj.pricefun());
