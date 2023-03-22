const { src, dest, watch, parallel} = require("gulp");

// Dependencias de CSS
const sass = require("gulp-sass")(require("sass")); // permite dar mas potencia y funcionalidad a css, ademas de compilar todo el codigo css en un solo archivo
const plumber = require("gulp-plumber"); // ejecuta codigo linea a linea con .pipe
const autoprefixer = require("autoprefixer"); // ayuda a dar soporte a navegadores que no soporten algunas caracteristicas de css
const cssnano = require("cssnano"); // comprime el codigo css
const postcss = require("gulp-postcss"); // realiza algunas transformaciones al codigo por medio de cssnano y autoprefixer
const sourcemap = require("gulp-sourcemaps"); // me ayuda a ubicar el archivo scss cuando quiero hacer alguna modificación visible en el navegador que es quien lo entiende

// Dependencias de Imagenes
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

// Dependencias de JavaScript
const terser = require("gulp-terser-js");


function css(callback) {
  src("src/scss/**/*.scss")
  .pipe(sourcemap.init())
  .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemap.write("."))
    .pipe(dest('build/css'))

  callback();
}

function imagenes(callback) {
  const opciones = {
    optimizationLevel: 3
  };
  src('src/img/**/*.{png,jpg}')
  .pipe(cache(imagemin(opciones)))
  .pipe(dest('build/img'))
  callback();
}


function versionWebp(callback) {
  const opciones = {
    quality: 50
  };
  src('src/img/**/*.{png,jpg}')
  .pipe(webp(opciones))
  .pipe(dest('build/img'))
  callback();
}

function versionAvif(callback) {
  const opciones = {
    quality: 50
  };
  src('src/img/**/*.{png,jpg}')
  .pipe(avif(opciones))
  .pipe(dest('build/img'))
  callback();
}

function javascript(callback) {
  src('src/js/**/*.js')
  .pipe(sourcemap.init())
  .pipe(terser())
  .pipe(sourcemap.write("."))
  .pipe(dest('build/js'));
  
  callback();
}

function video(callback) {
  src("src/video/**/*.{mp4,ogg,webm}")
  .pipe(dest("build/video"));
  
  callback();
}

function svg(callback) {
  src("src/img/**/*.svg")
  .pipe(dest("build/img"));
  
  callback();
}

function audio(callback) {
  src("src/audio/**/*.{mp3,ogg}")
  .pipe(dest("build/audio"));
  
  callback();
}

function dev(callback) {
  watch("src/scss/**/*.scss", css);
  watch("src/js/**/*.js", javascript);
  watch("src/video/**/*.{mp4,ogg,webm}", video);
  watch("src/audio/**/*.{mp3,ogg}", audio);
  callback();
}

exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes,svg,versionWebp,versionAvif,javascript,video,audio,dev);