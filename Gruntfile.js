module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        folder: {
            components: 'bower_components',
            src: 'resources',
            dist: 'public'
        },
        concat:
        {
            site: {
                src: [
                    '<%=folder.components%>/jquery/dist/jquery.js',

                    // Twitter bootstrap
                    // '<%=folder.components%>/bootstrap/js/affix.js',
                    // '<%=folder.components%>/bootstrap/js/alert.js',
                    // '<%=folder.components%>/bootstrap/js/button.js',
                    // '<%=folder.components%>/bootstrap/js/carousel.js',
                    // '<%=folder.components%>/bootstrap/js/collapse.js',
                    // '<%=folder.components%>/bootstrap/js/dropdown.js',
                    // '<%=folder.components%>/bootstrap/js/modal.js',
                    // '<%=folder.components%>/bootstrap/js/tooltip.js',
                    // '<%=folder.components%>/bootstrap/js/popover.js',
                    // '<%=folder.components%>/bootstrap/js/scrollspy.js',
                    // '<%=folder.components%>/bootstrap/js/tab.js',
                    // '<%=folder.components%>/bootstrap/js/transition.js',

                    // Others
                    '<%=folder.src%>/js/*.js'

                ],
                dest: '<%=folder.dist%>/js/site.js'
            },
            modernizr: {
                src: [
                    '<%=folder.components%>/modernizr/modernizr.js'
                ],
                dest: '<%=folder.dist%>/js/modernizr.js'
            }
        },

        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            all: {
                files: [{
                    expand: true,
                    cwd: '<%=folder.dist%>/js',
                    src: '**/*.js',
                    dest: '<%=folder.dist%>/js'
                }]
            }

        },
        less: {
            application: {
                options: {
                    paths: [
                        "<%=folder.components%>",
                        "<%=folder.src%>/less"
                    ],
                    yuicompress: false
                },
                files: {
                    "<%=folder.dist%>/css/screen.css": "<%=folder.src%>/less/css-screen.less"
                }
            }
        },
        watch: {
            js: {
                files: '<%= folder.src %>/js/**/*.js',
                tasks: ['js']
            },
            less: {
                files: '<%= folder.src %>/less/**',
                tasks: ['css']
            }
        },
        autoprefixer: {
            options: {
                browsers: ['> 3% in BE', 'ie 8', 'ie 9']
            },
            your_target: {
                files: [{
                    expand: true,
                    cwd: '<%=folder.dist%>/css',
                    src: '**/*.js',
                    dest: '<%=folder.dist%>/css'
                }]
            }
        },
        cssmin: {
            options: {
                // Task-specific options go here.
            },
            your_target: {
                files: [{
                    expand: true,
                    cwd: '<%=folder.dist%>/css',
                    src: '**/*.js',
                    dest: '<%=folder.dist%>/css'
                }]
            }
        }

    });

    // Load tasks from "grunt-sample" grunt plugin installed via Npm.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('js', ['concat']);
    grunt.registerTask('css', ['less', 'autoprefixer']);
    grunt.registerTask('build', ['css', 'js']);

    // Default task.
    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('deploy', ['default', 'uglify', 'cssmin']);

};