'use strict';

var _ = require('underscore');
var Backbone = require('backbone');

var fill = function(object, properties, source) {
  for (var i in properties) {
    if (typeof source[properties[i]] !== 'undefined') {
      object[properties[i]] = source[properties[i]];
    }
  }
};

var Component = Backbone.Component = function(config) {
  this.cid = _.uniqueId('c');
  this.properties && this.properties instanceof Array && fill(this, this.properties, config);
  this.configure.apply(this, arguments);
  this.initialize.apply(this, arguments);
};

if (window) {
  !window.Backbone && (window.Backbone = {});
  window.Backbone.Component = Component;
}

_.extend(Component.prototype, Backbone.Events, {
  initialize: function() {},
  configure: function() {}
});

Component.extend = Backbone.Model.extend;

module.exports = Component;
