const data = [
  {
    email: "ravi@gamil.com",
    name: "Tanya",
    city: "Aligarh",
  },
  {
    email: "ravi@gamil.com",
    name: "Tanisha",
    city: "Modinagar",
  },
  {
    email: "ravi@gamil.com",
    name: "Riya",
    city: "Ghaziabad",
  },
];
const root = document.getElementById("root");

const selectElement = document.getElementsByTagName("select")[0];

const showOptions = () => {
  selectElement.innerHTML = "";
  const citiesObj = {};
  //for unique city
  data.forEach((ele) => (citiesObj[ele.city] = true));
  const cities = Object.keys(citiesObj);
  cities.forEach((city) => {
    const newOption = document.createElement("option");
    newOption.value = city;
    newOption.innerText = city;
    selectElement.appendChild(newOption);
  });
};

const showCards = (newData) => {
  showOptions();
  root.innerHTML = "";
  newData.forEach((ele, idx) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h4>${ele.name}</h4>
      <p>${ele.city}</p>
      <button onClick="deleteCard(event,'${ele.email}')">Delete</button>
    `;
    root.appendChild(card);
  });
};

showCards(data);

const deleteCard = (e, id) => {
  //one way to delete a card-> this will not change the array
  //e.target.parentElement.remove();
  //other way to delete a card-> this will  change the array
  // console.log(e, idx);
  // data.splice(idx, 1);
  // showCards(data);
  //correct way to delete a card-> this will  change the array by matching id
  const idx = data.findIndex((ele) => ele.email == id);
  console.log(idx);
  data.splice(idx, 1);
  showCards(data);
};

const handleSelect = (e) => {
  const selectCity = e.target.value;
  const newData = data.filter((ele) => {
    if (ele.city === selectCity) {
      return true;
    }
    return false;
  });
  showCards(newData);
};

//-----------------------------------------------

const handleFormSubmit = (e) => {
  //form auto reload the page so nothing is shown on console
  //to prevent this default behavior of form we use preventDefault
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.name.value);
  console.log(e.target.email.value);
  console.log(e.target.city.value);
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log(e.target[2].value);
  //add the data
  const isEmailExist = data.some((ele) => ele.email === e.target.email);
  if (isEmailExist) {
    alert("Email already exists");
    return;
  }
  const obj = {};
  obj.email = e.target.email.value;
  obj.name = e.target.name.value;
  obj.city = e.target.city.value;
  data.push(obj);
  showCards(data);
  console.log(data);
  //add option of new city
  //One way
  // const isCityExist = data.some((ele) => ele.city === e.target.city);
  // if (isCityExist) {
  //   alert("City already exists");
  //   return;
  // }
  // const option = document.createElement("option");
  // option.value = e.target.city.value;
  // option.innerText = e.target.city.value;
  // const select = document.querySelector("select");
  // select.appendChild(option);
  //Other way
};

