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

[Further Reading](https://javascript.info/operators)

## Comparisons

```js
a > b
a < b
a >= b
a <= b
a != b
a == b
a === b // strict equality
```

- Comparison operators return a boolean value.
- Strings are compared letter-by-letter in the “dictionary” order.
- When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
- The values null and undefined equal == each other and do not equal any other value.
- Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.

[Further Reading](https://javascript.info/comparison)

## Conditionals Operators

```js
// Execute code block if condition is truthy
if (...) {}

// Execute "if" clause if condition is truthy, otherwise execute "else" clause
if (…) { … } else { … }

// Shortened if-else clause
condition ? value1 : value2

// Execute "if" clause if condition is truthy. If falsy, go to next "else-if" clause and evaluate condition
if (…) { … } else if { … }
```

[Further Reading](https://javascript.info/ifelse)

## Logical Operators

```js
// Logical OR
// returns a if a is truthy; otherwise returns b
a || b

// Logical AND
// returns a if a is falsy; otherwise returns b
a && b

// Not
// Reverse a truthy value
!a
```

- Precedence of `&&` is higher than `||`

[Further Reading](https://javascript.info/logical-operators)

## Loop

```js
// Execute while condition is true
while(…) {}

// Execute once and continue while conditionis true
do { … } while ( … );

// Execute for a number of times
for (begin; condition; step) {}

// Use "break" to exit the loop
while(…) { break; }

// Use "continue" to move on the next iteration
while(…) { continue; }
```

[Further Reading](https://javascript.info/while-for)

## Switch Case

Use switch case when you have multiple if clauses that need to be simplified.

```js
let arg = prompt("Enter a value?"); // String return
switch (arg) {
  case '0': // if arg is 0, execute the code block below it (the one in case 1)
  case '1': // if arg is 1, execute code block, then end the switch case
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3: // This never executes because 3 is an integer and not a string, type matters
    alert( 'Never executes!' );
    break;
  default: // Else case, executes when no condition is matched above
    alert( 'An unknown value' );
}
```

[Further Reading](https://javascript.info/switch)

## Test Yourself

- Create array manipulation library for Filter, Map, Reduce, Head, Compact, Join
- Bob

## References

- https://javascript.info/
