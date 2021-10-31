const url = "https://api.jikan.moe/v3/";
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
const showAll = document.getElementById("showAll");
async function getApi(api) {
  try {
    showLoading();
    return await fetch(api).then((res) => {
      return res.json();
    });
  } catch (error) {
    return error;
  } finally {
    hideLoading();
  }
}
function errorFunction() {
  showAll.innerHTML = `<img src="./png-transparent-fate-grand-order-fate-stay-night-http-404-server-404-error-purple-violet-text-removebg-preview.png">`;
}
function showLoading() {
  showAll.innerHTML = `<img id="imgLoading" src="https://i.pinimg.com/originals/75/8f/1c/758f1cd8cede9c3e4711306fc030f4ce.gif"/>`;
}
function hideLoading() {
  imgLoading.style.display = "none";
}

btn.onclick = () => {
  showAll.innerHTML = "";
  getApi(`${url}search/anime?q=${inp.value}`).then((res) => {
    if (res.results.length == []) {
      return errorFunction();
    }
    if (res.type == "Unknown") {
      return "not good";
    }
    if (inp.value.length < 3) {
      showAll.innerHTML = "<h1>to short</h1>";
    }
    for (let movie of res.results) {
      showAll.innerHTML += `
          <section class="allMovies">
          <article class="single_movie">
          <a href=" ${movie.url}">
          <img class="imgPhotos" src="${movie.image_url}" alt=""></a>
          <h2>${movie.title}</h2>
          <h2><b>episodes:</b>${movie.episodes}</h2>
          <P class="all_text1"><b>synopsis:</b> ${movie.synopsis}</p> <br>
          <p class="all_text2"><b>type:</b>${movie.type}</p> <br>
          <p class="all_text3"><b>episodes</b>${movie.episodes}</p> <br>
          </article>
          </section>`;
    }
  });
};
// function fesfs() {
//   type = {
//     TV,
//     ONA,
//     Music,
//     Special,
//     Movie,
//     OVA,
//   };
// }
let animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");
  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (let i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
