module.exports = function(grunt) {

	grunt.config('targethtml', {
		dist: {
			files: [{
				expand: true,
				cwd: '<%= yeoman.dist %>',
				src:['index.html'],
				dest:'<%= yeoman.dist %>'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-targethtml');

};