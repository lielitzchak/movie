let searchInput = document.getElementById("searchInput");
let selectsOption = document.getElementById("selectsOption");

async function getMovieById(id, options) {
  try {
    loadingIMg();
    return await fetch(BASIC_API, `/movies/movie/${id}`, options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .finally(() => {
        stopLoadingImg();
      });
  } catch (err) {
    return err;
  }
}

selectsOption.onchange = () => {
  switch (selectsOption.value) {
    case "search by name":
      return searchByName();
    case "search by id":
      return searchById();
    case "search by date":
      return searchByDate();
    default:
      break;
  }
};

let sectionOf_ArticleStatic = document.getElementById(
  "sectionOf_ArticleStatic"
);
function searchByName() {
  console.log("name");
  getData(BASIC_API, `/movies/movie/searchByName/${searchInput.value}`)
    .then((response) => {
      console.log(response);
    })
    .then((response) => {
      sectionOf_ArticleStatic.innerHTML = "";
      for (const movie of response.data) {
        console.log(movie);
        sectionOf_ArticleStatic.innerHTML += `
        <article class="articleStatic">
          <img class="imgHomePage" src="${movie.image}" alt="">
        </article>
   `;
      }
    });
}
function searchById() {
  console.log("search by id ");
  // let input, filter;
  // input = searchInput.value;
  // filter = input.value;
  // getData(BASIC_API, `/movies/movie/${input}`).then((response) => {
  //   console.log(response.data);
  //   sectionOf_ArticleStatic.innerHTML = "";

  //   sectionOf_ArticleStatic.innerHTML += `
  //       <article class="articleStatic"><img class="imgHomePage" src="${response.data.image}" alt=""></article>
  //      `;
  // });
}
function searchByDate() {
  console.log("search by date ");
}
