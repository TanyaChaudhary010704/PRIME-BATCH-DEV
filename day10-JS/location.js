const getData = (text) => {
  const pr = fetch(
    `https://google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`, {
      headers: {
        "x-rapidapi-host":"google-map-places.p.rapidapi.com ",
        "x-rapidapi-key":"69153dd839msha76ccede3a8c8aap1d3966jsned16456981aa",
      }
    });
  pr.then((res) => {
    const pr2 = res.json();
    pr2.then((data) => {
      showLocations(data);
    });
  }).catch((err) => {
    console.log(err.message);
  })
};

const root = document.querySelector('#locations');
root.addEventListener('click', (e) => {
  root.innerHTML = "";
  getSpecificLocationInfo(e.target.id);
});

const showLocations = (data) => {
  root.innerHTML = "";
  const {predictions} = data;
  predictions.forEach((ele) => {
    const p = document.createElement('p');
    p.id = ele.place_id;
    p.innerText = ele.description;
    root.appendChild(p);
  });
}
let timeoutId = null;
const handleSearch = (e) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId= setTimeout(() => { 
    getData(e.target.value);
  }, 800); 
}

const getSpecificLocationInfo = (placeId) => {
  const pr = fetch(
    `https://google-map-places.p.rapidapi.com/maps/api/place/details/json?place_id=${placeId}&region=en&fields=all&language=en&reviews_no_translations=true`, {
      headers: {
        "x-rapidapi-host":"google-map-places.p.rapidapi.com ",
        "x-rapidapi-key":"69153dd839msha76ccede3a8c8aap1d3966jsned16456981aa",
      }
    });
  pr.then((res) => {
    const pr2 = res.json();
    pr2.then((data) => {
      console.log(data);
      const { result } = data;
      const rootNew = document.getElementById('location-info');
      rootNew.innerHTML = `
      <h4>${result.name}</h4>
      <p>${result.formatted_address}</p>
      <img src="${result.icon}">

      `;
      showLocations(data);
    });
  }).catch((err) => {
    console.log(err.message);
  })
}