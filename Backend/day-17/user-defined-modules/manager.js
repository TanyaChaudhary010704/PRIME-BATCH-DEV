console.log("Manager loading..")
const obj = require("./teamA.js")
const sum = require("./teamB.js")
console.log(`
  Our current
    Revenue is ${obj.revenue}
    with ${obj.profit} profit
  `)
const revenue = sum(100, 100);
console.log(revenue);
console.log("Manager done !");

(() => {
  console.log("Manager");
})();