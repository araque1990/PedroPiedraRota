const { src, dest, watch, parallel } = require("gulp");

// Dependencias de CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

//Dependencias de Imagenes
const cache = require('gulp-cache');
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

function css(callback) {
  src("src/scss/**/*.scss")
  .pipe(plumber())
    .pipe(sass())
    .pipe(dest('build/css'))

  callback();
}

function imagenes(callback) {
  const opciones = {
    optimizationLevel: 3
  }
  src('src/img/**/*.{png,jpg}')
  .pipe(cache(imagemin(opciones)))
  .pipe('build/img')
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

function dev(callback) {
  watch("src/scss/**/*.scss", css);
  callback();
}

exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.dev = parallel(imagenes,versionWebp, dev);