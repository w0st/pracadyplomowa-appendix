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
                    'js/vendor/promise.min.js',
                    'js/vendor/object-observe.min.js',
                    'js/utility.js',
                    'js/vendor/CRUD.js',
                    'js/vendor/CRUD.SqliteAdapter.js',
                    'js/CRUD.entities.js',
                    'js/vendor/angular.js',
                    'js/vendor/angular-animate.min.js',
                    'js/vendor/angular-sanitize.min.js',
                    'js/vendor/ui-router.min.js',
                    'js/vendor/ct-ui-router-extras.core.min.js',
                    'js/vendor/ct-ui-router-extras.sticky.min.js',
                    'js/vendor/angular-xml.min.js',
                    'js/vendor/ui-bootstrap-custom-tpls-1.2.5.min.js',
                    'js/vendor/tmhDynamicLocale.js',
                    'js/vendor/dialogs.quacked.js',
                    'js/vendor/angular-translate.js',
                    'js/vendor/angular-translate-once.js',
                    'js/vendor/angular-translate-loader-static-files.min.js',
                    'js/vendor/angular-translate-handler-log.min.js',
                    'js/vendor/angular-dialgauge.quacked.js',
                    'js/vendor/angular-lazy-image.quacked.js',
                    'js/vendor/api-check.min.js',
                    'js/vendor/formly.min.js',
                    'js/vendor/angular-formly-templates-bootstrap.min.js',
                    'js/vendor/angular-xmlrpc.js',
                    'js/vendor/toaster.js',
                    'js/vendor/moment.quacked.js',
                    'js/vendor/moment-timezone-with-data.quacked.js',
                    'js/app.js',
                    'js/app.authHttpBackend.js',
                    'js/app.requestinterceptors.js',
                    'js/app.routes.js',
                    'js/app.standalone.update.js',
                    'js/app.translate.js',
                    'js/controllers/ActionBarCtrl.js',
                    'js/controllers/WatchlistCtrl.js',
                    'js/controllers/serieslist/LocalSeriesCtrl.js',
                    'js/controllers/serieslist/SeriesListCtrl.js',
                    'js/controllers/serieslist/TraktTVSearchCtrl.js',
                    'js/controllers/serieslist/TraktTVTrendingCtrl.js',
                    'js/controllers/settings/BackupCtrl.js',
                    'js/controllers/settings/CalendarCtrl.js',
                    'js/controllers/settings/customSearchEngineCtrl.js',
                    'js/controllers/settings/DisplayCtrl.js',
                    'js/controllers/settings/WindowCtrl.js',
                    'js/controllers/settings/LanguageCtrl.js',
                    'js/controllers/settings/SettingsTorrentCtrl.js',
                    'js/controllers/settings/SubtitlesCtrl.js',
                    'js/controllers/settings/SyncCtrl.js',
                    'js/controllers/settings/TraktTVCtrl.js',
                    'js/controllers/settings/SerieSettingsCtrl.js',
                    'js/controllers/settings/TorrentClients/Deluge.js',
                    'js/controllers/settings/TorrentClients/qBittorrent.js',
                    'js/controllers/settings/TorrentClients/qBittorrent32plus.js',
                    'js/controllers/settings/TorrentClients/Tixati.js',
                    'js/controllers/settings/TorrentClients/Transmission.js',
                    'js/controllers/settings/TorrentClients/uTorrentWebUI.js',
                    'js/controllers/settings/TorrentClients/Vuze.js',
                    'js/controllers/sidepanel/AboutCtrl.js',
                    'js/controllers/sidepanel/AutodlstatusCtrl.js',
                    'js/controllers/sidepanel/SidepanelEpisodeCtrl.js',
                    'js/controllers/sidepanel/SidepanelSeasonCtrl.js',
                    'js/controllers/sidepanel/SidepanelSeasonsCtrl.js',
                    'js/controllers/sidepanel/SidepanelTraktSerieCtrl.js',
                    'js/controllers/sidepanel/SidepanelSerieCtrl.js',
                    'js/controllers/sidepanel/TorrentCtrl.js',
                    'js/controllers/sidepanel/TorrentDetailsCtrl.js',
                    'js/directives/backgroundRotator.js',
                    'js/directives/calendar.js',
                    'js/directives/calendarEvent.js',
                    'js/directives/chromeTopSites.js',
                    'js/directives/datePicker.js',
                    'js/directives/episodeWatched.js',
                    'js/directives/episodeDownloaded.js',
                    'js/directives/fastSearch.js',
                    'js/directives/focusWatch.js',
                    'js/directives/lazyBackground.js',
                    'js/directives/mouseWheelDown.js',
                    'js/directives/mouseWheelUp.js',
                    'js/directives/targetBlank.js',
                    'js/directives/loadingSpinner.js',
                    'js/directives/serieDetails.js',
                    'js/directives/serieheader.js',
                    'js/directives/seriesList.js',
                    'js/directives/stopEvent.js',
                    'js/directives/sidePanel.js',
                    'js/directives/subtitleDialog.js',
                    'js/directives/queryMonitor.js',
                    'js/directives/torrentDialog.js',
                    'js/directives/torrentRemoteControl.js',
                    'js/directives/contextMenu.js',
                    'js/services/BaseHTTPApi.js',
                    'js/services/DuckieTorrent.js',
                    'js/services/CalendarEvents.js',
                    'js/services/AutoDownloadService.js',
                    'js/services/EpisodeWatchedMonitor.js',
                    'js/services/FavoritesService.js',
                    'js/services/FileReader.js',
                    'js/services/FormlyLoaderService.js',
                    'js/services/GoogleImages.js',
                    'js/services/IMDB.js',
                    'js/services/Netflix.js',
                    'js/services/NotificationService.js',
                    'js/services/OpenSubtitles.js',
                    'js/services/SceneNameResolver.js',
                    'js/services/SceneXemResolver.js',
                    'js/services/MigrationService.js',
                    'js/services/SettingsService.js',
                    'js/services/StorageSyncService.js',
                    'js/services/TorrentHashListService.js',
                    'js/services/TorrentMonitor.js',
                    'js/services/TorrentClients/BaseTorrentClient.js',
                    'js/services/TorrentClients/TorrentData.js',
                    'js/services/TorrentClients/Deluge.js',
                    'js/services/TorrentClients/qBittorrent.js',
                    'js/services/TorrentClients/qBittorrent32plus.js',
                    'js/services/TorrentClients/Tixati.js',
                    'js/services/TorrentClients/Transmission.js',
                    'js/services/TorrentClients/uTorrent.js',
                    'js/services/TorrentClients/uTorrentWebUI.js',
                    'js/services/TorrentClients/Vuze.js',
                    'js/services/TorrentSearchEngines/TorrentSearchEngines.js',
                    'js/services/TorrentSearchEngines/GenericTorrentSearchEngine.js',
                    'js/services/TorrentSearchEngines/KickassMirrorResolver.js',
                    'js/services/TorrentSearchEngines/ThePirateBayMirrorResolver.js',
                    'js/services/TorrentSearchEngines/IsoHunt.js',
                    'js/services/TorrentSearchEngines/Kickass.js',
                    'js/services/TorrentSearchEngines/Nyaa.js',
                    'js/services/TorrentSearchEngines/RarBG.js',
                    'js/services/TorrentSearchEngines/ShowRSS.js',
                    'js/services/TorrentSearchEngines/ThePirateBay.js',
                    'js/services/TorrentSearchEngines/Torrentz.eu.js',
                    'js/services/UpgradeNotificationService.js',
                    'js/services/TorrentFreak.js',
                    'js/services/TraktTVv2.js',
                    'js/services/TraktTVTrending.js',
                    'js/services/TraktTVUpdateService.js',
                    'js/services/WatchlistCheckerService.js',
                    'js/services/WatchlistService.js',
                    'js/services/TraktTVStorageSyncTarget.js',
                    'js/services/ChromeStorageSyncTarget.js',
                ],
                dest: 'src/tmp/<%= pkg.name %>-jsscript.js'
            },
            css: {
                src: [
                    'css/bootstrap.min.css',
                    'css/main.css',
                    'css/anim.css',
                    'css/dialogs.css',
                    'css/flags.css',
                    'css/toaster.css',
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
                    ignore: [".fade",
                        ".fade.in",
                        ".collapse",
                        ".collapse.in",
                        ".collapsing",
                        ".alert-danger",
                        /\.open/]
                },
                files: {
                    'css/<%= pkg.name %>-tidy.css': [
                        'index.html',
                        'tab.html',
                        'templates/**/*.html'
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
