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
// !let x = {
//   _id: "6187dfcd4eec870016e667fa",
//   movieName: "avatar",
//   rating: 4,
//   image: "https://wallpapercave.com/wp/wp6542877.jpg",
//   synopsis: "avatar is blue",
//   date: "2021-11-07T14:16:45.900Z",
//   _v: 0,
// };
