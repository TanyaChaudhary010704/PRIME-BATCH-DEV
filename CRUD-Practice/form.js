let root = document.querySelector('.root');
let addBtn = document.querySelector('input[type="submit"]');
const data = [
  {
    name: "Tanya",
    number: 12345667899,
  },
  {
    name: "Tanya",
    number: 12345667899,
  }
];
const createCard = () => {
  let name = document.querySelector('#name');
  let num = document.querySelector('#num');
  const obj = {
    name: name.value,
    number: num.value
  };
  data.push(obj);
  showCard(data);
  console.log(data);
};

addBtn.addEventListener("click", createCard);

const handleSubmit = (e) => {
  e.preventDefault();
}

const showCard = (data) => {
  root.innerHTML = "";
  data.forEach((d) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <h2>${d.name}</h2>
    <p>${d.number}</p>
    <button>Delete</button>
    `;
    root.appendChild(card);
  });
};
showCard(data);


const deleteCard = () => {

};
