module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      version: '<%= pkg.version %>',
      banner:
        '// arrg\n' +
        '// v<%= pkg.version %>\n' +
        '//\n' +
        '// Copyright (c)<%= grunt.template.today("yyyy") %> Tan Nguyen\n' +
        '// Distributed under MIT license\n' +
        '//\n'
    },

    preprocess: {
      amd: {
        src: 'src/amd.js',
        dest: 'build/arrg.amd.js'
      },
      direct: {
        src: 'src/arrg.core.js',
        dest: 'build/arrg.js'
      }
    },

    uglify : {
      options: {
        banner: "<%= meta.banner %>"
      },
      amd : {
        src : 'build/arrg.amd.js',
        dest : 'build/arrg.amd.min.js',
      },
      direct: {
        src : 'build/arrg.js',
        dest : 'build/arrg.min.js',
      }
    },

    mochaTest: {
      test: {
        src: ['tests.js'],
      },
    },

    jshint: {
      options: {
        jshintrc : '.jshintrc'
      },
      arrg : [ 'src/arrg.core.js' ]
    }
  });

  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['preprocess', 'jshint', 'uglify']);
  grunt.registerTask('test', ['build', 'mochaTest']);
  grunt.registerTask('default', ['test', 'build']);

};