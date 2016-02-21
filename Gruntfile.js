// Generated on 2015-09-16 using generator-angular 0.12.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  //load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn'
  });

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    docs: 'docs',
    test: 'test'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,
    // read package.json,
    pkg: grunt.file.readJSON('package.json'),

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: [
          '<%= yeoman.app %>/scripts/*.js',
          '<%= yeoman.app %>/scripts/**/*.js',
          '!<%= yeoman.app %>/scripts/*.spec.js',
          '!<%= yeoman.app %>/scripts/**/*.spec.js'
        ],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: [
          '<%= yeoman.test %>/spec/*.js',
          '<%= yeoman.test %>/spec/**/*.js',
          '<%= yeoman.app %>/scripts/*.spec.js',
          '<%= yeoman.app %>/scripts/**/*.spec.js'
        ],
        tasks: ['newer:jshint:test', 'karma']
      },
      sass: {
        files: [
          '<%= yeoman.app %>/styles/*.scss',
          '<%= yeoman.app %>/styles/**/*.scss',
          '<%= yeoman.app %>/scripts/*.scss',
          '<%= yeoman.app %>/scripts/**/*.scss'

        ],
        tasks: ['sass:dev', 'autoprefixer:dist'],
        options: {
          event: ['added', 'changed', 'deleted'],
          livereload: true // needed to run LiveReload
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/*.html',
          '<%= yeoman.app %>/scripts/*.html',
          '<%= yeoman.app %>/scripts/**/*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }

    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      },
      docs: {
        options: {
          open: true,
          port: 4000,
          middleware: function (connect) {
            return [
              connect.static('docs')
            ];
          }
        }
      }
    },
    // Automatically sort and injects AngularJS application files
    // depending on module definitions and usage
    angularFileLoader: {
      options: {
        scripts: [
          '<%= yeoman.app %>/scripts/*.js',
          '<%= yeoman.app %>/scripts/**/*.js'
        ]
      },
      default_options: {
        src: ['<%= yeoman.app %>/index.html']
      }
    },
    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/*.js',
          '<%= yeoman.app %>/scripts/**/*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: [
          '<%= yeoman.test %>/spec/*.spec.js',
          '<%= yeoman.test %>/spec/**/*.spec.js',
          '<%= yeoman.app %>/scripts/*.spec.js',
          '<%= yeoman.app %>/scripts/**/*.spec.js'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      server: {
        options: {
          map: true
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: /\.\.\//
      },
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        ignorePath: /\.\.\//,
        fileTypes: {
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi
            },
            replace: {
              js: '\'{{filePath}}\','
            }
          }
        }
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}']
      }
    },

    // Convert px to rem in css files with optional fallback to px.
    px_to_rem: {
      dist: {
        options: {
          base: 16,
          fallback: true,
          fallback_existing_rem: true,
          ignore: ['border', 'border-top', 'border-right', 'border-bottom', 'border-left'],
          map: false
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles',
          src: ['*.css'],
          dest: '.tmp/styles',
          ext: '.css'
        }]
      }
    },

    sass: {
      dev: {
        options: {
          sourceMap: true,
          sourceComments: true,
          outputStyle: 'expanded'
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/styles',
          src: ['**/*.scss'],
          dest: '.tmp/styles',
          ext: '.css'
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>/scripts',
          src: ['**/*.scss'],
          dest: '.tmp/styles',
          ext: '.css'
        }]
      },
      dist: {
        options: {
          sourceMap: false,
          sourceComments: false,
          outputStyle: 'compressed'
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/styles',
          src: ['**/*.scss'],
          dest: '.tmp/styles',
          ext: '.css'
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>/scripts',
          src: ['**/*.scss'],
          dest: '.tmp/styles',
          ext: '.css'
        }]
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          // '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>',
          '<%= yeoman.dist %>/images',
          '<%= yeoman.dist %>/styles'
        ]
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    uglify: {
      dist: {
        options: {
          mangle: false
        },
        files: {
          '<%= yeoman.dist %>/scripts/scripts.js': [
            '<%= yeoman.dist %>/scripts/scripts.js'
          ]
        }
      }
    },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: [
            '*.html', 'scripts/*.html',
            '*.html', 'scripts/**/*.html',
            '*.html', 'views/{,*/}*.html',
            '*.html', 'helpTemplates/{,*/}*.html'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'views/{,*/}*.html',
            'scripts/*.html',
            'scripts/**/*.html',
            'helpTemplates/*.html',
            '*.html',
            '!styleguide.html',
            'views/**',
            'images/{,*/}*.{webp}',
            'public/analytics/**/{,*/}*.*',
            'public/images/{,*/}*.*',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.',
          src: [
            'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
            'server.js',
            'package.json'
          ],
          dest: '<%= yeoman.dist %>'
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>/lang',
          dest: '<%= yeoman.dist %>/lang',
          src: ['*.json', '*.js', '*/*.js']
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>/mockData',
          dest: '<%= yeoman.dist %>/mockData',
          src: ['{,*/}*.json']
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>/public',
          dest: '<%= yeoman.dist %>/public',
          src: ['{,*/}*.*']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        // 'compass:server'
      ],
      test: [
        // 'compass'
      ],
      dist: [
        // 'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      autotest: {
        autoWatch: true,
        singleRun: false
      },
      unit: {
        autoWatch: false,
        singleRun: true
      }
    },

    protractor: {
      options: {
        // Location of your protractor config file
        configFile: 'protractor.conf.js',

        // Do you want the output to use fun colors?
        noColor: false,

        // Set to true if you would like to use the Protractor command line debugging tool
        // debug: true,

        // Additional arguments that are passed to the webdriver command
        args: {}
      },
      e2e: {
        options: {
          // Stops Grunt process if a test fails
          keepAlive: false
        }
      },
      auto: {
        options: {
          keepAlive: true
        }
      }
    },

    // automatically include JavaScript files in index.html
    includeSource: {
      options: {
        basePath: '<%= yeoman.app %>',
        baseUrl: '/'
      },
      server: {
        files: {
          '.tmp/index.html': '<%= yeoman.app %>/index.html'
        }
      },
      dist: {
        files: {
          '<%= yeoman.dist %>/index.html': '<%= yeoman.app %>/index.html'
        }
      }
    },

    // Detect structurally similar code
    jsinspect: {
      examples: {
        options: {
          threshold: 30,
          diff: true,
          identifiers: true,
          failOnMatch: true,
          suppress: 100,
          reporter: 'default',
          configFile: '.jsinspectrc'
        },
        src: [
          '<%= yeoman.app %>/scripts/*.js',
          '<%= yeoman.app %>/scripts/**/*.js',
          '!<%= yeoman.app %>/scripts/*.spec.js',
          '!<%= yeoman.app %>/scripts/**/*.spec.js'
        ]
      }
    },

    // JavaScript complexity analysis
    complexity: {
      scripts: {
        src: [
          '<%= yeoman.app %>/scripts/*.js',
          '<%= yeoman.app %>/scripts/**/*.js'
        ],
        exclude: ['*.spec.js'],
        options: {
          breakOnErrors: true,
          jsLintXML: 'target/jslint.xml',         // create XML JSLint-like report
          checkstyleXML: 'target/checkstyle.xml', // create checkstyle report
          pmdXML: 'target/pmd.xml',               // create pmd report
          errorsOnly: false,                      // show only maintainability errors
          cyclomatic: [3, 7, 12],                 // or optionally a single value, like 3
          halstead: [8, 13, 20],                  // or optionally a single value, like 8
          maintainability: 100,
          hideComplexFunctions: false,            // only display maintainability,
          broadcast: false                        // broadcast data over event-bus
        }
      }
    },

    // AngularJS documentation
    docular: {
      useHtml5Mode: false, //Use angular's html5 mode? true/false.
      docular_webapp_target: './docs', //The place where the docs will be generated
      groups: [{
        groupTitle: 'MyProject',
        groupId: 'praveen',
        sections: [{
          id: 'controllers',
          title: 'Controllers',
          scripts: [
            '<%= yeoman.app %>/scripts/controllers/*.js',
            '<%= yeoman.app %>/scripts/controllers/**/*.js'
          ]
        }, {
          id: 'directives',
          title: 'Directives',
          scripts: [
            '<%= yeoman.app %>/scripts/directives/*.js',
            '<%= yeoman.app %>/scripts/directives/**/*.js'
          ]
        }, {
          id: 'filters',
          title: 'Filters',
          scripts: [
            '<%= yeoman.app %>/scripts/filters/*.js',
            '<%= yeoman.app %>/scripts/filters/**/*.js'
          ]
        }, {
          id: 'services',
          title: 'Services',
          scripts: [
            '<%= yeoman.app %>/scripts/services/*.js',
            '<%= yeoman.app %>/scripts/services/**/*.js'
          ]
        }]
      }],
      showAngularDocs: '1.4.8',
      showDocularDocs: true
    },

    // JavaScript Source Analysis
    plato: {
      scripts: {
        options: {
          jshint: grunt.file.readJSON('.jshintrc')
        },
        files: {
          'coverage/complexity': [
            '<%= yeoman.app %>/scripts/*.js',
            '<%= yeoman.app %>/scripts/**/*.js',
            '!<%= yeoman.app %>/scripts/*.spec.js',
            '!<%= yeoman.app %>/scripts/**/*.spec.js'
          ]
        }
      }
    },

    // replace release version number
    replace: {
      dev: {
        options: {
          patterns: [{
            match: 'VERSION',
            replacement: '<%= pkg.version %>'
          }]
        },
        files: [{
          expand: true,
          flatten: true,
          src: '<%= yeoman.app %>/index.html',
          dest: '.tmp/'
        }]
      },
      dist: {
        options: {
          patterns: [{
            match: 'VERSION',
            replacement: '<%= pkg.version %>'
          }]
        },
        files: [{
          expand: true,
          flatten: true,
          src: '<%= yeoman.dist %>/index.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    }
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'angularFileLoader',
      'sass:dev',
      'px_to_rem',
      'autoprefixer:dist',
      'connect:livereload',
      'karma:unit',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'wiredep',
    'angularFileLoader',
    'concurrent:test',
    'sass:dist',
    'px_to_rem',
    'autoprefixer:dist',
    'connect:test',
    'karma:unit'
  ]);

  grunt.registerTask('test-e2e', [
    'connect:test',
    'protractor:e2e'
  ]);

  grunt.registerTask('docs', [
    'docular',
    'connect:docs:keepalive'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'angularFileLoader',
    'useminPrepare',
    'concurrent:dist',
    'sass:dist',
    'px_to_rem',
    'autoprefixer:dist',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
