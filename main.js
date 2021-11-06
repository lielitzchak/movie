const BASIC_API = "https://api.tvmaze.com";
let ALL_SHOW = "/schedule/full";
let toShow = document.getElementById("toShow");
let searchInp = document.getElementById("searchInp");
let searchBtn = document.getElementById("searchBtn");
const Show_single_search = "/search/shows?q=";
async function getApi(api, search, toLook) {
  try {
    return await fetch(`${api}${search}${toLook}`).then((response) => {
      return response.json();
    });
  } catch (error) {}
}
async function showAll() {
  try {
    return await fetch(`https://api.tvmaze.com/schedule/full`).then((res) => {
      return res.json();
    });
  } catch (error) {
    return error;
  }
}

showAll().then((response) => {
  if(response.length<50){
    console.log(response);
  }
  for (const key in response) {
    if (Object.hasOwnProperty.call(response, key)) {
      console.log(key);
    }
  }

});

searchBtn.onclick = () => {
  toShow.innerHTML = "";
  getApi(BASIC_API, Show_single_search, searchInp.value).then((res) => {
    for (let i = 0; i < res.length; i++) {
      console.log(i);
      toShow.innerHTML += `
              <section class="sectionMovie">
                  <img class="allImg" src="${res[i].show.image.original}" alt="">
                    <article class="details toHover">
                          <h2 class="toAllCss">${res[i].show.name}</h2>  
                          <br>
                          <h4 class="toAllCss"><b>language:</b>${res[i].show.language}</h4>
                          <br>
                          <p class="toAllCss">${res[i].show.status}</p>
                          <p class="toAllCss">${res[i].show.type}</p>
                          <button class="seeMovieBtn"><a href="${res[i].show.url}">see movie<i class="far fa-eye"></i></a></button>
                    </article>
              </section>
      `;
    }
  });
};
