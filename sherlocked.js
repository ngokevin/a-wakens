// Visual regression test script for Sherlocked.
require('sherlocked')

.investigate('Audioworld', function(client) {
  return client
    .setViewportSize({width: 1050, height: 2048})
    .url('http://localhost:5050');
    .waitForExist('canvas', 60000);
});
