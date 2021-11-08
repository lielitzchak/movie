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

// console.log(`${BASIC_API}${allMovie}`);
// let x = {
//   _id: "6182d48e7df14206307896b8",
//   movieName: "Harry Potter",
//   linkToMovie: "String",
//   synopsis: "String hhhhhh",
//   image: "https://wallpaperaccess.com/full/3421252.jpg",
//   rating: 3,
//   date: "2021-11-03T18:27:26.573Z",
//   __v: 0,
// };
