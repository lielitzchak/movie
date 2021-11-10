let idMovie = "/movies/movie/";
// let main = document.getElementById("main");
let currentId = location.search.substr(4);
// const listOfMovies = [
//   {
//     _id: "1",
//     movieName: "Movie 1",
//     rating: "5",
//     synopsis: "something",
//     image: "",
//   },
//   {
//     _id: "2",
//     movieName: "Movie 2",
//     rating: "5",
//     synopsis: "something",
//     image: "",
//   },
//   {
//     _id: "3",
//     movieName: "Movie 3",
//     rating: "5",
//     synopsis: "something",
//     image: "",
//   },
//   {
//     _id: "4",
//     movieName: "Movie 4",
//     rating: "5",
//     synopsis: "something",
//     image: "",
//   },
//   {
//     _id: "5",
//     movieName: "Movie 5",
//     rating: "5",
//     synopsis: "something",
//     image: "",
//   },
//   {
//     _id: "6",
//     movieName: "Movie 6",
//     rating: "5",
//     synopsis: "something",
//     image: "",
//   },
//   {
//     _id: "7",
//     movieName: "Movie 7",
//     rating: "5",
//     synopsis: "something",
//     image: "",
//   },
// ];

async function apiFunction(goTo, id) {
  try {
    return await fetch(getData(BASIC_API, `${goTo}${id}`));
    // return { data: listOfMovies.find((m) => m._id === id) };
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
