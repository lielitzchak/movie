let tbnAddMovie = document.getElementById("tbnAddMovie");
let tbnDeleteMovie = document.getElementById("tbnDeleteMovie");
let btnUpdateMovie = document.getElementById("btnUpdateMovie");
class Movie {
  movieName;
  image;
  synopsis;
  linkToMovie;
  rating;
  constructor(_movieName, _image, _synopsis, _linkToMovie, _rating) {
    this.movieName = _movieName;
    this.image = _image;
    this.synopsis = _synopsis;
    this.linkToMovie = _linkToMovie;
    this.rating = _rating;
  }
}
tbnAddMovie.addEventListener("click", addNewMovie);
function addNewMovie(e) {
  e.preventDefault();
  let movieName = document.getElementById("movieName").value;
  let image = document.getElementById("movieImg").value;
  let synopsis = document.getElementById("movieSynopsis").value;
  let linkToMovie = document.getElementById("linkToMovie").value;
  let rating = document.getElementById("movieRating").value;
  let movie = new Movie(movieName, image, synopsis, linkToMovie, rating);
  console.log(movie);
  const option = {
    method: "POST",
    body: JSON.stringify({ movie }),
    headers: { "Content-Type": "application/json" },
  };

  getData(BASIC_API, `/movies/saveMovie`, option)
    .then((res) => {
      console.log(res);
    })
    .catch((rej) => {
      console.log(rej);
    });
}


btnUpdateMovie.addEventListener("click", updateMovie);
function updateMovie(e) {
  e.preventDefault();
  let _id = document.getElementById("_id").value;
  let movieName = document.getElementById("movieName").value;
  let impInput = document.getElementById("movieImg").value;
  let synopsisInput = document.getElementById("movieSynopsis").value;
  let linkInp = document.getElementById("linkToMovie").value;
  let ratingInp = document.getElementById("movieRating").value;
  let movie = new Movie(movieName, impInput, synopsisInput, linkInp, ratingInp);
  console.log(movie);
  const option = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ movie }),
  };
  getData(BASIC_API, `/movies/movie/${_id}`, option)
    .then((res) => {
      console.log(res);
    })
    .catch((rej) => {
      console.log(rej);
    });
}

tbnDeleteMovie.addEventListener("click", deleteWithId);
function deleteWithId(e) {
  e.preventDefault();
  let _id = document.getElementById("__id");
  const option = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  getData(BASIC_API, `/movies/movie/${_id.value}`, option)
    .then((res) => {
      console.log(res);
    })
    .catch((rej) => {
      console.log(rej);
    });
}
