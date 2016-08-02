module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            "transform": [ "browserify-shim" ],
            dist: {
                files: {
                    'public/js/bundle.js': ['resources/assets/bundle.js']
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'resources/assets/js/*.js'
                ],
                dest: 'resources/assets/bundle.js',
            }
        },
         uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'public/js/bundle.js':
                        [
                            'public/js/bundle.js'
                        ]
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'public/css/style.css': ['public/css/style.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['resources/assets/js/*.js','resources/assets/css/*.css'],
                tasks: ['concat','browserify','concat_css'],
                options: {
                    spawn: false,
                },
            }
        },
        concat_css: {
            all: {
                src: ["resources/assets/css/*.css"],
                dest: "public/css/style.css"
            },
        },

    });

    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('dev', ['concat','browserify','concat_css','watch']);
    grunt.registerTask('stage', ['concat','browserify','concat_css']);
    grunt.registerTask('prod', ['concat','browserify','concat_css','uglify','cssmin']);
};

