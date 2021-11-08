let btnFormMovie = document.getElementById("btnFormMovie");
let saveMovie = "/movies/saveMovie";
btnFormMovie.onclick = (e) => {
  e.preventDefault();
  //   ! dont forget its a value !!!
  let movieName = document.getElementById("movieName");
  let movieImg = document.getElementById("movieImg");
  let movieSynopsis = document.getElementById("movieSynopsis");
  let movieLinkTo = document.getElementById("movieLinkTo"); //!
  let movieRating = document.getElementById("movieRating");
  const option = {
    method: "POST",
    body: JSON.parse({
      movieName: movieName.value,
      rating: movieRating.value,
      image: movieImg.value,
      synopsis: movieSynopsis.value,
    }),
  };
  movieFromApi(BASIC_API, saveMovie, option)
    .then((res) => {
      return console.log(res);
    })
    .catch((res) => {
      return console.log(res);
    });
};
