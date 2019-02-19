module.exports = function(grunt) {

	grunt.config('usemin', {
		html: ['<%= yeoman.dist %>/index.html']
	});

	grunt.loadNpmTasks('grunt-usemin');

};
