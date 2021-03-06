module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: 'package/*.js',
            options: {
                jshintrc: '.jshintrc'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> by <%= pkg.author %> created on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'package/Teleport.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        concat: {
            options: {
                separator: ';',
                stripBanners: true
            },
            dist: {
                src: 'package/Teleport.js',
                dest: 'dist/<%= pkg.name %>.js'
            },
            vendor: {
                src: 'package/Teleport.js',
                dest: 'example/js/vendor/<%= pkg.name %>/<%= pkg.name %>.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('default', ['test' ,'build']);

};