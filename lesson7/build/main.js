"use strict";
const todayTransctions = {
    Pizza: -10,
    Books: -20,
    Job: 50,
};
console.log(todayTransctions.Pizza);
let prop = "pizza";
console.log(todayTransctions[prop]);
// for (const transction in todayTransctions) {
//   console.log(todayTransctions[transction as keyof TransactionObj]);
// }
// or
for (const tranction in todayTransctions) {
    console.log(todayTransctions[tranction]);
}
todayTransctions.Pizza = 6;
