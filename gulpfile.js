const gulp = require("gulp");

gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload())
})

gulp.task("scripts", function(){
	return gulp.src(["*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload())

})

gulp.task("images", function(){
	return gulp.src(["*.{jpg,png}", "images/**/*"])
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload())

})

gulp.task("data", function(){
	return gulp.src(["*.json", "!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload())

})

const sass = require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("sass1",function(){
    return gulp.src("stylesheet/index.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())


})

gulp.task("sass2",function(){
    return gulp.src("stylesheet/product.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("product.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())


})

gulp.task("sass_regist",function(){
    return gulp.src("stylesheet/regist.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("regist.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())


})

gulp.task("sass_login",function(){
    return gulp.src("stylesheet/login.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("login.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())


})

gulp.task("sass_shopping",function(){
    return gulp.src("stylesheet/shopping.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("shopping.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())


})

gulp.task("sass_reset",function(){
    return gulp.src("stylesheet/reset.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("reset.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())


})

gulp.task("sass_list",function(){
    return gulp.src("stylesheet/list.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("list.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())


})

gulp.task("build",['copy-html','scripts','images','data','sass1','sass_reset',"sass2","sass_regist","sass_login","sass_shopping","sass_list"],function(){
    console.log("项目建立成功")
})


gulp.task("watch",function(){
    gulp.watch("*.html",["copy-html"]);
    gulp.watch(["*.js","!gulpfile.js"],["scripts"]);
    gulp.watch(["*.{jpg,png}", "images/**/*"],["images"]);
    gulp.watch(["*.json","!package.json"],["data"]);
    gulp.watch("stylesheet/index.scss",['sass1']);
    gulp.watch("stylesheet/reset.scss",['sass_reset']);
    gulp.watch("stylesheet/product.scss",['sass2']);
    gulp.watch("stylesheet/regist.scss",["sass_regist"]);
    gulp.watch("stylesheet/login.scss",["sass_login"]);
    gulp.watch("stylesheet/shopping.scss",["sass_shopping"]);
    gulp.watch("stylesheet/list.scss",["sass_list"]);
})

const connect = require("gulp-connect")

gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:8888,
        livereload:true
    })
})

gulp.task("default",["watch","server"])