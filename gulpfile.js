const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
  //Compliar SASS
  // Pasos:  1 - Identificar archivo, 2 - Compilarla, 3 - Guardar el .CSS

  src("src/scss/style.scss").pipe(sass()).pipe(dest("build/css"));

  done();
}

exports.css = css;
