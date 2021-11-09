let table = document.getElementById("teble");
movieFromApi(BASIC_API, allMovie)
  .then((res) => {
    console.log(res);
    showAllMovie(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
function showAllMovie(response) {
  console.log(response);
  for (let movie of response.data) {
    table.innerHTML += `
    <tr>
      <td>${movie._id}</td>
      <td>${movie.movieName}</td>
      <td>${movie.image}</td>
      <td>${movie.synopsis}</td>
      <td>${movie.linkToMovie}</td>
      <td>${movie.rating}</td>
      <td>${movie.date}</td>
    </tr>`;
  }
}
