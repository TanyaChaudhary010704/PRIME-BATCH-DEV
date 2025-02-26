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

const detail = [
  {
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "category": "beauty",
    "price": 9.99,
    "discountPercentage": 7.17,
    "rating": 4.94,
    "stock": 5,
    "tags": [
        "beauty",
        "mascara"
    ],
    "brand": "Essence",
    "sku": "RCH45Q1A",
    "weight": 2,
    "dimensions": {
        "width": 23.17,
        "height": 14.43,
        "depth": 28.01
    },
    "warrantyInformation": "1 month warranty",
    "shippingInformation": "Ships in 1 month",
    "availabilityStatus": "Low Stock",
    "reviews": [
        {
            "rating": 2,
            "comment": "Very unhappy with my purchase!",
            "date": "2024-05-23T08:56:21.618Z",
            "reviewerName": "John Doe",
            "reviewerEmail": "john.doe@x.dummyjson.com"
        },
        {
            "rating": 2,
            "comment": "Not as described!",
            "date": "2024-05-23T08:56:21.618Z",
            "reviewerName": "Nolan Gonzalez",
            "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
        },
        {
            "rating": 5,
            "comment": "Very satisfied!",
            "date": "2024-05-23T08:56:21.618Z",
            "reviewerName": "Scarlett Wright",
            "reviewerEmail": "scarlett.wright@x.dummyjson.com"
        }
    ],
    "returnPolicy": "30 days return policy",
    "minimumOrderQuantity": 24,
    "meta": {
        "createdAt": "2024-05-23T08:56:21.618Z",
        "updatedAt": "2024-05-23T08:56:21.618Z",
        "barcode": "9164035109868",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
    },
    "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
  }
]

function viewDetail(e, id) {
  const arr = products.find(product => product.id == id);
  console.log(arr);
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.className = "container";
  body.innerHTML = "";
  container.innerHTML = `
    <img src="${arr.images[0]}" width="200px">
    <hr>
    <br>
    <h1>${arr.title}</h1>
    <h2>${arr.price} (${arr.discountPercentage} % off)</h2>
    <p>Description : ${arr.description}</p>
    <p>Brand : ${arr.brand}</p>
    <p>Category : ${arr.category}</p>
    <p>Rating : ${arr.rating}</p>
    <p>weight : ${arr.weight}</p>
    <p>Width : ${arr.dimensions.width}</p>
    <p>Height : ${arr.dimensions.height}</p>
    <p>Depth : ${arr.dimensions.depth}</p>
    <p>Return Policy : ${arr.returnPolicy}</p>
    <p>Warranty : ${arr.warrantyInformation}</p>
    <p>Shipping : ${arr.shippingInformation}</p>
  `;
  body.appendChild(container);

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
  