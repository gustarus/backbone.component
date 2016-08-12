'use strict';

const Component = require('../index');

const Person = Component.extend({
  name: null
});

const Man = Person;

const Woman = Person.extend({
  want(target) {
    this.trigger('want', target);
  }
});

let john = new Man({name: 'John'});
let kate = new Woman({name: 'Kate'});

john.listenTo(kate, 'want', target => {
  console.log(`Kate, ${target} is really expensive!`);
});

kate.want('car');
