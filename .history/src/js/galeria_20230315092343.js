document.addEventListener("DOMContentLoaded", function () {
  iniciarGaleria();
});

function iniciarGaleria() {
  crearGaleria();
}

function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement("picture");
    imagen.innerHTML = `
    <source srcset="../img/thumb${i}.avif" type="image/avif">
    <source srcset="../img/thumb${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="../img/thumb${i}.jpg" alt="imagen galeria">
    `;
    galeria.appendChild(imagen);
  }
}

