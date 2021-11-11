let searchInput = document.getElementById("searchInput");

async function getMovieById(id, options) {
  try {
    return await fetch(BASIC_API, `/movies/movie/${id}`, options)
      .then((res) => res.json())
      .then((res) => console.log(res));
  } catch (err) {
    return err;
  }
}

let selectsOption = document.getElementById("selectsOption");
selectsOption.onchange = () => {
  switch (selectsOption.value) {
    case "search by name":
      return searchByName();
    case "search by id":
      return searchById();
    case "tree":
      return console.log("tree");
    default:
      break;
  }
};
let sectionOf_ArticleStatic = document.getElementById(
  "sectionOf_ArticleStatic"
);
function searchByName() {
  let input, filter;
  input = searchInput;
  filter = input.value;
  getData(BASIC_API, `/movies/movie/searchByName/${filter}`).then(
    (response) => {
      sectionOf_ArticleStatic.innerHTML = "";
      for (const movie of response.data) {
        console.log(movie);
        sectionOf_ArticleStatic.innerHTML += `
    <article class="articleStatic"><img class="imgHomePage" src="${movie.image}" alt=""></article>
   `;
      }
    }
  );
}
function searchById() {
  let input, filter;
  input = searchInput.value;
  filter = input.value;
  getData(BASIC_API, `/movies/movie/${input}`).then((response) => {
    console.log(response.data);
    sectionOf_ArticleStatic.innerHTML = "";

    sectionOf_ArticleStatic.innerHTML += `
        <article class="articleStatic"><img class="imgHomePage" src="${response.data.image}" alt=""></article>
       `;
  });
}
