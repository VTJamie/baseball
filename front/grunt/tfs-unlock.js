module.exports = function(grunt) {

    grunt.config('tfs-unlock', {
        checkout: {
            options: {                
                action: 'checkout'
            },
            files: {
                src: [
                    '<%= yeoman.app %>/styles/main.css'
                ]
            }
        },
	});

	grunt.loadNpmTasks('grunt-tfs-unlock');

};
