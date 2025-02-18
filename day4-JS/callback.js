//DECOUPLING
//H.O.F , C.B
//INVERSION OF CONTROL
//SEPRERATION OF CONCERNS
//MUTABILITY
// ---------------------------------------------

// two seperate functions
// const sum = (a, b) => {
//   const ans = a + b;
//   return ans;
// };
// const printPretty = (txt) => {
//   console.log("---------");
//   console.log(txt);
//   console.log("---------");
// };
// const res = sum(20, 30);
// printPretty(res);

//----------------------------------------------

// const sum = (a, b) => {
//   const ans = a + b;
//   return ans;
// };
// const printPretty = (txt) => {
//   console.log("---------");
//   console.log(txt);
//   console.log("---------");
// };
// printPretty(sum(20, 30));

//call stack - gec->sum(execute and remove)->printPretty
//max call stack length - 2

//----------------------------------------------

//function invocation in other function printPretty(sum());
//callback is passing function as parameter printPretty(sum);
//inversion of control - printyPretty transfers its control to sum
//higher order function - that accepts function as parameter
//callback function - that is passed as parameter


// const sum = (a, b, c) => {
//   //Higher order function
//   const ans = a + b;
//   c(ans);
// };
// const printPretty = (txt) => {
//   console.log("---------");
//   console.log(txt);
//   console.log("---------");
// };
// //callback function is printPretty
// sum(20, 30, printPretty);

//call stack - gec->sum->printPretty
//max call stack length = 3

//----------------------------------------------

//ARRAY ITERTIVE METHODS

// const arr = [10, 20, 30];
// const printPretty = (a) => {
//   console.log("*", a);
// }
// arr.forEach(printPretty);
// const printPretty1 = (ele,idx) => {
//   console.log("*", ele ,idx);
// }
// arr.forEach(printPretty);

const arr = [10, 20, 30];
// arr.forEach(ele => {
//   console.log(ele);
// });

//----------------------------------------------

// const arrNew = arr.map((a) => {
//   return a * 2;
// })
// console.log(arrNew);

//----------------------------------------------

//WITH DEFAULT VALUE
// arr.reduce((acc, ele, idx, c) => {
//   console.log(acc, ele, idx, c);
//   return acc;
// }, 0);
//default = 0;
// Iteration     acc       elem        idx          c
//first          0         10          0           [10, 20, 30]
// second        0         20          1           [10, 20, 30]
//third          0         30          2           [10, 20, 30]

//WITHOUT DEFAULT VALUE
// arr.reduce((acc, ele, idx, c) => {
//   console.log(acc, ele, idx, c);
//   return acc;
// });
//default =10;
// Iteration     acc       elem        idx          c
//first          10        20          1           [10, 20, 30]
//second         10        30          2           [10, 20, 30]

// //USE CASE - TO SUM ARRAY ELEMENTS
// const sum1 = arr.reduce((acc, ele) => {
//   return acc+ele;
// }, 0);

// const sum2 = arr.reduce((acc, ele) => {
//   return acc+ele;
// });

// //USE CASE - TO MUL ARRAY ELEMENTS
// const mul = arr.reduce((acc, ele) => {
//   return acc*ele;
// });

//REDUCE AS MAP FUNCTION
const newArr = arr.reduce((acc,ele) => {
  acc.push(ele * 2);
  return acc;
},[])
console.log(newArr);

//REDUCE AS FOR EACH FUNCTION
arr.reduce((acc,ele) => {
  console.log(ele);
  return acc;
},[])
console.log(newArr);
