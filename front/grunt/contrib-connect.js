module.exports = function(grunt) {
	var serveStatic = require("serve-static");
	grunt.config('connect', {
		options   : {
			port      : 9000,
			// Change this to '0.0.0.0' to access the server from outside.
			hostname  : '0.0.0.0',
			livereload: 35729
		},
		proxies: [
           {
               context: '/rest',              
               host: 'localhost',
               port: 9001
           }          
		],
		livereload: {
			options: {
				open: true,
				base: [
					'<%= yeoman.app %>/..'
				],
				middleware: function (connect, options)
				{
				    if (!Array.isArray(options.base))
				    {
				        options.base = [options.base];
				    }
				    
				    // Setup the proxy
				    var middlewares = [require('grunt-connect-proxy/lib/utils').proxyRequest];
				    
				    // Serve static files.
				    options.base.forEach(function (base)
				    {
				        middlewares.push(serveStatic(base));
				    });

				    // Make directory browse-able.
				    // var directory = options.directory || options.base[options.base.length - 1];
				    // middlewares.push(connect.directory(directory));

				    return middlewares;
				}
			}
		},

		dist      : {
			options: {
                open: true,
                base: '<%= yeoman.dist %>',
                middleware: function (connect, options)
                {
                    if (!Array.isArray(options.base))
                    {
                        options.base = [options.base];
                    }

                    // Setup the proxy
                    var middlewares = [require('grunt-connect-proxy/lib/utils').proxyRequest];

                    // Serve static files.
                    options.base.forEach(function (base)
                    {
                        middlewares.push(connect.static(base));
                    });

                    // Make directory browse-able.
                   // var directory = options.directory || options.base[options.base.length - 1];
                   // middlewares.push(connect.directory(directory));

                    return middlewares;
                }
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');

};