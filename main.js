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

function showLoading() {
  showAll.innerHTML = `<img id="imgLoading" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Loader.gif/480px-Loader.gif"/>`;
}
function hideLoading() {
  imgLoading.style.display = "none";
}
btn.onclick = () => {
  showAll.innerHTML = "";
  getApi(`${url}search/anime?q=${inp.value}`).then((res) => {
    for (let movie of res.results) {
      showAll.innerHTML += `
            <section class="allMovies">
            <article class="single_movie">
            <a href=" ${movie.url}">
            <img class="imgPhotos" src="${movie.image_url}" alt=""></a>
            <h2>${movie.title}</h2>
            <P class="all_text1"><b>synopsis:</b> ${movie.synopsis}</p> <br>
            <p class="all_text2"><b>type:</b>${movie.type}</p> <br>
            <p class="all_text3"><b>episodes</b>${movie.episodes}</p> <br>
            </article>
            </section>`;
    }
  });
};


function jh(){
    
}