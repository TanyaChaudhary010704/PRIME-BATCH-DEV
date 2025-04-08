const http = require("http");
const fsPromises = require("fs/promises");
const port = 1200;

const getData = async () => {
  const resp = await fetch("https://dummyjson.com/products");
  const data = await resp.json();

  return data.products;
};

const getProductsHtmlCode = (products) => {
  let result = "";
  products.forEach(({ title, price }) => {
    result += `
    <div class="card">
      <h4>${title}</h4>
      <p>${price}</p>
    </div>  
    `;
  })
  return result;
}

const server = http.createServer(async(req, res) => {
  console.log(`------------request recieved-------------`);
  //console.log(Object.keys(req));
  //console.log(req.url);
  res.setHeader('content-type', 'text/html');
  //res.setHeader('content-type', 'application/json');
  res.setHeader('my-name', 'Tanya');
  //res.end("Done!");
  //res.end("<button>Click Me !</button>");

  if (req.url == "/" || req.url =="/home") {
    console.log("Home page");
    const page = await fsPromises.readFile("./pages/homePage.html",'utf-8');
    const products = await getData();
    const productsHtmlCode = getProductsHtmlCode(products);
    //console.log(productsHtmlCode);
    const newPage = page.replace("__Products__", productsHtmlCode);
    res.end(newPage);
  }
  else if (req.url == "/about") {
    console.log("About Page");
    res.end("About Page");
  }
  else {
    console.log("404 Page not found");
    res.end("404 Page not found");
  }
  
});
server.listen(port, () => {
  console.log("--------Server is running on port :",port,"---------");
  console.log("------------http://localhost:", port, "-----------");
});
