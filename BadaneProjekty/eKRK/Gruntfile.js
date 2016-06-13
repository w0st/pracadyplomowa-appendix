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
            base: {
                src: [
                    // Angular Project Dependencies,
                    'src/bower_components/jquery/dist/jquery.js',
                    'src/bower_components/es5-shim/es5-shim.js',
                    'src/bower_components/json3/lib/json3.min.js',
                    'src/bower_components/bootstrap/dist/js/bootstrap.js',
                    'src/bower_components/angular/angular.js',
                    'src/bower_components/angular-resource/angular-resource.js',
                    'src/bower_components/angular-aria/angular-aria.js',
                    'src/bower_components/angular-mocks/angular-mocks.js',
                    'src/bower_components/angular-cookies/angular-cookies.js',
                    'src/bower_components/angular-animate/angular-animate.js',
                    'src/bower_components/angular-touch/angular-touch.js',
                    'src/bower_components/angular-sanitize/angular-sanitize.js',
                    'src/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                    'src/bower_components/angular-ui-router/release/angular-ui-router.js',
                    'src/bower_components/angular-loading-bar/build/loading-bar.js',
                    'src/bower_components/angular-translate/angular-translate.js',
                    'src/bower_components/jquery-ui/jquery-ui.js',
                    'src/bower_components/angular-dragdrop/src/angular-dragdrop.js',
                    'src/bower_components/ngstorage/ngStorage.js',
                    'src/bower_components/lodash/lodash.js',
                    'src/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
                    'src/bower_components/metisMenu/dist/metisMenu.js',
                    'src/bower_components/selection-model/dist/selection-model.js',
                    'src/bower_components/datatables/media/js/jquery.dataTables.js',
                    'src/bower_components/DataTables/media/js/jquery.dataTables.js',
                    'src/bower_components/angular-datatables/dist/angular-datatables.js',
                    'src/bower_components/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.js',
                    'src/bower_components/angular-datatables/dist/plugins/colreorder/angular-datatables.colreorder.js',
                    'src/bower_components/angular-datatables/dist/plugins/columnfilter/angular-datatables.columnfilter.js',
                    'src/bower_components/angular-datatables/dist/plugins/light-columnfilter/angular-datatables.light-columnfilter.js',
                    'src/bower_components/angular-datatables/dist/plugins/colvis/angular-datatables.colvis.js',
                    'src/bower_components/angular-datatables/dist/plugins/fixedcolumns/angular-datatables.fixedcolumns.js',
                    'src/bower_components/angular-datatables/dist/plugins/fixedheader/angular-datatables.fixedheader.js',
                    'src/bower_components/angular-datatables/dist/plugins/scroller/angular-datatables.scroller.js',
                    'src/bower_components/angular-datatables/dist/plugins/tabletools/angular-datatables.tabletools.js',
                    'src/bower_components/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.js',
                    'src/bower_components/angular-datatables/dist/plugins/select/angular-datatables.select.js',
                ],
                dest: 'src/tmp/<%= pkg.name %>-angscript.js'
            },
            js: {
                src: [
                    'src/bower_components/jquery/dist/jquery.js',
                    'src/bower_components/es5-shim/es5-shim.js',
                    'src/bower_components/json3/lib/json3.min.js',
                    'src/bower_components/bootstrap/dist/js/bootstrap.js',
                    'src/bower_components/angular/angular.js',
                    'src/bower_components/angular-resource/angular-resource.js',
                    'src/bower_components/angular-aria/angular-aria.js',
                    'src/bower_components/angular-mocks/angular-mocks.js',
                    'src/bower_components/angular-cookies/angular-cookies.js',
                    'src/bower_components/angular-animate/angular-animate.js',
                    'src/bower_components/angular-touch/angular-touch.js',
                    'src/bower_components/angular-sanitize/angular-sanitize.js',
                    'src/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                    'src/bower_components/angular-ui-router/release/angular-ui-router.js',
                    'src/bower_components/angular-loading-bar/build/loading-bar.js',
                    'src/bower_components/angular-translate/angular-translate.js',
                    'src/bower_components/jquery-ui/jquery-ui.js',
                    'src/bower_components/angular-dragdrop/src/angular-dragdrop.js',
                    'src/bower_components/ngstorage/ngStorage.js',
                    'src/bower_components/lodash/lodash.js',
                    'src/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
                    'src/bower_components/metisMenu/dist/metisMenu.js',
                    'src/bower_components/selection-model/dist/selection-model.js',
                    'src/bower_components/datatables/media/js/jquery.dataTables.js',
                    'src/bower_components/DataTables/media/js/jquery.dataTables.js',
                    'src/bower_components/angular-datatables/dist/angular-datatables.js',
                    'src/bower_components/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.js',
                    'src/bower_components/angular-datatables/dist/plugins/colreorder/angular-datatables.colreorder.js',
                    'src/bower_components/angular-datatables/dist/plugins/columnfilter/angular-datatables.columnfilter.js',
                    'src/bower_components/angular-datatables/dist/plugins/light-columnfilter/angular-datatables.light-columnfilter.js',
                    'src/bower_components/angular-datatables/dist/plugins/colvis/angular-datatables.colvis.js',
                    'src/bower_components/angular-datatables/dist/plugins/fixedcolumns/angular-datatables.fixedcolumns.js',
                    'src/bower_components/angular-datatables/dist/plugins/fixedheader/angular-datatables.fixedheader.js',
                    'src/bower_components/angular-datatables/dist/plugins/scroller/angular-datatables.scroller.js',
                    'src/bower_components/angular-datatables/dist/plugins/tabletools/angular-datatables.tabletools.js',
                    'src/bower_components/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.js',
                    'src/bower_components/angular-datatables/dist/plugins/select/angular-datatables.select.js',
                    'app/app.js',
                    'app/modules/authorisation/authorisationModule.js',
                    'app/modules/home/homeModule.js',
                    'app/modules/macierzsladowania/macierzsladowaniaModule.js',
                    'app/modules/moduly-ksztalcenia/modul-ksztalceniaModule.js',
                    'app/modules/moduly-ksztalcenia/moduly-ksztalceniaModule.js',
                    'app/modules/pracownicy-naukowi/pracownicy-naukowiModule.js',
                    'app/modules/profile-modulow/profile-modulowModule.js',
                    'app/modules/program-ksztalcenia/program-ksztalceniaModule.js',
                    'app/modules/program-studiow/program-studiowModule.js',
                    'app/modules/przedmioty-ksztalcenia/przedmioty-ksztalceniaModule.js',
                    'app/modules/zajecia/zajeciaModule.js',
                    'app/modules/authorisation/authorisationRoute.js',
                    'app/modules/home/homeRoute.js',
                    'app/modules/macierzsladowania/macierzsladowaniaRoute.js',
                    'app/modules/moduly-ksztalcenia/modul-ksztalceniaRoute.js',
                    'app/modules/moduly-ksztalcenia/moduly-ksztalceniaRoute.js',
                    'app/modules/profile-modulow/profile-modulowRoute.js',
                    'app/modules/program-ksztalcenia/program-ksztalceniaRoute.js',
                    'app/modules/program-studiow/program-studiowRoute.js',
                    'app/modules/przedmioty-ksztalcenia/przedmioty-ksztalceniaRoute.js',
                    'app/modules/zajecia/zajeciaRoute.js',
                    'app/modules/authorisation/authorisationCtrl.js',
                    'app/modules/macierzsladowania/macierzsladowaniaCtrl.js',
                    'app/modules/home/homeCtrl.js',
                    'app/modules/moduly-ksztalcenia/modul-ksztalceniaCtrl.js',
                    'app/modules/moduly-ksztalcenia/moduly-ksztalceniaCtrl.js',
                    'app/modules/profile-modulow/profile-modulowCtrl.js',
                    'app/modules/program-ksztalcenia/program-ksztalceniaCtrl.js',
                    'app/modules/program-studiow/program-studiowCtrl.js',
                    'app/modules/przedmioty-ksztalcenia/przedmiot-ksztalcenia-szczegolyCtrl.js',
                    'app/modules/przedmioty-ksztalcenia/przedmiot-ksztalceniaCtrl.js',
                    'app/modules/przedmioty-ksztalcenia/przedmioty-ksztalceniaCtrl.js',
                    'app/modules/shared/directives/change-language/change-languageCtrl.js',
                    'app/modules/shared/directives/logout/logoutCtrl.js',
                    'app/modules/zajecia/grupa-kursowCtrl.js',
                    'app/modules/zajecia/kursCtrl.js',
                    'app/modules/zajecia/zajeciaCtrl.js',
                    'app/modules/authorisation/authorisationService.js',
                    'app/modules/authorisation/token-interceptorService.js',
                    'app/modules/home/homeService.js',
                    'app/modules/macierzsladowania/macierzsladowaniaService.js',
                    'app/modules/moduly-ksztalcenia/modul-ksztalceniaService.js',
                    'app/modules/moduly-ksztalcenia/moduly-ksztalceniaService.js',
                    'app/modules/pracownicy-naukowi/pracownicy-naukowiService.js',
                    'app/modules/profile-modulow/profile-modulowService.js',
                    'app/modules/program-ksztalcenia/program-ksztalceniaService.js',
                    'app/modules/program-studiow/program-studiowService.js',
                    'app/modules/przedmioty-ksztalcenia/przedmioty-ksztalceniaService.js',
                    'app/modules/shared/directives/logout/logoutService.js',
                    'app/modules/zajecia/zajeciaService.js',
                    'app/modules/shared/directives/change-language/change-languageDirective.js',
                    'app/modules/shared/directives/header-notification/header-notificationDirective.js',
                    'app/config/dev.js',
                    'app/modules/shared/directives/logout/logoutDirective.js',
                    'app/modules/shared/directives/sidebar/sidebarDirective.js',
                    'app/modules/shared/directives/header/headerDirective.js',
                ],
                dest: 'src/tmp/<%= pkg.name %>-jsscript.js'
            },
            css: {
                src: [
                    'src/bower_components/bootstrap/dist/css/bootstrap.css',
                    'src/bower_components/angular-loading-bar/build/loading-bar.css',
                    'src/bower_components/font-awesome/css/font-awesome.css',
                    'src/bower_components/metisMenu/dist/metisMenu.css',
                    'src/bower_components/datatables/media/css/jquery.dataTables.css',
                    'src/bower_components/DataTables/media/css/jquery.dataTables.css',
                    'src/bower_components/angular-datatables/dist/plugins/bootstrap/datatables.bootstrap.css',
                    'app/assets/css/main.css',
                    'app/assets/css/sb-admin-2.css',
                    'app/assets/css/timeline.css',
                ],
                dest: 'src/bower_components/font-awesome/css/<%= pkg.name %>-styles.css'
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
                    ignore: [".fade",
                        ".fade.in",
                        ".collapse",
                        ".collapse.in",
                        ".collapsing",
                        ".alert-danger",
                        /\.open/]
                },
                files: {
                    'src/bower_components/font-awesome/css/<%= pkg.name %>-tidy.css': [
                        'index.html',
                        'app/modules/shared/directives/**/*.html',
                        'app/modules/!(shared)/*.html'
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
