function iniciarGaleria(){crearGaleria(),scrollNav()}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView()}))})}function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival"),n=document.querySelectorAll("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),n.classList.add("body-scroll")):(e.classList.remove("fijo"),n.classList.remove("body-scroll"))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("picture");n.innerHTML=`\n    <source srcset="build/img/thumb/${t}.avif" type="image/avif">\n    <source srcset="build/img/thumb/${t}.webp" type="image/webp">\n    <img loading="lazy" width="200" height="300" src="build/img/thumb/${t}.jpg" alt="imagen galeria">\n    `,n.onclick=function(){mostrarImagen(t)},e.appendChild(n)}}function mostrarImagen(e){const t=document.createElement("picture");t.innerHTML=`\n    <source srcset="build/img/grande/${e}.avif" type="image/avif">\n    <source srcset="build/img/grande/${e}.webp" type="image/webp">\n    <img loading="lazy" width="200" height="300" src="build/img/grande/${e}.jpg" alt="imagen galeria">\n    `;const n=document.createElement("div");n.appendChild(t),n.classList.add("overlay"),n.onclick=function(){document.querySelector("body")};const i=document.createElement("p");i.textContent="X",i.classList.add("boton-cerrar"),i.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),n.remove()},n.appendChild(i);const c=document.querySelector("body");c.appendChild(n),c.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarGaleria()}));
//# sourceMappingURL=app.js.map
