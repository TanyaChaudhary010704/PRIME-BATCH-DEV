//code running phase-
//memory allocation -> execution

//Function declaration
// print("ABC")
// function print(a) {
//   console.log("Hello", a);
// }
// function print(a) {
//   console.log("Hello", a);
// }//no error functins with same name can be made
// print("XYZ");

// issues-
// 1- can be used before declaration
// 2- same name function can be defined

//function assignment
// const view = function printText(a) {
//   console.log("Hello", a);
// }
// view("ABC");
// printText("ABC");

// Anonymous function Assignment
// const view2= function (a) {
//   console.log("Hello", a);
// }
// view2("ABC");

// Arrow Function Assignment
// const view3= (a) =>{
//   console.log("Hello", a);
// }
// view3("ABC");

// One line function assignment
// const view3= (a) =>console.log("Hello", a);
// view3("ABC");

function sumAndMod(a, b) {
  return (a+b)%10;
}
console.log(sumAndMod(10, 20));

const ans1 = function sumAndMod(a, b) {
  return (a+b)%10;
}
console.log(ans1(10, 20));

const ans2 = function (a, b) {
  return (a+b)%10;
}
console.log(ans2(10, 20));

const ans3 =  (a, b)=> {
  return (a+b)%10;
}
console.log(ans3(10, 20));

const ans4 =  (a, b)=>(a+b)%10;
console.log(ans4(10,20));