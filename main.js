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
  for (let i = 0; i < 800; i++) {
    console.log(response[i]._embedded.show.name);
    toShow.innerHTML += `
            <section class="sectionMovie">
                <img class="allImg" src="${response[i]._embedded.show.image.original}" >
                  <article class="details toHover">
                        <h2 class="toAllCss">${response[i]._embedded.show.name}</h2>  
                        <br>
                        <h4 class="toAllCss"><b>language:</b>${response[i]._embedded.show.language}</h4>
                        <br>
                        <p class="toAllCss">${response[i]._embedded.show.status}</p>
                        <p class="toAllCss">${response[i]._embedded.show.type}</p>
                        <button class="seeMovieBtn"><a href="${response[i]._embedded.show.url}">see movie<i class="far fa-eye"></i></a></button>
                  </article>
            </section>
    `;
  }
});

//! genres: (3) ['Action', 'Anime', 'Horror']
//! image: {medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/362/906901.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/362/906901.jpg'}
//! language: "Japanese"
//! officialSite: "http://www.hitorinoshita.com/";
//! summary: "<p>One day, Zhang Chulan is attacked by zombies in a graveyard. In the midst
// of that situation, he saves the life of a girl, throwing the kitchen knife in his hand in
//  order to kill the enemies. The girl tells Chulan, who is relieved, to face his hardships
// head on and leaves. However, Chulan later sees that girl again at his university. From
// that moment, Zhang Chulan's destiny begins to move. There will be strangers with special
//  powers appearing one by one, with battles involving those abilities. Each episode will
// bring a new mystery to light.</p><p>(Source: MAL News)</p>";
//! url: "https://www.tvmaze.com/shows/18314/hitori-no-shita-the-outcast";

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
