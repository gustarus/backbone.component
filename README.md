# Backbone model without attributes
This package describes light version of the [Backbone.Model](http://backbonejs.org/#Model). You can use this component when you doesn't need the Backbone.Model attributes functionality like [model.set()](http://backbonejs.org/#Model-set) or [model.get()](http://backbonejs.org/#Model-get) methods and change events. But this component have all [Backbone.Events](http://backbonejs.org/#Events) functionality.

## Properties assign functionality
This component have a properties-assign login. This means, that when you create the component, you can pass object with properties in first constructor argument. Look at the example below.

## Usage example
You can find this code in [sample folder](https://github.com/gustarus/backbone.component/blob/release/v1.0.0/sample/index.js).
```javascript
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
```

Also you can run this code from console from your project folder.
```bash
node ./node_modules/backbone.component/sample/index.js
```
