module.exports = function(grunt) {

	grunt.config('copy', {
		dist: {
			files: [{
				expand: true,
				dot: true,
				cwd: '<%= yeoman.app %>',
				dest: '<%= yeoman.dist %>',
				src: [
					'**/styles/**',                    
					'!**/styles/sass/**',
                    '!**/styles/stylesheets/**',
                    '!**/.gitignore',
                    '!**/libs/**',
                    '**/libs/respond/**',
                    '**/libs/es5-shim/**',
                    '**/libs/html5shiv/**',
                    '**/components/shims/**'
				],
                filter: function(filepath) {
                    return ! grunt.file.isDir(filepath) || require('fs').readdirSync(filepath).length > 0;
                }
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

};
