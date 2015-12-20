var tape = require('tape');
var now = require('../');

tape('time-now', function(test) {
  test.plan(2);

  test.equal(typeof now, 'function');

  var start = now();

  setTimeout(function() {
    test.ok(100 <= now() - start < 110);
    test.end();
  }, 100);
});
