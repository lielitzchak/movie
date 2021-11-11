const BASIC_API = "https://moviesmern.herokuapp.com";
const allMovie = "/movies/all";
let footer = document.getElementById("footer");
let main = document.getElementById("main");
let divHeaderHomePage = document.getElementById("divHeaderHomePage");
function loadingIMg() {
  main.innerHTML = `<img id="loadingImgGif" src="https://icon-library.com/images/waiting-icon-gif/waiting-icon-gif-13.jpg" alt=""/>`;
}
function stopLoadingImg() {
  let loadingIMg = document.getElementById("loadingIMg");
  loadingIMg.style.display = "block";
}

function getData(api, goTo, option) {
  return new Promise((resolve, reject) => {
    fetch(`${api}${goTo}`, option)
      .then((res) => res.json())
      .then((res) => {
        res ? resolve(res) : reject(console.log("error"));
      });
  });
}

function addHeader(div) {
  div.innerHTML += `
    <header>
      <section id="headers">
        <img class="imgHeaders"  src="../madia/techCareere.png" alt="tech carrer logo" /><img class="imgHeaders"
          src="../madia/indicome.png"
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
function showFooter(div) {
  div.innerHTML += `
    <section class="allLogos"> 
        <a class="linkToContent" href="https://did.li/Q5lTY"><img src="../madia/linkedin.png" alt="linkedin" class="imgsLogo"></a>
        <a class="linkToContent" href="https://did.li/WNarl"><img src="../madia/github.png"" alt="github" class="imgsLogo"></a>
        <a class="linkToContent" href="mailto:liel.izcha321@gmail.com"><img src="../madia/gmail.png" alt="gmail" class="imgsLogo"></a>
        <a class="linkToContent" href=""><img src="../madia/whatsapp.png" alt="whatsApp" class="imgsLogo"></a>
    </section>
    <section class="copyRight">  
      <img class="copyRightImg" src="../madia/copyright.png" alt="whatsApp">
      <p>liel itzchak</p>
    </section>
    `;
}
addHeader(divHeaderHomePage);
showFooter(footer);
