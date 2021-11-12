let idMovie = "/movies/movie/";
let currentId = location.search.substr(4);
getData(BASIC_API, `/movies/movie/${currentId}`).then((movie) => {
  main.innerHTML = `
  <article class="singleMovie">
    <section class="singleImg">
      <div class="img-inner">
          <div class="styleToImg">
            <img class="imgTabs" src="${movie.data.image}" alt="">  
          </div>
      </div>
    </section>
    <section class="text-container">
          <h3>${movie.data.movieName}</h3>
        <div>
        <p><a href="${movie.data.linkToMovie}"><b> link To see the Movie</b></a></p> 
        <p><b>synopsis:</b> ${movie.data.synopsis}</p> 
        <p><b>rating:</b> ${movie.data.rating}</p> 
        <button id="${movie.data._id}" class="showDetailsId"> <a href="../html/tabs.html">back to all movies</a></button>
      </div>
    </section>
  </article>`;
});
