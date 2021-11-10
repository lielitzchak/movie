let idMovie = "/movies/movie/";
let currentId = location.search.substr(4);

async function apiFunction(goTo, id) {
  try {
    return await fetch(getData(BASIC_API, `${goTo}${id}`));
  } catch (error) {
    return error;
  }
}

//! location its only for address
apiFunction(idMovie, currentId).then((movie) => {
  main.innerHTML = `
  <article class="singleMovie">
  <a href="../html/dataId.html?id=${movie.data._id}">
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
          <p>${movie.data.rating}</p> 
         <a href="../html/tabs.html"> <button id="${movie.data._id}" class="showDetailsId">back to all movies</button></a>
      </div>
    </section>
  </a>
</article>`;
});
//! text
