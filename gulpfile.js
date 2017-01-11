var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    bourbone = require('node-bourbon').includePaths;
    // concat = require('gulp-concat'),
    // uglify = require('gulp-uglify'),
    // uglifyCss = require('gulp-uglifycss'),
    // tinypng = require('gulp-tinypng-compress');


gulp.task('sass', function() {
    gulp.src('./style.scss')
        .pipe(sass({
            includePaths: bourbone
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'));


});





gulp.task('watch', function() {
   
    gulp.watch('./style.scss', ['sass']);
   
});


// //GULP CONCAT JS
// gulp.task('concat', function() {
//     gulp.src([dev + 'jquery.js', dev + 'jquery-cycle-2.js', dev + 'bootstrap.min.js', dev + 'wow.js', dev + 'main.js'])
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('production/js'));
// });

// //GULP UGLIFY JS
// gulp.task('uglify', function() {
//     gulp.src('production/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('production/js'));
// });

// // CONCAT CSS
// gulp.task('concatCss', function() {
//     gulp.src(['./font-awesome/css/font-awesome.min.css', devCss + 'bootstrap.css', devCss + 'animate.css', devCss + 'style.css'])
//         .pipe(concat('all.css'))
//         .pipe(gulp.dest('production/css'));
// });
// //UGLIFY CSS
// gulp.task('uglifyCss', function() {
//     gulp.src('production/css/*.css')
//         .pipe(uglifyCss())
//         .pipe(gulp.dest('production/css'));
// });

// // COMPRESS IMAGES
// gulp.task('tinypng', function() {
//     gulp.src('./img/**/*.{png,jpg,jpeg}')
//         .pipe(tinypng({
//             key: 'logo.png',
//             sigFile: 'images/.tinypng-sigs',
//             log: true
//         }))
//         .pipe(gulp.dest('production/images'));
// });


gulp.task('default', ['watch']);
