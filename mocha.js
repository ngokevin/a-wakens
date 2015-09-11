var babel = require('babel');
var fs = require('fs');


var origJs = require.extensions['.js'];


function transform(filename) {
  // Transform a file via JSX/Harmony or stubbing.
  var content = fs.readFileSync(filename, 'utf8');
  return babel.transform(content, {
    optional: ['runtime'],
    stage: 0
  }).code
}


require.extensions['.js'] = function(module, filename) {
  // Install the compiler.
  if (filename.indexOf('audioworld/node_modules/') >= 0) {
    // Skip Node modules.
    return (origJs || require.extensions['.js'])(module, filename);
  }

  return module._compile(transform(filename), filename);
};
