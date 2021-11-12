let sectionToMoviesCart = document.getElementById("sectionToMoviesCart");
let select = document.getElementById("select");
let searchBtn = document.getElementById("searchBtn");
let sortBy = document.getElementById("sortBy");
function showInWindow(resolve) {
  sectionToMoviesCart.innerHTML += "";
  for (const movie of resolve.data) {
    sectionToMoviesCart.innerHTML += `
    <article class="moviesCart">
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
              <button id="${movie._id}" class="showDetails">
              <a href="../html/dataId.html?id=${movie._id}">see all details </a></button>
              <button onclick="deleteMovie('${movie._id}')" class="id_movie">
              delete this movie
              </button>
          </div>
        </section>
    </article>
`;
  }
}
function deleteMovie(id) {
  console.log(id);
  confirm("are you sure you want to delete? ");
  let options = {
    method: `DELETE`,
  };
  getData(BASIC_API, `/movies/movie/${id}`, options)
    .then((res) => console.log(res))
    .then(alert("movie was deleted"));
  if (alert) {
    location.reload();
  }
}

getData(BASIC_API, allMovie).then((resolve) => {
  showInWindow(resolve);
});
// let delete_ = document.getElementsByClassName("id");
// console.log(delete_);

// exit.addEventListener("click", () => {
//   boxBackground.style.display = "none";
//   inBox.innerHTML = "";
// });

sortBy.oninput = () => {
  addOption();
};

function addOption() {
  switch (select.value) {
    case "sort by top rating":
      // console.log("sort by top rating");
      getData(BASIC_API, allMovie).then((response) => {
        // console.log(response.data);
        let sortMovie = response.data.sort((a, b) => {
          return b.rating - a.rating;
        });
        showInWindow(sortMovie);
        console.log(sortMovie);
      });
      return;
    case "sort by name":
      // getData(BASIC_API, allMovie).then((response) => {
      //   response.data.sort((a, b) => {
      //     if (a.movieName < b.movieName) return -1;
      //   });
      // });
      console.log("sort by name");
      return;
    case "sort by date":
      return console.log("sort by date");
  }
}
// function deleteMovie(id) {
//   confirm("are you sure you want to delete ");
//   let options = {
//     method: `DELETE`,
//   };
//   getApi(`https://moviesmern.herokuapp.com/movies/movie/${id}`, options)
//     .then((res) => console.log(res))
//     .then(alert("movie was deleted"));
//   if (alert) {
//     location.reload();
//   }
// }

// exit.addEventListener("click", () => {
//   boxBackground.style.display = "none";
//   inBox.innerHTML = "";
// });

// function deleteWithId(_id) {
//   const option = {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//   };
//   getData(BASIC_API, `/movies/movie/${_id}`, option)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((rej) => {
//       console.log(rej);
//     });
// }
