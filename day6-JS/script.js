const data = [
  {
    name: "Tanya",
    city: "Ghaziabad",
    email: "tanya@gmail.com",
  },
  {
    name: "Tanya",
    city: "Ghaziabad",
    email: "tanya@gmail.com",
  },
  {
    name: "Tanya",
    city: "Ghaziabad",
    email: "tanya@gmail.com",
  },
  {
    name: "Tanya",
    city: "Ghaziabad",
    email: "tanya@gmail.com",
  },
];
const root = document.querySelector("#parent");
data.forEach((ele) => {
  const newCard = document.createElement("div");
  newCard.addEventListener("click", () => {
    console.log("div clicked");
    newCard.style.backgroundColor = getRandomColor();
  });//capturing mode-> , true
  newCard.className = "card";
  newCard.innerHTML = `
  <h4>${ele.name}</h4>
  <h6>${ele.email}</h6>
  <p class="text">${ele.city}</p>
  `;
  root.appendChild(newCard);
});
//----------------------------------------------
//ONCLICK EVENT LISTNER
const handleChange = () => {
  console.log("clicked");
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomColor();
};
handleChange();
function getRandomColor() {
  let x = Math.floor(Math.random() * 255);
  let y = Math.floor(Math.random() * 255);
  let z = Math.floor(Math.random() * 255);
  return `rgb(${x},${y},${z})`;
}
//----------------------------------------------

//EVENTS PROPAGATION
//CAPTURING AND BUBBLING
// by default events are applied in bubbling phase -> child -> parent

const textElement = document.querySelector(".text");
textElement.addEventListener('click', (event) => {
  console.log("para clicked");
  textElement.style.backgroundColor = getRandomColor();
  event.stopPropagation();//to stop event propagation
});