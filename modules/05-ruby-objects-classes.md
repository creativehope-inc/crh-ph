# Ruby Objects and Classes

## Summary of Topics
- Classes
- Inheritance
- Objects
- `self` keyword
- Class methods
- Private, public, protected properties
- Modules

## Classes

Classes are blueprints of objects. They allow you to create objects with initial values for state and implementations of behaviour.

```ruby
class Customer
  def initialize(name)
    @name = name
  end

  def name
    @name
  end

  def name=(new_name)
    @name = new_name
  end
end

customer = Customer.new('george')
customer.name #=> george
customer.name = 'billy'
customer.name #=> billy
```

[Further Reading](https://www.tutorialspoint.com/ruby/ruby_classes.htm)

## Inheritance

Inheritance provides us to reuse code across a hierarchy of classes. Ruby classes only inherit into one class but
it supports mixins.

```ruby
class User
  def name
    'User'
  end
end

class Admin < User
  def name
    'Admin ' + super
  end
end

user = User.new
admin = Admin.new

user.name #=> User
admin.name #=> Admin User
```

User is Admin's superclass. Admin is a subclass of User.

```ruby
Admin.superclass #=> User
```

## Object

Everything in ruby is an object. Everything is an instance of some class, and everything is just a method a particular class.

```ruby
1 + 1 # => 2
1.+(1) # => 2

class Integer
  def +(value)
    5
  end
end

1 + 1 #=> 5
```

Instead of having defined it's own constructs, most operators in ruby are just syntactic sugar and can be overridden.

[Further Reading](https://www.eriktrautman.com/posts/ruby-explained-objects-and-methods)

## Self

`self` is like `this` in javascript. It's a special variable that points to the object that "owns" the currently
executing code.

```ruby
self #=> main

class User
  self #=> User

  def name
    self #=> Instance of User
    'User'
  end
end
```

`self` changes per `class/module` keyword and per block keyword.

Methods have an implicit `self` when called

```ruby
class User
  def hello
    # This method call is the same as the one below
    name 

    self.name
  end

  def name
    'George'
  end
end
```

`#name` has an implicit `self`, which is the instance of the class User.

[Further Reading](https://www.honeybadger.io/blog/ruby-self-cheat-sheet/)

## Class methods

Class methods are static methods in javascript. These are methods that are directly callable on the class itself and not on the instance.
They are also called singleton methods.

```ruby
class User
  def self.name
    'User'
  end
end

User.name #=> User
```

## Private, public, protected properties

Public methods are callable from the outside of the object.
Private methods are callable only inside methods of the same object.
Protected methods are callable only from inside methods of the same class.

```ruby
class User

  def public_method
    'public'
  end

  def method_to_use_protected(another_user)
    another_user.protected_method
  end

  def method_to_use_private
    private_method
  end

  protected

  def protected_method
    'protected'
  end

  private

  def private_method
    'private'
  end
end

user1 = User.new
user2 = User.new

user1.public_method #=> public
user1.private_method #=> NoMethodError (private method `private_method' called for User)
user1.protected_method #=> NoMethodError (protected method `protected_method' called for User)

user1.method_to_use_private #=> private
user1.method_to_user_protected(user2) #=> protected
```

[Further Reading](https://www.tutorialspoint.com/ruby/ruby_object_oriented.htm)

## Modules

Modules are the same as classes except they can't be instantiated. They are mostly included or used as class methods.

```ruby
module CanHowl
  def howl
    'Howl!'
  end
end

class Dog
  include CanHowl
end

class Wolf
  extend CanHowl
end

Dog.new.howl #=> Howl!
Wolf.howl #=> Howl!
```

They are called mixins as well. They can be mixed-in (wink wink) other classes so their methods can be inherited.

[Further Reading](http://ruby-for-beginners.rubymonstas.org/advanced/modules.html)
