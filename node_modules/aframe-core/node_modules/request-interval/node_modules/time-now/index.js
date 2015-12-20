'use strict';

module.exports = (function() {
  var perf = window && window.performance;
  if (perf && perf.now) {
    return perf.now.bind(perf);
  } else {
    return function() {
      return new Date().getTime();
    };
  }
}());
