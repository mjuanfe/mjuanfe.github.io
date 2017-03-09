var Metalsmith  = require('metalsmith');
//var collections = require('metalsmith-collections');
var layouts     = require('metalsmith-layouts');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');


Metalsmith(__dirname)          // instantiate Metalsmith in the cwd
  .source('./src/content')        // specify source directory
  .destination('dest')     // specify destination directory
  .use(markdown())             // transpile markdown into html
  //.use(permalinks())
  .use(layouts({               // wrap a handlebars-layout
    engine: 'handlebars',
    directory: './src/layouts',
    partials: './src/layouts/partials'      // around transpiled html-files
  }))
  .build(function(err) {       // this is the actual build process
    if (err) throw err;    // throwing errors is required
  });
