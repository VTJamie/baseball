module.exports = function(grunt) {

	grunt.config('compass', {
		options: {
			sassDir: '<%= yeoman.app %>/styles/sass',
			cssDir: '<%= yeoman.app %>/styles',
			imagesDir: '<%= yeoman.app %>/styles/images',
			javascriptsDir: '<%= yeoman.app %>/libs',
			importPath: ['<%= yeoman.app %>/styles/sass'],
			relativeAssets: false,
			assetCacheBuster: false,
			raw: 'Sass::Script::Number.precision = 10\n',
            outputStyle: 'compressed',
            force: true
		},
		server: {
			options: {
				debugInfo: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');

};
