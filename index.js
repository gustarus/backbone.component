'use strict';

var _ = require('underscore');
var Backbone = require('backbone');

var Component = Backbone.Component = function(config) {
  this.cid = _.uniqueId('c');
  this.configure.apply(this, arguments);
  this.initialize.apply(this, arguments);
};

if (window) {
  !window.Backbone && (window.Backbone = {});
  window.Backbone.Component = Component;
}

_.extend(Component.prototype, Backbone.Events, {
  configure: function(config) {
    for (var name in config) {
      if (typeof this[name] !== 'function') {
        this[name] = config[name];
      } else {
        throw new Error('You can not override the method "' + name + '" via component constructor. For this use "Component.extend()" method.');
      }
    }
  },
  
  initialize: function(config) {
    return true;
  }
});

Component.extend = Backbone.Model.extend;

module.exports = Component;
