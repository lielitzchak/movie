let sectionToMoviesCart = document.getElementById("sectionToMoviesCart");
function showAllTabs() {
  movieFromApi(BASIC_API, allMovie).then((resolve) => {
    console.log(resolve.data);
    for (const movie of resolve.data) {
      sectionToMoviesCart.innerHTML += `
         <article class="moviesCart"> 
          <img class="imgTabs" src="${movie.image}" alt="">  
           <h1>${movie.movieName} </h1> 
           <p>${movie.rating} </p> 
         </article>
  `;
    }
  });
}
showAllTabs();

