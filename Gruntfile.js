module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'public/css/global.css': 'assets/scss/global.scss'
                }
            },
            dev: {
                options: {
                    sourceMap: true
                },
                files: {
                    'public/css/global.css': 'assets/scss/global.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'assets/scss/**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
            options: {
               reload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);

};