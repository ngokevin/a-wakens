# autoprefixer-stream [![Build Status](https://travis-ci.org/ajoslin/autoprefixer-stream.svg?branch=master)](https://travis-ci.org/ajoslin/autoprefixer-stream)

> autoprefixer as a stream


## Install

```
$ npm install --save-dev autoprefixer-stream
```


## Usage

```js
var autoprefixerStream = require('autoprefixer-stream');

fs.createReadStream('file.css')
  .pipe(autoprefixerStream('file.css'))
  .pipe(fs.createWriteStream('file-prefixed.css'))
```

Or with browserify as a transform:

```js
{
  "browserify": {
    "transform": ["autoprefixer-stream"]
  }
}
```

## License

MIT © [Andrew Joslin](http://ajoslin.com)
