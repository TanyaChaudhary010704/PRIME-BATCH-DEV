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

let products = [];

const getData = (e) => {
  const pr = fetch("https://dummyjson.com/products");//returns promise
  //console.log(pr)
  pr.then((a) => {
    //console.log("a :", a);//Object Response
    const pr2 = a.json();//returns promise
    pr2.then((data) => { 
      //console.log(data);
      products = data.products;
      console.log(products);
      showUI(products);
    })

  }).catch((e) => {
    console.log("Error :" + e);
  });
}
getData();

//--------------------------------

function showUI(products) {
  let parent = document.querySelector(".parent");
  //console.log("Data :", data);
  parent.innerHTML = "";
  products.forEach((item) => {
    const {id,title,images,price,discountPercentage
      ,rating} = item;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="img-container">
        <img src="${images[0]}"></img>
      </div>
      <div class="text-container">
        <h1>${title}</h1>
        <h2>${price}$ (${discountPercentage
        }% off)</h2>
        <h4>Rating :${rating}</h4>
        <button>View</button>
        <button onclick="addToCart(event,${id})">Add To Cart</button>
      </div>
    `;
    parent.appendChild(card);
  });
}

const search = () => {
  let parent = document.querySelector(".parent");
  let input = document.querySelector('input');
  let arr = products.filter(product => product.category == input.value);
  console.log(arr);
  parent.innerHTML = "";
  showUI(arr);
  storeData(arr);
}

function addToCart(e,id) {
  console.log(e.target);
  console.log(id);
  const idx = products.findIndex((ele) => ele.id == id);
  const oldData = localStorage.getItem("cart");
  const arr = JSON.parse(oldData || "[]");
  arr.push(products[idx]);
  localStorage.setItem("cart",JSON.stringify(arr));
}

function showCart() {
  const oldData = localStorage.getItem("cart");
  const arr = JSON.parse(oldData || "[]");
  console.log(products);
  console.log(arr);
  showUI(arr);
}


function storeData(data) {
  const oldData = localStorage.getItem("searches");
  const arr = JSON.parse(oldData || "[]");
  arr.push(data);
  localStorage.setItem("searches",JSON.stringify(arr));
}  
function showHistory() {
  const oldData = localStorage.getItem("searches");
  const arr = JSON.parse(oldData || "[]");
  arr.forEach(showUI(data));
}
  