const gulp = require("gulp");
const autoprefixer = require("autoprefixer");
const sass = require("gulp-sass")(require("sass"));
const browsersync = require("browser-sync").create();
const livereload = require("gulp-livereload");
// const pug = require("gulp-pug");
const paths = {
  css: {
    src: "./assets/src/scss/*.scss",
    dest: "./assets/css",
  },
  // html: {
  //   src: "./assets/src/pages/template/index.pug",
  //   dest: "./template",
  // },
};
/// vendors css ///
gulp.task("vendors", function () {
  return gulp
    .src(
      [
        // './node_modules/bootstrap/dist/css/bootstrap.min.css',
      ],
      { base: "node_modules" }
    )
    .pipe(sass({}).on("error", sass.logError))
    .pipe(gulp.dest("./assets/css/vendors/"));
});
/// vendors js ///
gulp.task("js_file", function () {
  return gulp
    .src(["node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"], {
      base: "node_modules",
    })
    .pipe(gulp.dest("./assets/js/vendors/"));
});
// feather icon sprite
gulp.task("sprite_file", function () {
  return gulp
    .src(["node_modules/feather-icons/dist/feather-sprite.svg"], {
      base: "node_modules",
    })
    .pipe(gulp.dest("./assets/svg/"));
});
/// Style Task ///
gulp.task("scss", () => {
  return gulp
    .src(paths.css.src, { allowEmpty: true })
    .pipe(
      sass({
        //  outputStyle: 'compressed'
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest(paths.css.dest))
    .pipe(browsersync.stream())
    .pipe(livereload());
  done();
});
/// Html Task ///
// gulp.task("html", () => {
//   return gulp
//     .src(paths.html.src)
//     .pipe(
//       pug({
//         pretty: true,
//       })
//     )
//     .on("error", console.error.bind(console))
//     .pipe(gulp.dest(paths.html.dest))
//     .pipe(browsersync.stream())
//     .pipe(livereload());
// });
/// Browser Sync Task ///
gulp.task("browser-sync", async function (done) {
  browsersync.init({
    base: "./",
    server: "./",
    startPath: "template/index.html",
    host: "localhost",
    open: true,
    tunnel: false,
  });
  done();
});
/// Watch function ///
gulp.task(
  "default",
  gulp.series(
    "js_file",
    "sprite_file",
    "scss",
    // "html",
    "browser-sync",
    function () {
      gulp.watch(
        ["./assets/src/scss/**/*.scss"],
        gulp.series("js_file", "sprite_file", "scss")
      );
      livereload.listen();
    }
  )
);
