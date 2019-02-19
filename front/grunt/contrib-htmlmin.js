module.exports = function(grunt) {

	grunt.config('htmlmin', {
		dist: {
			options: {
				collapseWhitespace: true,
				collapseBooleanAttributes: true,
				removeCommentsFromCDATA: true,
				removeOptionalTags: true,
				processScripts: ["text/ng-template", "text/x-handlebars-template"]
			},
			files: [{
				expand: true,
				cwd: '<%= yeoman.dist %>',
				src: ['**/*.html'],
				dest: '<%= yeoman.dist %>'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-htmlmin');

};
