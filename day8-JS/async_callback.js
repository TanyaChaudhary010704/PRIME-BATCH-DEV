// console.log("start");
const handleInnerCall = () => {
  console.log("Step Y");
};
const handleCall = () => {
  console.log("Step M");
  handleInnerCall();
  console.log("Step N");
};
// //calls function after 1 sec
// //asyncronous function

// //assign handle call function to callbackl queue but now executes when call stack becomes empty
// //Therefore, asyncronous functions are executed always after syncronous function
// setTimeout(handleCall, 0);//callback

// setTimeout(handleCall, 1000);//callback

// console.log("end");
// //Synchoronous Js = when one function waits for others to finish
// //Asynchronous - event loop - check if the call stack is empty , then assign function in callback queue to call stack

// //start
// //body->click->handleCall
// //end
// //now call stack is empty
// //callback queue or macro tast queue -> contain all calls which are asynchronous (here handleCall)
// //when the call stack becomes empty then the callback queue functions are put in stack one by one
// //event listner will only be called on body when some content is preset in it
// //set time out - asynchronous function
// //callback - browser will call the function

//-----------------------------------------------

// console.log("A");
// setTimeout(() => {
//   console.log("N");
//   setTimeout(() => {
//     console.log("P");
//   }, 0);
//   handleCall();
//   console.log("B");
// }, 5000);
// console.log("C");

//----------------------------------------------

//CALLBACK
/*
  const ans = handleUser(handdlePayment);
*/

//PROMISES - it is an object that represents eventual completion of failure
//-> These are handled by browser
//-->status - pending , fulfilled , rejected


/* 
  const userId = handleUser()-->returns promise
  Then{
  const res = handlePayment(userId);
  }
  Catch{
   //error
  }
*/

//-------------------------------------------

//DESTRUCTURING

// const obj = {
//   name: "Tanya",
//   city:"Delhi"
// }
// const { city } = obj;
// console.log(city);
//to give default value of some key
// const { city , country="India"} = obj;

// const obj2 = {
//   name: "Tanya",
//   info: {
//     college:"ABES",
//   }
// }
// let { name, info } = obj2;
// //copy so obj will not change
// name = "Tanu";
// //info.college = "ABESIT";
// //obj will change
// info={college: "ABES"}
// console.log(obj2);

//---------------------------------------------

//JS object -->JSON = JSON.stringify
//JSON --> JsObject = JSON.parse  

