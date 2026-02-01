---
layout: default
title: "Guide: Adding Lessons"
---

# Adding Lessons to a Module

Lessons contain the actual course content. This guide explains how to create them.

## Step 1: Create the Lesson File

Create a new Markdown file in the course's lesson folder:

```
_lessons/your-course-name/01-lesson-name.md
```

Use number prefixes to maintain order within the course folder.

## Step 2: Add Front Matter

Every lesson file needs this front matter:

```yaml
---
title: "Lesson Title"
slug: "course-lesson-name"
module: "module-slug"
order: 1
---
```

### Required Fields

| Field | Description |
|-------|-------------|
| `title` | Display name of the lesson |
| `slug` | Unique identifier (must be unique across all lessons) |
| `module` | Must match the parent module's `slug` |
| `order` | Number that controls order within the module |

### Optional Fields

| Field | Description |
|-------|-------------|
| `video` | YouTube video ID for embedded video |

## Step 3: Write Lesson Content

Below the front matter, write your lesson in Markdown:

```markdown
---
title: "Introduction to Variables"
slug: "js-intro-variables"
module: "js-variables-types"
order: 1
---

Variables are containers for storing data. Let's learn how to create and use them.

## What is a Variable?

A variable is like a labeled box that holds a value...

## Creating Variables

In JavaScript, you can create variables using `let`, `const`, or `var`:

\`\`\`javascript
let name = "Alice";
const age = 25;
var score = 100;
\`\`\`

## Practice Exercise

Try creating these variables in your browser console...
```

## Adding Video Content

To embed a YouTube video, add the video ID to the front matter:

```yaml
---
title: "Introduction to Variables"
slug: "js-intro-variables"
module: "js-variables-types"
order: 1
video: "dQw4w9WgXcQ"
---
```

The video ID is the part after `v=` in a YouTube URL:
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ`

## Content Best Practices

### Use Clear Headings

```markdown
## Main Topic

### Subtopic

#### Detail
```

### Include Code Examples

Use fenced code blocks with language hints:

````markdown
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```
````

### Add Images

For images to work with the site's baseurl, use Liquid tags:

```markdown
![Description of image]({{ '/assets/images/lessons/screenshot.png' | relative_url }})
```

Or use HTML for more control:

```html
<img src="{{ '/assets/images/lessons/screenshot.png' | relative_url }}" alt="Description">
```

### Create Lists

```markdown
**Key points:**
- First point
- Second point
- Third point

**Steps to follow:**
1. Do this first
2. Then do this
3. Finally, do this
```

## File Organization

Keep lessons numbered within their course folder:

```
_lessons/javascript-essentials/
├── 01-intro.md              (module: js-getting-started, order: 1)
├── 02-setup.md              (module: js-getting-started, order: 2)
├── 03-variables.md          (module: js-variables-types, order: 1)
├── 04-data-types.md         (module: js-variables-types, order: 2)
├── 05-operators.md          (module: js-variables-types, order: 3)
└── 06-functions-intro.md    (module: js-functions, order: 1)
```

The file number is for your organization. The `order` field in front matter controls display order within each module.

## Complete Example

**File:** `_lessons/javascript-essentials/03-variables.md`

```yaml
---
title: "Understanding Variables"
slug: "js-understanding-variables"
module: "js-variables-types"
order: 1
video: "9emXNzqCKyg"
---

Variables are fundamental to programming. They allow us to store and manipulate data.

## What is a Variable?

Think of a variable as a labeled container. The label is the variable name, and the container holds a value.

## Declaring Variables

JavaScript provides three ways to declare variables:

### let

Use `let` for variables that will change:

\`\`\`javascript
let score = 0;
score = 10;  // This is allowed
\`\`\`

### const

Use `const` for variables that won't change:

\`\`\`javascript
const PI = 3.14159;
PI = 3;  // Error! Can't reassign const
\`\`\`

### var (Legacy)

`var` is the old way. Prefer `let` and `const`:

\`\`\`javascript
var oldWay = "avoid this";
\`\`\`

## Naming Rules

Variable names must:
- Start with a letter, underscore, or dollar sign
- Contain only letters, numbers, underscores, or dollar signs
- Not be a reserved word

\`\`\`javascript
// Valid names
let userName = "Alice";
let _private = true;
let $element = document.body;

// Invalid names
let 123abc = "error";    // Can't start with number
let my-var = "error";    // No hyphens
let class = "error";     // Reserved word
\`\`\`

## Practice

Open your browser console and try:

1. Create a variable for your name
2. Create a constant for your birth year
3. Try to reassign the constant (see the error)
```

## How Lessons Connect

The hierarchy works through slug references:

```
Course: javascript-essentials
    │
    └── Module: js-variables-types (course: "javascript-essentials")
            │
            ├── Lesson (module: "js-variables-types", order: 1)
            ├── Lesson (module: "js-variables-types", order: 2)
            └── Lesson (module: "js-variables-types", order: 3)
```

## Checklist for New Lessons

- [ ] File created in correct course folder
- [ ] Unique `slug` that won't conflict with other lessons
- [ ] `module` matches the parent module's slug exactly
- [ ] `order` set correctly for position within module
- [ ] Content written in clear Markdown
- [ ] Code examples have language hints
- [ ] Images have alt text
