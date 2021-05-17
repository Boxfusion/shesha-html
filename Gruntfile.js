module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n'
            },
            dist: {
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: 'src/',
                    src: ['**/*.js'],
                    dest: 'build/',
                    ext: '.min.js'
                }]
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: 'src/',
                    src: ['**/*.scss'],
                    dest: 'build/',
                    ext: '.css'
                }]
            }
        }
    });

    // Load required plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'sass']);

};