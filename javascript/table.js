let table = document.getElementById("teble");
movieFromApi(BASIC_API, allMovie)
  .then((res) => {
    return showAllMovie(res.data);
  })
  .catch((rej) => {
    return rej;
  });

function showAllMovie(response) {
  for (let movie of response) {
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
