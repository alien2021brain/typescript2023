interface TransactionObj {
  // if we will not write this line it will cause error
  //   readonly [index: string]: number | string;
  //   [index: string]: number | string;

  Pizza: number;
  Books: number;
  Job: number;
}

const todayTransctions: TransactionObj = {
  Pizza: -10,
  Books: -20,
  Job: 50,
};

console.log(todayTransctions.Pizza);

let prop: string = "pizza";
console.log(todayTransctions[prop as keyof TransactionObj]);

// for (const transction in todayTransctions) {
//   console.log(todayTransctions[transction as keyof TransactionObj]);
// }
// or
for (const tranction in todayTransctions) {
  console.log(todayTransctions[tranction as keyof typeof todayTransctions]);
}
todayTransctions.Pizza = 6;

/////////////////////////////////////////////////////////

interface Incomes {
  // we cannot give lieral here
  // [key:"Id"]:number
  [key: string]: number;
}
const obj: Incomes = {
  Id: 10,
};

// if we want to use literals then
type Streams = "salary" | "bonous" | "sidehustle";

type Income = Record<Streams, number>;
const montlyIncome: Income = {
  salary: 1000,
  bonous: 200000,
  sidehustle: 200000,
};

for (const revenue in montlyIncome) {
  console.log(`${revenue} is ${montlyIncome[revenue as keyof Income]}`);
}
