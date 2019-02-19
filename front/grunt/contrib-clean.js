module.exports = function(grunt) {

	grunt.config('clean', {
	    dist: {
	        options: {
	            force: true
	        },
			files: [{
				dot: true,
				src: [
					'<%= yeoman.dist %>/*',                    
					'!<%= yeoman.dist %>/.git*'
				]
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');

};
