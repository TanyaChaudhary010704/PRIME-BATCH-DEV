//debouncing

const getData = (text) => {
  const pr = fetch(`http://dummyjson.com/recipes/search?q=${text}`);
  pr.then((res) => {
    const pr2 = res.json();
    pr2.then((data) => {
      showCards(data);
    });
  });
};

const root = document.querySelector('#cards-container');
console.log(root)
const showCards = (dataArr) => {
  root.innerHTML = "";
  dataArr.forEach((ele) => {
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.innerHTML = `
      <h4>${ele.name}</h4>
      <img src="${ele.image}" width=100px>
      <p>${ele.cuisine}</p>
    `;
    root.appendChild(newDiv);
  })
}
let timeoutId = null;
const handleSearch = (e) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId= setTimeout(() => { 
    getData(e.target.value);
  }, 1000); 
}
