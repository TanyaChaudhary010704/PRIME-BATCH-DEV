//var a = "hello";//preferred 
var b = 'hello';
var c = 10;
var d = true;
//primitive data types - number, string, boolean,null,undefined,BigInt,symbol
// and non-primitive types - object
if (a == b) {//loose eqaulity
  console.log("Yes");
}
else {
  console.log("NO");
}
console.log(NaN == NaN);//false
console.log("1"*"1");//1
console.log("1"*"a");//NaN
console.log(0 == -0);//true
console.log(null == null);//true
console.log(null == undefined);//true
console.log(null == 0);//false
console.log(false == 0);//true
console.log(10 == "10");//true
console.log(10 === "10");//true value and datatype
//         Scope      Redeclaration     Reassignment
// let     block      no                yes
// const   block      no                no
// var     function   yes               yes
console.log(a);//undefined
var a = "hello"
console.log(a);//hello
var a = "hi"
console.log(a);//hi

console.log(x)//not defined



