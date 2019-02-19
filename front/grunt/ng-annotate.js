module.exports = function(grunt) {

	grunt.config('ngAnnotate', {
		options: {
			add: true
		},
		dist: {
			files: [
				{	
					expand: true,
					cwd: '<%= yeoman.app %>',
					src: ['src/**/*.js'],
					dest: '<%= yeoman.app %>'
				}
			]
		}
	});

	grunt.loadNpmTasks('grunt-ng-annotate');

};