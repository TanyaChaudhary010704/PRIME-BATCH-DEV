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
    const {id,title,thumbnail,price,discountPercentage
      ,rating} = item;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="img-container">
        <img src="${thumbnail}"></img>
      </div>
      <div class="text-container">
        <h1>${title}</h1>
        <h2>${price}$ (${discountPercentage
        }% off)</h2>
        <h4>Rating :${rating}</h4>
      </div>
      <div class ="card-btns">
          <button onclick="viewDetail(event,${id})">View</button>
          <button onclick="addToCart(event,${id})">Add To Cart</button>
      </div>
    `;
    parent.appendChild(card);
  });
}

const search = () => {
  let parent = document.querySelector(".parent");
  let input = document.querySelector('input');
  let arr = products.filter(product => product.title.toLowerCase().includes(input.value));
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
  // console.log(products);
  // console.log(arr);
  showUI(arr);
}

function viewDetail(e,id) {
  window.open("./viewDetail.html");
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
  