let sectionToMoviesCart = document.getElementById("sectionToMoviesCart");
let select = document.getElementById("select");
let searchBtn = document.getElementById("searchBtn");
let sortBy = document.getElementById("sortBy");
function showInWindow(resolve) {
  sectionToMoviesCart.innerHTML += "";
  for (const movie of resolve.data) {
    sectionToMoviesCart.innerHTML += `
    <article class="moviesCart">
      <a href="../html/dataId.html?id=${movie._id}">
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
              <button id="${movie._id}" class="showDetails">see all details</button>
          </div>
        </section>
      </a>
    </article>
`;
  }
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
        // console.log(response.data);
        response.data.sort((a, b) => {
          return b.rating - a.rating;
        });
      });
      console.log("sort by top rating");
      return;
    case "sort by name":
      getData(BASIC_API, allMovie).then((response) => {
        response.data.sort((a, b) => {
          if (a.movieName < b.movieName) return -1;
        });
      });
      console.log("sort by name");
      return;
    case "sort by date":
      return console.log("sort by date");
  }
}
//! text