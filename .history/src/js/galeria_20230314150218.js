document.addEventListener('DOMContentLoaded', function(){
  iniciarGaleria();
});

function iniciarGaleria() {
  crearGaleria();
}

function crearGaleria() {
  const galeria = document.querySelector('.galeria-imagenes');

  for(let i = 1; i <=12; i++) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
    <picture>
      <source srcset="build/img/imagen_vocalista.avif" type="image/avif">
      <source srcset="build/img/imagen_vocalista.webp" type="image/webp">
      <img loading="lazy" width="200" height="300" src="build/img/imagen_vocalista.jpg" alt="imagen vocalista">
    </picture
    `
    console.log(imagen);
  }
}