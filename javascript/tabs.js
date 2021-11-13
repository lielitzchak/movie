let sectionToMoviesCart = document.getElementById("sectionToMoviesCart");
let select = document.getElementById("select");
let searchBtn = document.getElementById("searchBtn");
let sortBy = document.getElementById("sortBy");
function showInWindow(resolve) {
  sectionToMoviesCart.innerHTML += "";
  for (const movie of resolve.data) {
    sectionToMoviesCart.innerHTML += `
    <article class="moviesCart">
        <section class="img-container">
          <div class="img-inner">
              <div class="inner-skew">
                <img class="imgTabs" src="${movie.image}" alt="">  
              </div>
          </div>
        </section>
        <section class="text-container">
              <h3>${movie.movieName}</h3>
            <div>
              <p>${movie.rating}</p> 
              <button id="${movie._id}" class="showDetails">
              <a href="../html/dataId.html?id=${movie._id}">see all details </a></button>
              <button onclick="deleteMovieById('${movie._id}')" class="id_movie">
              delete this movie
              </button>
          </div>
        </section>
    </article>
`;
  }
}
function deleteMovieById(id) {
  console.log(id);
  confirm("are you sure you want to delete? ");
  let options = {
    method: `DELETE`,
  };
  getData(BASIC_API, `/movies/movie/${id}`, options)
    .then((res) => console.log(res))
    .then(alert("movie was deleted"));
  if (alert) {
    location.reload();
  }
  return;
}

getData(BASIC_API, allMovie).then((resolve) => {
  showInWindow(resolve);
});

sortBy.oninput = () => {
  addOption();
};

function addOption() {
  switch (select.value) {
    case "sort by top rating":
      getData(BASIC_API, allMovie).then((response) => {
        let sortMovie = response.data.sort((a, b) => {
          return b.rating - a.rating;
        });
        printItems(sortMovie);
      });
      return;
    case "sort by name":
      // getData(BASIC_API, allMovie).then((response) => {
      //   let sortMovie = response.data.sort((a, b) => {
      //     return a.movieName - b.movieName;
      //   });
      //   printItems(sortMovie);
      // });
      console.log("sort by name");
    // return;
    case "sort by date":
      getData(BASIC_API, allMovie).then((response) => {
        let sortMovie = response.data.sort((a, b) => {
          return b.date - a.date;
        });
        console.log(sortMovie);
        printItems(sortMovie);
      });
      return;
  }
}

function printItems(sort) {
  sectionToMoviesCart.innerHTML = "";
  for (const movie of sort) {
    sectionToMoviesCart.innerHTML += `
    <article class="moviesCart">
        <section class="img-container">
          <div class="img-inner">
              <div class="inner-skew">
                <img class="imgTabs" src="${movie.image}" alt="">  
              </div>
          </div>
        </section>
        <section class="text-container">
              <h3>${movie.movieName}</h3>
            <div>
              <p>${movie.rating}</p> 
              <button id="${movie._id}" class="showDetails">
              <a href="../html/dataId.html?id=${movie._id}">see all details </a></button>
              <button onclick="deleteMovieById('${movie._id}')" class="id_movie">
              delete this movie
              </button>
          </div>
        </section>
    </article>
`;
  }
}

// test
