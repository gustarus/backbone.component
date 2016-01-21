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

  if (config && this.properties instanceof Array && this.properties.length) {
    fill(this, this.properties, config);
  }

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
