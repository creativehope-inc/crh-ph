# JS Objects and Classes

## Summary of Topics
- What are objects
- When to use objects
- Copying and comparing objects
- `this` keyword
- Object constructors
- Classes
- Inheritance
- Static properties
- Private and protected properties
- Mixins

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
for (key in object) {
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
