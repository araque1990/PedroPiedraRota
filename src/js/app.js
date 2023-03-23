document.addEventListener("DOMContentLoaded", function () {
  iniciarGaleria();
});

function iniciarGaleria() {
  crearGaleria();
  crearCarteles();
}
function crearCarteles() {
  const galeria = document.querySelector(".galeria-carteles");

  for (let i = 1; i <= 9; i++) {
    const imagen = document.createElement("picture");
    imagen.innerHTML = `
    <source srcset="build/img/carteles/${i}.avif" type="image/avif">
    <source srcset="build/img/carteles/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/carteles/${i}.jpg" alt="imagen galeria">
    `;
    imagen.onclick = function () {
      mostrarCartel(i);
    }
    galeria.appendChild(imagen);
  }
}

function mostrarCartel(id) {
  const imagen = document.createElement("picture");
  imagen.innerHTML = `
    <source srcset="build/img/carteles/${id}.avif" type="image/avif">
    <source srcset="build/img/carteles/${id}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/carteles/${id}.jpg" alt="imagen galeria">
    `;

  // Crea el overlay con la imagen
  const overlay = document.createElement("div");
  overlay.appendChild(imagen);
  overlay.classList.add("overlay");
  overlay.onclick = function() {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();
  }

  //Añadirlo al HTML
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
}


//-------------------------------------------------------------
function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement("picture");
    imagen.innerHTML = `
    <source srcset="build/img/thumb/${i}.avif" type="image/avif">
    <source srcset="build/img/thumb/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
    `;
    imagen.onclick = function () {
      mostrarImagen(i);
    }
    galeria.appendChild(imagen);
  }
}

function mostrarImagen(id) {
  const imagen = document.createElement("picture");
  imagen.innerHTML = `
    <source srcset="build/img/grande/${id}.avif" type="image/avif">
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen galeria">
    `;

  // Crea el overlay con la imagen
  const overlay = document.createElement("div");
  overlay.appendChild(imagen);
  overlay.classList.add("overlay");
  overlay.onclick = function () {
    const body = document.querySelector("body");

  }

  // Boton para cerrar el Modal
  const cerrarModal = document.createElement("p");
  cerrarModal.textContent = "X";
  cerrarModal.classList.add("boton-cerrar");
  cerrarModal.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();
  }

  overlay.appendChild(cerrarModal);

  //Añadirlo al HTML
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
}