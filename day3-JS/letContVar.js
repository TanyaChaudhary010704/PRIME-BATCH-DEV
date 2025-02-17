//var has function scope
// const temp = () => {
//   if (true) {
//     var username = "Raj";
//   }
//   console.log(username);
// };
// temp();
// console.log(username);

const sumMod10=(a, b)=> {
  const printPretty = (txt) => {
    console.log("----", txt, "----");
  }
  printPretty("ABC");
  const ans = (a + b) % 10;
  console.log(ans);
  console.log("Sum done")
}
sumMod10(1, 2);
console.log("End");