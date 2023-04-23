// Karma configuration
// Generated on Wed Sep 07 2022 08:05:39 GMT+0300 (Israel Daylight Time)

const path = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: [
      'jasmine', // https://www.npmjs.com/package/karma-jasmine
      'esm', // https://www.npmjs.com/package/@open-wc/karma-esm/v/2.7.2
    ],

    // https://www.npmjs.com/package/@open-wc/karma-esm/v/2.7.2
    esm: {
      babel: true,
      // if you are using 'bare module imports' you will need this option
      nodeResolve: true,
      // set compatibility mode to all
      compatibility: 'auto',
      // fileExtensions: ['.ts']
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-spec-reporter',

      // load plugin
      require.resolve('@open-wc/karma-esm'),

      // fallback: resolve any karma- plugins
      'karma-*',
    ],

    // list of files / patterns to load in the browser
    files: [
      path.join(__dirname, './dist/mz-canvas.min.js'),
      // { pattern: 'test/**/*.test.js', type: 'module' },
      './test/*.test.js',
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: [
      // 'progress',
      'spec',
    ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    //autoWatch: false,

    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    //singleRun: true,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity
  })
}
