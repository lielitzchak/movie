const BASIC_API = "https://moviesmern.herokuapp.com";
let allMovie = "/movies/all";
let footer = document.getElementById("footer");
let divHeaderHomePage = document.getElementById("divHeaderHomePage");
function loadionImg() {
  `<img src="../media/video/daoling time gif.gif" alt="">`;
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
addHeader(divHeaderHomePage);

function showFooter() {
  footer.innerHTML += `
    <a class="linkToContent" href="https://did.li/Q5lTY"><img src="../media/photos/linkedin.png" alt="linkedin" class="imgsLogo"></a>
    <a class="linkToContent" href="https://did.li/WNarl"><img src="../media/photos/github.png"" alt="github" class="imgsLogo"></a>
    <a class="linkToContent" href="mailto:liel.izcha321@gmail.com"><img src="../media/photos/gmail.png" alt="gmail" class="imgsLogo"></a>
    <a class="linkToContent" href=""><img src="../media/photos/whatsapp.png" alt="whatsApp" class="imgsLogo"></a>
    `;
}
showFooter();

async function movieFromApi(api, goTo, option) {
  try {
    return await fetch(`${api}${goTo}`, option).then((res) => {
      return res.json();
    });
  } catch (error) {
    return error;
  }
}
