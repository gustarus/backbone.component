const expect = require('chai').expect;

const Backbone = require('backbone');
const Component = require('../index');

describe('Component', function() {
  it('Should be a constructor.', function() {
    expect(Component).to.be.an('function');
  });

  it('Should be a part of Backbone.', function() {
    expect(Backbone).to.have.property('Component', Component);
  });

  it('Should have the "on" method.', function() {
    expect(Component.prototype.on).to.be.an('function');
  });

  it('Should have the "off" method.', function() {
    expect(Component.prototype.off).to.be.an('function');
  });

  it('Should have the "stopListening" method.', function() {
    expect(Component.prototype.stopListening).to.be.an('function');
  });

  it('Should have the "once" method.', function() {
    expect(Component.prototype.once).to.be.an('function');
  });

  it('Should have the "listenToOnce" method.', function() {
    expect(Component.prototype.listenToOnce).to.be.an('function');
  });

  it('Should have the "trigger" method.', function() {
    expect(Component.prototype.trigger).to.be.an('function');
  });

  it('Should have the "bind" method.', function() {
    expect(Component.prototype.bind).to.be.an('function');
  });

  it('Should have the "unbind" method.', function() {
    expect(Component.prototype.unbind).to.be.an('function');
  });

  it('Should have the "configure" method.', function() {
    expect(Component.prototype.configure).to.be.an('function');
  });

  it('Should set properties from first constructor argument.', function() {
    var properties = {name: 'John', portfolio: ['Picture', 'Video']};
    var instance = new Component(properties);
    expect(instance).to.have.property('name', properties.name);
    expect(instance).to.have.property('portfolio', properties.portfolio);
  });

  it('Should cause error on existed method.', function() {
    var properties = {method: null};
    var Model = Component.extend({
      method: function() {
        console.log('hello');
      }
    });

    function constructor() {
      return new Model(properties);
    }

    expect(constructor).to.throw(Error);
  });

  it('Should call initialize error with undefined arguments.', function() {
    var name = 'Boris';
    var Model = Component.extend({
      name: 'John',
      initialize: function(argument) {
        this.name = name;
        this.argument = argument;
      }
    });

    var instance = new Model;

    expect(instance).to.have.property('name', name);
    expect(instance).to.have.property('argument', undefined);
  });
});
