---
title: "Installing Python"
slug: "python-installation"
module: "python-getting-started"
order: 2
---

Let's get Python installed on your computer and write your first program.

## Downloading Python

1. Go to [python.org/downloads](https://www.python.org/downloads/)
2. Download the latest Python 3.x version
3. Run the installer

### Important: Add Python to PATH

During installation on Windows, **check the box that says "Add Python to PATH"**. This is crucial for running Python from the command line.

## Verifying Installation

Open a terminal (Command Prompt on Windows, Terminal on Mac/Linux) and type:

```bash
python --version
```

You should see something like:

```
Python 3.12.0
```

On some systems, you may need to use `python3` instead of `python`.

## The Python Interpreter

Python comes with an interactive interpreter (REPL - Read, Eval, Print, Loop). Start it by typing:

```bash
python
```

You'll see a prompt like this:

```
Python 3.12.0 (default, Oct  2 2023, 00:00:00)
>>>
```

Try some simple expressions:

```python
>>> 2 + 2
4
>>> "Hello" + " World"
'Hello World'
>>> print("Python is awesome!")
Python is awesome!
```

Type `exit()` or press `Ctrl+D` to leave the interpreter.

## Setting Up a Code Editor

While you can write Python in any text editor, we recommend **Visual Studio Code**:

1. Download from [code.visualstudio.com](https://code.visualstudio.com)
2. Install the **Python extension** by Microsoft

This gives you:
- Syntax highlighting
- Code completion
- Debugging support
- Integrated terminal

## Your First Python Script

1. Create a new folder for your Python projects
2. Open VS Code and open that folder
3. Create a new file called `hello.py`
4. Add this code:

```python
# My first Python program
print("Hello, World!")
print("Welcome to Python!")

name = "Student"
print(f"Nice to meet you, {name}!")
```

## Running Your Script

### Option 1: VS Code
- Click the "Run" button (play icon) in the top right
- Or press `F5`

### Option 2: Terminal
Navigate to your file's directory and run:

```bash
python hello.py
```

You should see:

```
Hello, World!
Welcome to Python!
Nice to meet you, Student!
```

Congratulations! You've written and run your first Python program.
