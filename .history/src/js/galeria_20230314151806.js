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
    <source srcset="build/img/${i}.avif" type="image/avif">
    <source srcset="build/img/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/${i}.jpg" alt="imagen vocalista">
    `;
    console.log(imagen);
  }
}
