module.exports = function(grunt) {
    var path = 'Content/components/'
	grunt.config('ngtemplates', {
        App:        {
            cwd: '<%= yeoman.app %>/..',
            src: [path + '**/*.html'],
            //src: [
            //    path + 'menu/menu_template.html',
            //    path + 'header/header_template.html',
            //    path + 'footer/footer_template.html',
            //    path + 'pages/container_template.html',
            //    path + 'pages/login_template.html',
            //    path + 'pages/rounding/list_template.html'
            //],
            dest:     '<%= yeoman.dist %>/components/templates.js',
            options: {
                htmlmin: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true
                },
                bootstrap:  function(module, script) {
                    return 'define(["app"], function(app) {app.run(["$templateCache", function($templateCache) {' + script + '}]);});';
                }
            }
        }
	});

	grunt.loadNpmTasks('grunt-angular-templates');

};
