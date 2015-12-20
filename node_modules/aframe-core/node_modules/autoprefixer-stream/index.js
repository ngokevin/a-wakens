'use strict'

var autoprefixer = require('autoprefixer-core')
var postcss = require('postcss')
var path = require('path')
var PassThrough = require('readable-stream').PassThrough
var transformify = require('transformify')

module.exports = function autoprefixer (file, opts) {
  if (file && path.extname(file) !== '.css') {
    return new PassThrough()
  }
  return prefixer()
}

var prefixer = transformify(prefix)

function prefix (css) {
  return postcss([autoprefixer]).process(css).css
}
