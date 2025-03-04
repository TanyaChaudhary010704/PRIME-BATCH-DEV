//-------------------------------------------------------------------------------------

const getDataTrending = () => {
  const res = fetch("https://youtube138.p.rapidapi.com/v2/trending", {
    method: "GET", //optional :: default is "GET"
    headers: {
      // for including headers
      "x-rapidapi-host": "youtube138.p.rapidapi.com",
      "x-rapidapi-key": "feeafdb05emsh3ca48f6cf54c170p18543cjsnae5031e85830",
    },
  });
  res
    .then((res) => {
      const pr2 = res.json();
      pr2.then((data) => {
        showUI(data.list);
        //console.log(data);
      });
    })
    .catch((err) => {
      alert(err.message);
    });
};
getDataTrending();
//-----------------------------------------------------------------------------------------------

let dummySearchData = {};

const getDataSearch = (text) => {
  const res = fetch(
    `https://youtube138.p.rapidapi.com/search/?q=${text}&hl=en&gl=US`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "youtube138.p.rapidapi.com",
        "x-rapidapi-key": "feeafdb05emsh3ca48f6cf54c170p18543cjsnae5031e85830",
      },
    }
  );
  res
    .then((res) => {
      const pr2 = res.json();
      pr2.then((data) => {
        dummySearchData = data;
        showSuggestions(data);
      });
    })
    .catch((err) => {
      alert(err.message);
    });
};

//-----------------------------------------------------------------------------------------------

const root = document.querySelector("main");
const suggestionsContainer = document.querySelector("#search-suggestions");
const input = document.querySelector("input");
const searchBtn = document.querySelector(".search-btn");

//-----------------------------------------------------------------------------------------------

const showUI = (list) => {
  root.innerHTML = "";
  list.forEach((obj, idx) => {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.innerHTML = `
    <div class="img-container">
    <img
    src="${obj.videoThumbnails[0].url}" width="100%" id='${idx}'>
    </div>
    <div class="text-container">
      <div>
      <img src="${obj.videoThumbnails.pop().url}">
      </div>
      <div>
      <h4>${obj.title}</h4>
      <p>${obj.author}</p>
      <p>${obj.viewCountText} • ${obj.publishedText}</p>
      </div>
    </div>
    `;
    newCard.addEventListener("click", () => {
      window.open(`./video.html?id=${obj.videoId}`, "_top");
    });
    root.appendChild(newCard);
  });
};

//-----------------------------------------------------------------------------------------------

const showSearchResultUI = (data) => {
  let list = data.contents;
  console.log(list);
  root.innerHTML = "";
  list.forEach((ele) => {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.innerHTML = `
    <div class="img-container">
    <img
    src="${ele.video.thumbnails[0].url}" width="100%" id='${ele.video.videoId}'>
    </div>
    <div class="text-container">
      <div>
      <img src="${ele.video.thumbnails[0].url}">
      </div>
      <div>
      <h4>${ele.video.title}</h4>
      <p>${ele.video.author.title}</p>
      <p>${ele.video.stats.views} • ${ele.video.publishedTimeText}</p>
      </div>
    </div>
    `;
    newCard.addEventListener("click", () => {
      window.open(`./video.html?id=${ele.video.videoId}`, "_top");
    });
    root.appendChild(newCard);
  });
};

//-----------------------------------------------------------------------------------------------

suggestionsContainer.addEventListener("click", (e) => {
  input.value = e.target.innerText;
  showSearchResultUI(dummySearchData);
  suggestionsContainer.style.display = "none";
});
input.addEventListener("focusout", (e) => {
  setTimeout(() => {
    suggestionsContainer.style.display = "none";
  }, 500);
});

//-----------------------------------------------------------------------------------------------

const showSuggestions = (data) => {
  suggestionsContainer.style.display = "inline";
  suggestionsContainer.innerHTML = "";
  console.log(data);
  const suggestions = data.refinements;
  suggestions.forEach((ele) => {
    const p = document.createElement("p");
    p.innerText = ele;
    suggestionsContainer.appendChild(p);
  });
};

//-----------------------------------------------------------------------------------------------

let timeoutId = null;

const handleSearch = (e) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    getDataSearch(e.target.value);
  }, 800);
};

//-----------------------------------------------------------------------------------------------

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    showSearchResultUI(dummySearchData);
    suggestionsContainer.style.display = "none";
  }
});

searchBtn.addEventListener("click", function () {
  if (input.value == "") {
    root.innerHTML = `
    <p>Nothing to search</p>
    `;
  } else {
    showSearchResultUI(dummySearchData);
    suggestionsContainer.style.display = "none";
  }
});

//-----------------------------------------------------------------------------------------------

const menuBar = document.querySelector(".fa-bars");
const detailedSidebar = document.querySelector(".detailed-sidebar");
const preciseSidebar = document.querySelector(".precise-sidebar");
menuBar.addEventListener("click", () => {
  if (detailedSidebar.style.display != "none") {
    detailedSidebar.style.display = "none";
    console.log("showing detailed sidebar");
  } else {
    detailedSidebar.style.display = "block";
  }
});

//--------------------------------------------------------------------------------
