/* global module */
/* global require */

module.exports = function() {
  var appSrc='./src/';

  var config={
    temp: './.tmp/',

    mainJsFile: appSrc+'js/inputWithSeparator.js',

    // all js to vet
    alljs: ['./*.js','./src/js/*.js'],
    allcss: [appSrc+'*.css',appSrc+'css/*.css'],
    allhtml: [appSrc+'*.html',appSrc+'html/*.html'],
    index: './src/index.html',
    js: [appSrc+'js/*.js'],
    css: [appSrc+'*.css',appSrc+'css/*.css'],
//    less: ['./src/*.less','./src/modules/less/*.less'],

    bower: {
      json: require('./bower.json'),
      directory: './src/lib/',
      ignorePath: '..'
    },

    optimized: {
      lib: 'lib.js',
      app: 'app.js'
    },

    htmlAngularValidate: {
      customattrs: ['number-system'],
      customtags: ['input-with-separator']
    },

    source: appSrc,
    build: './gh-pages/',
    dist: './dist/',
    resources: './src/resources/*',
    images: './src/resources/images/*',
    json: './src/resources/json/*.json',

//    htmltemplates: [appSrc+'**/**/*.html',appSrc+'**/*.html'],
//    templateCache: {
//      file: 'templates.js',
//      options: {
//        module: 'app.core',
//        standAlone: true,
//        root: 'app/'
//      }
//    }

  };

  config.getWiredepDefaultOptions = function() {
    var options = {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath
    };
    return options;
  };

  config.getWebserverOptions = function() {
    var options = {
      livereload: true,
      directoryListing: false,
      open: true,
      host: 'localhost',
      port: 3000,
      path: '/',
      https: false
    };
    return options;
  }

  return config;
}
