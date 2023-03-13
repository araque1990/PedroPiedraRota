const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(callback) {
  src("src/scss/app.scss")
    .pipe(sass())
    .pipe(dest('build/css'));

  callback();
}

exports.css = css;