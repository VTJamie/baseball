module.exports = function(grunt) {
    grunt.config('prettysass', {        
        app: {            
            src: ['<%= yeoman.app %>/styles/**/custom/**/*.scss']            
        }
    });
    grunt.loadNpmTasks('grunt-prettysass');
};
