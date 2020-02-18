# JS Objects and Classes

## Summary of Topics
- What are objects
- When to use objects
- Copying and comparing objects
- `this` keyword
- Classes
- Inheritance
- Static properties and methods
- Private and protected properties

## What are Objects

Objects are used to store keyed collections of various data and more complex entities. Often times, it's used to represent entities in the real world.

Objects are created with `{ … }` with an optional list of properties.

**Property**

A property is a "key: value" pair, where `key` is a string and value can be anything.

```js
{
  key: 'value'
}
```

We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file

**Referencing properties**

```js
let object = {
  key: 'value'
}

object.key // value
object['key'] // value
```

The difference mainly is the first one - dot notation (`object.key`) requires you to know the key before compile time. The second - brackets (`[]`) allows you
to supply a generated key during compile time.

**Computed properties**

Allows you to specify a field name in run time.

``js
let field = 'name'

let person = {
  [field]: 'John'
}

person.name // John
```

## When to use objects

As a data structure, you use objects when you need a collection of things where you need to pick one in particular. You use arrays when you need an ordered list
that you need to iterate through.

**Iterating across the object**

You can iterate across the object as well, although you cannot rely on the sequence of the keys.

```js
for (const key in object) {
// for every key in object
}
```

## Copying and Comparing Objects

Objects are copied by reference. Hence any comparison (`==` or `===`) would result into true as they are the same object.

```js
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true
```

[Further Reading](https://javascript.info/object)

## this keyword

`this` keyword allows you to reference the object's properties inside a function.

```js
let person = {
  name: 'John',

  getName () {
    return this.name; 
  }
}

person.getName() // John
```

**"this" is not bound**

Unlike other programming languages, `this` does not always have a value.

```js
function getName () {
  return this.name;
}

let person1 = { name: 'John' }
let person2 = { name: 'Valjean' }

getName() // undefined
person1.getName = getName
person2.getName = getName

person1.getName() // John
person2.getName() // Valjean
```

**"this" changes inside functions**

```js
function first () {
  this // first this

  function second () {
    this // second this
  }
}
```

Example:
```js
const counter = {
  count: 0,
  increase () {
    setInterval(function () {
      console.log(++this.count);
    }, 1000);
  }
}
counter.increase();
```

This would display a series of `NaN` because it does not refer to the object's `this`.

Solution:
```js
const counter = {
  count: 0,
  increase () {
    setInterval (() => {
      console.log (++this.count);
    }, 1000);
  },
};
counter.increase();
```

This would result in a counter every second. 

**Arrow functions**

Arrow functions take the `this` of the context where they are defined. Also, the `this` value inside an arrow function also cannot be set explicitly.

```js

const getName = () => this.name

getName() // undefined
let person = { name: 'John', getName: getName }

person.getName() // undefined

this.name = "global"

getName() // global
person.getName() // global
```

**Binding**

You can bind a function into an object. This would point `this` as that object.

```js
function unboundFunction () {
  return this.name;
}

const user = { name: 'John' }

unboundFunction() // undefined
const boundFunction = unboundFunction.bind(user)
boundFunction() // John

// To call immediately
unboundFunction.call(user) // John
```

This is important for callbacks where the functions is being called inside other functions.

[Further Reading](https://javascript.info/object-methods)

## Classes

Classes are blueprints of objects. They allow you to create objects with initial values for state and implementations of behaviour.

```js
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

```js
class User {
  // Property
  height = 50;

  // Initial State
  constructor(name) {
    this.name = name;
  }

  // Behaviour
  sayHi() {
    return this.name;
  }
}

// Usage:
let user = new User("John");
user.sayHi();
```

**Getters and Setters**

```
class User {

  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    console.log('setter')
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let user = new User("John");
user.name; // John

user = new User(""); // Name is too short
user.name = 'George'
```

[Further Reading](https://javascript.info/class)

## Inheritance

Inheritance allows you to extend the functionality of an existing class by copying the functions over into the new class.

```js
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return this.name;
  }
}

class Admin extends User {
  sayNo() {
    return 'no!';
  }
}

const admin = new Admin('John');
admin.sayHi() // John
admin.sayNo() // no!
```

**Overriding methods**

You can override methods within a class fully or partially.

```js
class User { … } // as defined above

class Admin extends User {
  // Fully overrides sayHi to its own function
  sayHi() {
    return 'hi!'
  }
}

class Client extends User {
  // Partially overrides constructor
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  // Partially overrides sayHi
  sayHi() {
    return `Hi ${super.sayHi()} ${this.age}`
  }
}
```
`super` keyword allows previously defined methods to be referenced inside the new definitions.

[Further Reading](https://javascript.info/class-inheritance)

## Static properties and methods

You can define properties and methods directly into the class and not into its objects. These are called static properties/methods.

```js
class User {
  static sayAll() {
    return 'helloAll';
  }
}

User.staticMethod(); // helloAll
```

**Inherited static properties/methods**

Static properties/methods can also be inherited.

```js
class User { … } // as defined earlier

class Admin extends User {}

Admin.sayAll // helloAll
```

[Further Reading](https://javascript.info/static-properties-methods)

## Private and Protected Properties and Methods

To hide an internal interface we use either protected or private properties:

- Protected fields start with _. Not enforced at the language level. Programmers should only access a field starting with _ from its class and classes inheriting from it.
- Private fields start with #. JavaScript makes sure we can only access those from inside the class.

Right now, private fields are not well-supported among browsers, but can be polyfilled.

[Further Reading](https://javascript.info/private-protected-properties-methods)
