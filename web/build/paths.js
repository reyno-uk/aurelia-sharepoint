var appRoot = 'src/';
var outputRoot = 'dist/';
var exportRoot = 'export/'

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  html: appRoot + '**/*.html',
  less: appRoot + '**/*.less',
  output: outputRoot,
  export: exportRoot
}