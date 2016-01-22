'use strict';

var _ = require('underscore');
var Backbone = require('backbone');

var fill = function(object, properties) {
  for (var name in properties) {
    if (typeof object[name] !== 'undefined' && typeof object[name] !== 'function') {
      object[name] = properties[name];
    }
  }
};

var Component = Backbone.Component = function(config) {
  this.cid = _.uniqueId('c');
  config && fill(this, config);
  this.initialize.call(this, config);
};

if(window) {
  !window.Backbone && (window.Backbone = {});
  window.Backbone.Component = Component;
}

_.extend(Component.prototype, Backbone.Events, {
  initialize: function() {},
  configure: function() {}
});

Component.extend = Backbone.Model.extend;

module.exports = Component;
