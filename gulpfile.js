var gulp = require('gulp'), gulpLoadPlugins = require('gulp-load-plugins'), plugins = gulpLoadPlugins()

var cdnUrl = [
	// [ 'assets/', 'https://s.anw.red/' ],
	[	'assets/vue.js', 'assets/vue.min.js' ]
]

gulp.task('temp', function() {
	gulp.src('Fake-Chinese-Name.sketchplugin/**')
    .pipe(gulp.dest('temp/Fake-Chinese-Name.sketchplugin'))
})

gulp.task('zip', function() {
	gulp.src('temp/**')
  	.pipe(plugins.zip('Fake-Chinese-Name-Latest.zip'))
    .pipe(gulp.dest('releases'))
})

gulp.task('clean', function() {
	return gulp.src('temp/**', {read: false})
    .pipe(plugins.clean());
})

gulp.task('default', plugins.sequence('temp', 'zip'))

gulp.task('watch', function() {
	gulp.watch(['*','*/*'], ['default'])
 })
