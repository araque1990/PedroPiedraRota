document.addEventListener('DOMContentLoaded', function(){
  iniciarGaleria();
});

function iniciarGaleria() {
  crearGaleria();
}

function crearGaleria() {
  const galeria = document.querySelector('.galeria-imagenes');

  for(let i = 1; i <=12; i++) {
    console.log(i);
  }
}