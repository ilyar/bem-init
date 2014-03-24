'use strict';

var Q = require('q');

module.exports = function() {

  return this
      .title('init command')
      .helpful()
      .opt()
      .name('version').title('Show version')
      .short('v').long('version')
      .flag()
      .only()
      .act(function() {
        var p = require('../package.json');
        return p.name + ' ' + p.version;
      })
      .end()
      .act(function() {
        return Q.resolve('It works!');
      });

};
