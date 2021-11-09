let sectionToMoviesCart = document.getElementById("sectionToMoviesCart");
function showAllTabs() {
  movieFromApi(BASIC_API, allMovie).then((resolve) => {
    console.log(resolve.data);
    for (const movie of resolve.data) {
      sectionToMoviesCart.innerHTML += `
    <article class="moviesCart">
      <a href="${movie._id}">
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
    <section class="popUp"></section>
`;
    }
  });
}
showAllTabs();
let showDetails = document.getElementById("showDetails");
