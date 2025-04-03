console.log("Team A loading..")
const sum = require('./teamB.js');
const profit = 100;
const expenses = 20;
const revenue = sum(profit, expenses);
module.exports = { profit, expenses, revenue };
console.log("Team A done !")