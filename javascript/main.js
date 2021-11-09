const BASIC_API = "https://moviesmern.herokuapp.com";
const allMovie = "/movies/all";
let footer = document.getElementById("footer");
let main = document.getElementById("main");
let divHeaderHomePage = document.getElementById("divHeaderHomePage");
function showErrorImg() {
  main.innerHTML = `<img id="errorImg500" src="../media/video/error 500.gif" alt="">`;
}

function getData(api, goTo, option) {
  return new Promise((resolve, reject) => {
    fetch(`${api}${goTo}`, option)
      .then((res) => res.json())
      .then((res) => {
        res ? resolve(res) : reject();
        // console.log(res);
      });
  });
}
async function movieFromApi(api, goTo, option) {
  try {
    return await getData(api, goTo, option);
  } catch {
    return showErrorImg();
  }
}
function loadionImg() {
  return `<img src="../media/video/daoling time gif.gif" alt="">`;
}
function stopLoadionImg() {}
function addHeader(div) {
  div.innerHTML += `
    <header>
      <section id="headers">
        <img class="imgHeaders"  src="../media/photos/techCareere.png" alt="tech careere logo" /><img class="imgHeaders"
          src="../media/photos/indicome.png"
          alt="indicom"
        />
      </section>
      <nav id="navbar">
        <ul>
          <li>
            <a href="/index.html"><ul>home page</ul></a>
            <a href="../html/tabs.html"><ul>Tabs</ul></a>
            <a href="../html/AddingMovie.html"><ul>Adding a movie</ul></a>
            <a href="../html/table.html"><ul>table</ul></a>
          </li>
        </ul>
      </nav>
    </header>`;
}
const IMG_HOME_PAGE = {
  movieName: "spider-man homecoming",
  rating: 7,
  image: "",
  synopsis: "avatar is blue",
  // date: "2021-11-07T14:16:45.900Z",
  __v: 0,
};
function showFooter(div) {
  div.innerHTML += `
    <section class="allLogos"> 
        <a class="linkToContent" href="https://did.li/Q5lTY"><img src="../media/photos/linkedin.png" alt="linkedin" class="imgsLogo"></a>
        <a class="linkToContent" href="https://did.li/WNarl"><img src="../media/photos/github.png"" alt="github" class="imgsLogo"></a>
        <a class="linkToContent" href="mailto:liel.izcha321@gmail.com"><img src="../media/photos/gmail.png" alt="gmail" class="imgsLogo"></a>
        <a class="linkToContent" href=""><img src="../media/photos/whatsapp.png" alt="whatsApp" class="imgsLogo"></a>
    </section>
    <section class="copyRight">  
      <img class="copyRightImg" src="../media/photos/copyright.png" alt="whatsApp">
      <p>liel itzchak</p>
    </section>
    
  
    `;
}
addHeader(divHeaderHomePage);

showFooter(footer);
