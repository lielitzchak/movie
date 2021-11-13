let selectsOption = document.getElementById("selectsOption");
getData(BASIC_API, "/movies/all")
  .then((response) => {
    for (const movie of response.data) {
      sectionOf_ArticleStatic.innerHTML += `
      <article class="articleStatic">
          <a href="${movie.linkToMovie}">
            <img class="imgHomePage" src="${movie.image}" alt="">
            <p>${movie.movieName}</p>
          </a>
      </article>
      `;
    }
  })
  .catch((response) => {
    console.log(response);
  });

selectsOption.onchange = () => {
  let searchInput = document.getElementById("searchInput");
  switch (selectsOption.value) {
    case "search by name":
      return searchByName(searchInput.value);
    case "search by id":
      return searchById(searchInput.value);
    default:
      break;
  }
};

let sectionOf_ArticleStatic = document.getElementById(
  "sectionOf_ArticleStatic"
);
async function searchByName(nameOfMOvie) {
  try {
    loadingIMg();
    return await getData(BASIC_API, `/movies/movie/searchByName/${nameOfMOvie}`)
      .then((response) => {
        console.log(response.data);
        for (const movie of response.data) {
          sectionOf_ArticleStatic.innerHTML += `
          <article class="articleStatic">
              <a href="${movie.linkToMovie}">
                <img class="imgHomePage" src="${movie.image}" alt="">
                <p>${movie.movieName}</p>
              </a>
          </article>
          `;
        }
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        stopLoadingImg();
      });
  } catch (error) {
    console.log(error);
  }
  console.log(nameOfMOvie);
}

async function searchById(id) {
  try {
    loadingIMg();
    return await getData(BASIC_API, `/movies/movie/${id}`)
      .then((response) => {
        console.log(response.data);
        sectionOf_ArticleStatic.innerHTML = `
          <article class="articleStatic">
              <a href="${response.data.linkToMovie}">
                <img class="imgHomePage" src="${response.data.image}" alt="">
                <p>${response.data.movieName}</p>
              </a>
          </article>
          `;
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        stopLoadingImg();
      });
  } catch (error) {
    console.log(error);
  }
  console.log(id);
}
