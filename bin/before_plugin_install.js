var path = require ('path'),
      pathParse = require ('./lib/path-parse');

module.exports = function (context) {
  path.parse = path.parse || pathParse;

  return true;
};
