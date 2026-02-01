---
title: "Basic Data Types"
slug: "python-data-types"
module: "python-variables-types"
order: 2
---

Python has several built-in data types. Let's explore the most fundamental ones.

## Numbers

### Integers (int)

Whole numbers, positive or negative:

```python
count = 42
temperature = -5
big_number = 1_000_000  # Underscores for readability

print(type(count))  # <class 'int'>
```

### Floating-Point (float)

Numbers with decimal points:

```python
price = 19.99
pi = 3.14159
scientific = 2.5e6  # 2,500,000

print(type(price))  # <class 'float'>
```

### Numeric Operations

```python
# Basic math
print(10 + 3)   # 13 (addition)
print(10 - 3)   # 7 (subtraction)
print(10 * 3)   # 30 (multiplication)
print(10 / 3)   # 3.333... (division)
print(10 // 3)  # 3 (floor division)
print(10 % 3)   # 1 (modulo/remainder)
print(10 ** 3)  # 1000 (exponentiation)
```

## Strings (str)

Text data enclosed in quotes:

```python
# Single or double quotes work the same
name = "Alice"
message = 'Hello, World!'

# Triple quotes for multi-line strings
poem = """Roses are red,
Violets are blue,
Python is awesome,
And so are you!"""
```

### String Operations

```python
first = "Hello"
last = "World"

# Concatenation
full = first + " " + last  # "Hello World"

# Repetition
laugh = "ha" * 3  # "hahaha"

# Length
print(len(full))  # 11

# Indexing (0-based)
print(first[0])   # "H"
print(first[-1])  # "o" (last character)

# Slicing
print(first[1:4]) # "ell"
```

### String Methods

```python
text = "Hello, World!"

print(text.lower())      # "hello, world!"
print(text.upper())      # "HELLO, WORLD!"
print(text.replace("World", "Python"))  # "Hello, Python!"
print(text.split(", "))  # ["Hello", "World!"]
```

### F-Strings (Formatted Strings)

The modern way to embed variables in strings:

```python
name = "Alice"
age = 25

# F-string (recommended)
message = f"My name is {name} and I am {age} years old."

# You can include expressions
print(f"Next year I'll be {age + 1}")
```

## Booleans (bool)

True or False values:

```python
is_active = True
is_admin = False

print(type(is_active))  # <class 'bool'>
```

### Comparison Operators

```python
x = 10
y = 5

print(x == y)   # False (equal)
print(x != y)   # True (not equal)
print(x > y)    # True (greater than)
print(x < y)    # False (less than)
print(x >= y)   # True (greater or equal)
print(x <= y)   # False (less or equal)
```

### Logical Operators

```python
a = True
b = False

print(a and b)  # False
print(a or b)   # True
print(not a)    # False
```

## None Type

Represents the absence of a value:

```python
result = None

if result is None:
    print("No result yet")
```

## Type Conversion

Convert between types:

```python
# String to integer
num_str = "42"
num = int(num_str)  # 42

# Integer to string
age = 25
age_str = str(age)  # "25"

# String to float
price_str = "19.99"
price = float(price_str)  # 19.99

# Float to integer (truncates)
x = int(3.7)  # 3
```

## Practice

1. Create variables of different types and print their types
2. Practice string operations: concatenation, slicing, methods
3. Use f-strings to create formatted messages
4. Experiment with type conversion

```python
# Example
num = 100
text = "Python"
price = 29.99

print(f"The number is {num}")
print(f"The word '{text}' has {len(text)} letters")
print(f"The price is ${price:.2f}")
```
