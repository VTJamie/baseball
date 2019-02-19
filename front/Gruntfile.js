// Generated on 2014-12-19 using generator-angular 0.10.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: 'app/Content',
        flash: 'flash',
        dist: '../Content'        
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig
    });

    grunt.loadTasks('grunt');



    grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'compass',
            'connect:livereload',
            'configureProxies',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
       'clean:dist',
       'compass',
       'copy:dist',
       'ngtemplates',
       'requirejs'
    ]);

    grunt.registerTask('ftp', ['build', 'ftp-deploy']);

    grunt.registerTask('default', [
        'build'
    ]);
};
