// Grunt tasks
var pushState = require('connect-pushstate');
module.exports = function (grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
        '* <%= pkg.name %> - v<%= pkg.version %> - MIT LICENSE <%= grunt.template.today("yyyy-mm-dd") %>. \n' +
        '* @author <%= pkg.author %>\n' +
        '*/\n',

        clean: {
            dist: ['src/tmp']
        },

        jshint: {
            ignore_warning: {
                options: {
                    '-W015': true
                },
                src: ['app/modules/**/*.js']
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            app: {
                src: ['app/modules/**/*.js']
            }
        },

        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            js: {
                src: [
                    'lib/angular/angular.js',
                    'lib/angular/angular-resource.js',
                    'js/app.js',
                    'js/controllers/CheckoutController.js',
                    'js/controllers/CustomerController.js',
                    'js/controllers/MenuController.js',
                    'js/controllers/NavbarController.js',
                    'js/controllers/RestaurantsController.js',
                    'js/controllers/ThankYouController.js',
                    'js/directives/fmDeliverTo.js',
                    'js/directives/fmCheckboxList.js',
                    'js/directives/fmRating.js',
                    'js/services/alert.js',
                    'js/services/customer.js',
                    'js/services/localStorage.js',
                    'js/services/cart.js',
                    'js/services/Restaurant.js',
                ],
                dest: 'src/tmp/<%= pkg.name %>-jsscript.js'
            },
            css: {
                src: [
                    'css/bootstrap-united.css',
                    'css/app.css',

                ],
                dest: 'css/<%= pkg.name %>-styles.css'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>',
                mangle: false,
                report: 'min'
            },
            base: {
                src: ['<%= concat.js.dest %>'],
                dest: 'src/tmp/<%= pkg.name %>-jsscript.min.js'
            },
            basePlugin: {
                src: ['src/plugins/**/*.js'],
                dest: 'app/assets/js/plugins/',
                expand: true,
                flatten: true,
                ext: '.min.js'
            }
        },

        uncss: {
            dist: {
                options: {
                    ignore: [/\.fm/]
                },
                files: {
                    'css/<%= pkg.name %>-tidy.css': [
                        'index.html'
                    ]
                }
            }
        },

        connect: {
            options: {
                middleware: function (connect, options) {
                    return [
                        // Rewrite requests to root so they may be handled by router
                        pushState(),

                        // Serve static files
                        connect.static(options.base)
                    ];
                }
            },
            server: {
                options: {
                    keepalive: true,
                    port: process.env.PORT || 5000,
                    base: '.',
                    hostname: 'localhost',
                    debug: true,
                    livereload: true,
                    open: true
                }
            }
        },
        concurrent: {
            tasks: ['connect', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },

        watch: {
            app: {
                files: '<%= jshint.app.src %>',
                tasks: ['jshint:app'],
                options: {
                    livereload: true
                }
            }
        },

        injector: {
            options: {},
            local_dependencies: {
                files: {
                    'index.html': [
                        'bower.json',
                        'app/assets/css/*.css',
                        'app/app.js',
                        'app/**/*Module.js',
                        'app/**/*Route.js',
                        'app/**/*Ctrl.js',
                        'app/**/*Service.js',
                        'app/**/*Directive.js',
                        'app/config/*.js'
                    ]
                }
            }
        }


    });

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    // Making grunt default to force in order not to break the project if something fail.
    grunt.option('force', true);

    // Register grunt tasks
    grunt.registerTask("build", [
        "jshint",
        "concat",
        "uglify",
        "clean",
        "injector"
    ]);

    // Development task(s).
    grunt.registerTask('dev', ['injector', 'concurrent']);
    grunt.registerTask('default', ['injector', 'concurrent']);

};
