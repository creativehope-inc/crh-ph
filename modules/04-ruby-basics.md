# Ruby Basics

## Summary of Topics
- Variables
- Data Types
- Type Conversions
- Operators
- Comparisons
- Conditional Operators
- Case
- Logical Operators
- Loop
- Iterators
- Methods
- Blocks

## Variables

Variables are declared with no special keyword and no declaration of type. Any variable can take any value.

```ruby
a = 1
b = 2
c = a + b

puts c # => 3
```

## Data Types

- `Numbers` - for integers and floating-point numbers
- `String` - for strings
- `Symbol` - like strings but mainly used for identifiers
- `Booleans` - for true/false
- `Arrays` - ordered list data structure
- `Hash` - key-value store
- `Nil` - null value

```ruby
# Number
1 

# String
'test'
"test"

# Symbol
:test

# Boolean
true
false

# Array
[1, 2, 3]

# Hash
{ key1: 'value1' }
{ "key1" => 'value1' }

# Nil
nil
```

[Further Reading](http://zetcode.com/lang/rubytutorial/datatypes/)

## Type Conversions

```ruby
1.to_s #=> "1"
5.to_f #=> 5.0
'test'.to_sym #=> :test
nil.to_i #=> 0
```

[Further Reading](http://zetcode.com/lang/rubytutorial/datatypes/)

## Operators

| Operator | Example | Result |
| --- | --- | --- |
| + | 1 + 2 | 3 |
| - | 2 - 1 | 1 |
| * | 5 * 2 | 10 |
| / | 5 / 2 | 2 |
| % | 5 % 2 | 1 |
| ** | 5 ** 2 | 25 |

[Further Reading](https://www.tutorialspoint.com/ruby/ruby_operators.htm)

## Comparisons

| Operator | Example |
| --- | --- |
| == | 1 == 2 |
| != | 1 != 2 |
| > | 1 > 2 |
| < | 1 < 2 |
| >= | 1 >= 2 |
| <= | 1 <= 2 |

[Further Reading](https://www.tutorialspoint.com/ruby/ruby_operators.htm)

## Conditional Operators

In ruby, all values are true except for false and nil.

```ruby
# Common if-else statement
if condition1
  # code
elsif condition2
  # code
else
  # code
end

# Short hand if
puts "test" if condition

# If not
unless condition
  # code executes if condition is falsy
end

# Ternary operator
condition ? value1 : value2
```

## Case Statement

```ruby
case condition
when value1
  # code
when value2, value3
  # code
else
  # code
end
```

[Further Reading](https://www.tutorialspoint.com/ruby/ruby_if_else.htm)

## Logical Operators

| Operator | Description | Example | Result |
| --- | --- | --- | --- |
| && | If both operands are truthy, the condition is true and returns the last operand | 1 && 2 | 2 |
| \|\| | If one of the operands are truthy, the condition is true and returns the first truthy operand | 1 \|\| 3 | 1 |
| ! | Reverses truthy/falsy value | !true | false |

[Further Reading](https://www.tutorialspoint.com/ruby/ruby_operators.htm)

## Loop

```ruby
# Infinite loop
loop do
  # code
end

# While loop
i = 0

while i < 10 do
  # code
  i += 1
end

# For loop
for i in [1,2]
  puts i
end
```

[Further Reading](https://www.tutorialspoint.com/ruby/ruby_loops.htm)

## Iterators

```ruby
array = [1,2,3,4,5]

array.each do |value|
  puts value
end

array.map do |value|
  value + 1
end

array.reduce do |agg, value|
  agg += value
  agg
end
```

[Further Reading](https://www.tutorialspoint.com/ruby/ruby_iterators.htm)

## Methods

```ruby
  def hello(name, age = 10)
    "#{name} #{age}"
  end

  hello('jean') # => "jean 10"
  hello('john', 2) # => "john 2"
```

[Further Reading](https://www.tutorialspoint.com/ruby/ruby_methods.htm)

## Blocks

Blocks are chunks of code that can be passed around.

```ruby
# Syntax
{ … }
do … end

# Passing in to a method
def test
  yield
end

test { 'hello' } # => hello

def test(&block)
  block.call
end

test { 'hi' } # => hi

# Yield with params
def test(value)
  yield(value)
end

test(1) { |value| value } # 1

# &block with params
def test(value, &block)
  block.call(value)
end

test(5) { |value| value } # 5
```

[Further Reading](https://www.tutorialspoint.com/ruby/ruby_blocks.htm)
