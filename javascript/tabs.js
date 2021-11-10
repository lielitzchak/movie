let sectionToMoviesCart = document.getElementById("sectionToMoviesCart");
let select = document.getElementById("select");
let searchBtn = document.getElementById("searchBtn");
let sortBy = document.getElementById("sortBy");

sortBy.oninput = () => {
  addOption();
};
function addOption() {
  switch (select.value) {
    case "sort by top rating":
      listOfMovies.sort((a, b) => {
        return b.rating - a.rating;
      }),
        aaa(listOfMovies);
      console.log("sort by top rating");
      return;

    case "sort by name":
      listOfMovies.sort((a, b) => {
        if (a.movieName < b.movieName) return -1;
      });
      console.log(listOfMovies);
      console.log("sort by name");
      aaa(listOfMovies);
      return;
    case "sort by date":
      return console.log("sort by date");
  }

  return;
}

getData(BASIC_API, allMovie).then((resolve) => {
  sectionToMoviesCart.innerHTML = "";
  for (const movie of resolve.data) {
    sectionToMoviesCart.innerHTML += `
    <article class="moviesCart">
      <a href="../html/dataId.html?id=${movie._id}">
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
              <button id="${movie._id}" class="showDetails">see all details</button>
          </div>
        </section>
      </a>
    </article>
`;
  }
});
//! /////////////////////////////////////////////////////////
//! /////////////////////////////////////////////////////////
//! /////////////////////////////////////////////////////////
//! /////////////////////////////////////////////////////////
//! /////////////////////////////////////////////////////////
//! /////////////////////////////////////////////////////////

// function showAllTabs() {
//   getData(BASIC_API, allMovie).then((resolve) => {
//     for (const movie of resolve.data) {
//       sectionToMoviesCart.innerHTML += `
//     <article class="moviesCart">
//       <a href="../html/dataId.html?id=${movie._id}">
//         <section class="img-container">
//           <div class="img-inner">
//               <div class="inner-skew">
//                 <img class="imgTabs" src="${movie.image}" alt="">
//               </div>
//           </div>
//         </section>
//         <section class="text-container">
//               <h3>${movie.movieName}</h3>
//             <div>
//               <p>${movie.rating}</p>
//               <button id="${movie._id}" class="showDetails">see all details</button>
//           </div>
//         </section>
//       </a>
//     </article>
// `;
//     }
//   });
// }

// showAllTabs();
// let span = document.getElementsByClassName("close")[0];
// let showDetails = document.getElementById("showDetails");
// function showPopUp() {}
