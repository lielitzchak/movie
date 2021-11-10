let tbnAddMovie = document.getElementById("tbnAddMovie");
let tbnDeleteMovie = document.getElementById("tbnDeleteMovie");
let btnUpdateMovie = document.getElementById("btnUpdateMovie");
let saveMovie = "/movies/saveMovie";
class Movie {
  movieName;
  image;
  synopsis;
  linkToMovie;
  rating;
  constructor(movieName, image, synopsis, linkToMovie, rating) {
    this.movieName = movieName;
    this.image = image;
    this.synopsis = synopsis;
    this.linkToMovie = linkToMovie;
    this.rating = rating;
  }
}
//! add movie

tbnAddMovie.onclick = (e) => {
  e.preventDefault();
  let nameInput = document.getElementById("movieName").value;
  console.log(nameInput);
  let inpInput = document.getElementById("movieImg").value;
  let imageInput = document.getElementById("movieSynopsis").value;
  let linkInp = document.getElementById("linkToMovie").value;
  let ratingInp = document.getElementById("movieRating").value;
  let newMovie = new Movie(nameInput, inpInput, imageInput, linkInp, ratingInp);
  console.log(newMovie);
  const option = {
    method: "post",
    body: JSON.stringify(newMovie),
    headers: { "Content-Type": "application/json" },
  };
  console.log(option.body);
  getData(BASIC_API, "/movies/saveMovie", option)
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej));
};

//! // work/// delete movie
tbnDeleteMovie.addEventListener("click", deleteWithId);

function deleteWithId(e) {
  e.preventDefault();
  let __id = document.getElementById("_id").value;
  console.log(__id);
  const option = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  getData(BASIC_API, `/movies/movie/${__id}`, option)
    .then((res) => {
      console.log(res);
    })
    .catch((rej) => {
      console.log(rej);
    });
}