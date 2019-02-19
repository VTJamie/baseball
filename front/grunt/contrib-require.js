module.exports = function (grunt)
{
    var requirecontrollers = grunt.file.expand(
        {
            cwd: grunt.config.process('<%= yeoman.app %>/components/')
        },
        grunt.config.process([
            'pages/**/*.js',
            'menu/**/*.js',
            'modals/**/*.js',
            'header/**/*.js',
            'footer/**/*.js'
        ])).map(function (cv)
        {
            var noextension = cv.split(".");
            noextension.pop();
            return noextension.join(".");
        });    
	grunt.config('requirejs', {
		compile: {
			options: {
			    baseUrl: '<%= yeoman.app %>/components',
			    mainConfigFile: '<%= yeoman.app %>/components/config.js',
				paths: {
                	requireLib: '../libs/requirejs/require',
                	templates: '../../../<%= yeoman.dist %>/components/templates'
               	},
				include: [
                    'requireLib'
				].concat(requirecontrollers),
				optimize: 'uglify',
				uglify2: {
					mangle: true
				},
				name: 'config',
				removeCombined: true,
				preserveLicenseComments: false,
				wrapShim: true,
				out: '<%= yeoman.dist %>/components/main.js' 
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');

};
