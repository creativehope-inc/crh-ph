# Javascript Basics

## Summary of Topics
- Variables
- Data Types
- Type Conversions
- Operators
- Comparisons
- Conditional Operators
- Logical Operators
- Loop
- Switch
- Functions
- Function expressions
- Arrow Functions

## Variables

Variables is declared in 3 ways:
- `let` 
- `const` - allows variables to be defined but not overriden. Commonly used for constants
- `var`

**let**
Allows variables to be defined and then overridden. Commonly used for any variable declaration.

**const**
Allows variables to be defined but not overridden. Commonly used for constants or runtime objects that won't change.

**var**
pre-ES6 variable declaration. It works the same way as `let`, which means we write constants in overridable variables - yowza!

[Further Reading](https://javascript.info/variables)

## Data Types

8 basic data types in JS:
- `numbers` - for integers or floating-point, it has limits in length
- `bigint` - for integers with arbitrary length
- `string` - for strings
- `boolean` - for true/false
- `null` - for unknown values
- `undefined` - for unassigned values
- `object` - for complex data structures
- `symbol` - for unique identifiers

[Further Reading](https://javascript.info/types)

## Type Conversions

Three most widely used conversions are:

**String Conversions**

```js
String(null) // "null"
```

**Numeric Conversions**

```js
Number("1") // 1
```

There are rules for numeric conversion:

| Value | Becomes |
| --- | --- |
| undefined | NaN |
| null | 0 |
| true / false | 1 / 0 |
| string | The string is read “as is”, whitespaces from both sides are ignored. An empty string becomes 0. An error gives NaN. |

**Boolean Conversion**

```js
Boolean(1) // true
```

| Value | Becomes |
| --- | --- |
| 0, null, undefined, NaN, "" | false |
| any other value | true | 

[Further Reading](https://javascript.info/type-conversions)

## Operators
**TODO: Fill in later**

[Further Reading](https://javascript.info/operators)

## Comparisons

- Comparison operators return a boolean value.
- Strings are compared letter-by-letter in the “dictionary” order.
- When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
- The values null and undefined equal == each other and do not equal any other value.
- Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.

[Further Reading](https://javascript.info/comparison)

## Test Yourself

- Create array manipulation library for Filter, Map, Reduce, Head, Compact, Join
- Bob

## References

- https://javascript.info/
