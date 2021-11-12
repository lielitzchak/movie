let table = document.getElementById("teble");
getData(BASIC_API, allMovie)
  .then((res) => {
    console.log(res);
    showAllMovie(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
function showAllMovie(response) {
  console.log(response.data);
  for (let movie of response.data) {
    table.innerHTML += `
    <tr>
      <td>${movie._id}</td>
      <td>${movie.movieName}</td>
      <td><img class="imgTable" src="${movie.image}" alt=""></td>
      <td>${movie.synopsis}</td>
      <td><button><a href="${movie.linkToMovie}">see more details</a></button></td>
      <td>${movie.rating}</td>
      <td>${movie.date}</td>
    </tr>`;
  }
}

