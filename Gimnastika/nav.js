const siteNav = document.getElementById("site-nav");

if (siteNav) {
  const currentPage = decodeURIComponent(location.pathname.split("/").pop()) || "Mnenine Gimanstika.html";

  siteNav.innerHTML = `
    <nav>
      <a href="Mnenine Gimanstika.html" data-page="Mnenine Gimanstika.html"><b>Pagrindinis</b></a>

      <div class="dropdown">
        <a href="Grupes.html" data-page="Grupes.html">Grupės</a>
        <div class="dropdown-content">
          <a href="MegejuGrupe.html" data-page="MegejuGrupe.html">7-12 metų grupė</a>
          <a href="MazyliuGrupe.html" data-page="MazyliuGrupe.html">3-6 metų grupė</a>
          <a href="Pazengusiuju.html" data-page="Pazengusiuju.html">Pažengusiųjų grupė</a>
        </div>
      </div>

      <div class="dropdown">
        <a href="Renginiai.html" data-page="Renginiai.html">Renginiai</a>
        <div class="dropdown-content">
          <a href="Kaledos.html" data-page="Kaledos.html">Kalėdos</a>
          <a href="Helovinas.html" data-page="Helovinas.html">Helovinas</a>
          <a href="SezonoUzdarymas.html" data-page="SezonoUzdarymas.html">Sezono uždarymas</a>
        </div>
      </div>

      <div class="dropdown">
        <a href="Renginiai.html#stovyklos">Stovyklos</a>
        <div class="dropdown-content">
          <a href="Stovykla2026.html" data-page="Stovykla2026.html">2026</a>
          <a href="Stovykla.html" data-page="Stovykla.html">2025</a>
        </div>
      </div>

      <a href="Kontaktai.html" data-page="Kontaktai.html">Kontaktai</a>
    </nav>
  `;

  document.querySelectorAll("nav a[data-page]").forEach(link => {
    if (link.dataset.page === currentPage) link.classList.add("active");
  });
}

function closeAd() {
  const adOverlay = document.getElementById("adOverlay");
  if (adOverlay) adOverlay.style.display = "none";
}

window.closeAd = closeAd;

const adOverlay = document.getElementById("adOverlay");
if (adOverlay) {
  setTimeout(() => {
    adOverlay.style.display = "flex";
  }, 1500);
}
