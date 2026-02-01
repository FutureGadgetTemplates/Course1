---
title: "Variables and Assignment"
slug: "python-variables"
module: "python-variables-types"
order: 1
---

Variables are containers for storing data values. In Python, creating variables is simple and intuitive.

## Creating Variables

Unlike some languages, Python doesn't require you to declare variable types:

```python
# Creating variables
name = "Alice"
age = 25
height = 5.6
is_student = True
```

The `=` sign is the **assignment operator**. It assigns the value on the right to the variable on the left.

## Variable Naming Rules

Python has specific rules for variable names:

**Valid names:**
```python
name = "Alice"
user_name = "bob123"
userName = "Charlie"
_private = "secret"
count2 = 42
```

**Invalid names:**
```python
2count = 42      # Can't start with a number
user-name = "x"  # No hyphens allowed
class = "Math"   # Can't use reserved words
```

## Naming Conventions

Python uses **snake_case** by convention:

```python
# Recommended (snake_case)
first_name = "Alice"
total_count = 100
is_valid = True

# Not recommended (but valid)
firstName = "Alice"  # camelCase
FirstName = "Alice"  # PascalCase
```

## Reassigning Variables

Variables can be reassigned to new values, even of different types:

```python
x = 10
print(x)  # 10

x = "Hello"
print(x)  # Hello

x = 3.14
print(x)  # 3.14
```

## Multiple Assignment

Python allows assigning multiple variables at once:

```python
# Assign same value to multiple variables
a = b = c = 0

# Assign different values in one line
x, y, z = 1, 2, 3

# Swap values (Python makes this easy!)
a, b = b, a
```

## Constants

Python doesn't have true constants, but by convention, we use UPPERCASE for values that shouldn't change:

```python
PI = 3.14159
MAX_SIZE = 100
DATABASE_URL = "localhost:5432"
```

## Checking Variable Types

Use `type()` to see what type a variable holds:

```python
name = "Alice"
age = 25
price = 19.99
active = True

print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>
print(type(price))   # <class 'float'>
print(type(active))  # <class 'bool'>
```

## Practice

Try these exercises in the Python interpreter:

1. Create variables for your name, age, and favorite number
2. Print each variable using `print()`
3. Check the type of each variable using `type()`
4. Try swapping two variables using multiple assignment

```python
# Example solution
my_name = "Your Name"
my_age = 20
favorite_number = 7

print(my_name)
print(my_age)
print(favorite_number)

print(type(my_name))
print(type(my_age))
print(type(favorite_number))
```
