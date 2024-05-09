const gulp = require("gulp");
  const sass = require('gulp-sass')(require('sass'));// const autoprefixer = require("gulp-autoprefixer");
const rtlcss = require("gulp-rtlcss");
var concat = require('gulp-concat');



// Define the task to convert compiled CSS to RTL
gulp.task("convert-rtl", async function () {
  return gulp
    .src("./src/assets/sass/*.scss") // Assuming compiled CSS is in this directory
    // .pipe(sass().on("error", sass.logError))
    .pipe(sass())
    .pipe(rtlcss()) // Convert to RTL
    .pipe(concat("style-rtl.css"))
    .pipe(gulp.dest("./src/assets/rtl")); // Output directory for RTL CSS
});


// Define a task to watch changes and trigger the tasks accordingly
// gulp.task("watch", function () {
//   gulp.watch(
//     "/src/assets/scss/**/*.scss",
//     gulp.series("compile-ltr", "convert-rtl")
//   );
// });

// Define default task
// gulp.task("default", gulp.series("compile-ltr", "convert-rtl", "watch"));
