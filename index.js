'use strict';

var _ = require('underscore');
var Backbone = require('backbone');

var Component = Backbone.Component = function(properties) {
  this.cid = _.uniqueId('c');
  this.configure(properties);
  this.initialize && this.initialize();
};

_.extend(Component.prototype, Backbone.Events, {
  configure: function(properties) {
    for (var name in properties) {
      if (typeof this[name] !== 'function') {
        this[name] = properties[name];
      } else {
        throw new Error('You can not override the method "' + name + '" via component constructor. For this use "Component.extend()" method.');
      }
    }
  }
});

Component.extend = Backbone.Model.extend;

module.exports = Component;
