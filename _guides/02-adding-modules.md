---
layout: default
title: "Guide: Adding Modules"
---

# Adding Modules to a Course

Modules are groups of related lessons within a course. This guide explains how to create them.

## Step 1: Create the Module File

Create a new Markdown file in the course's module folder:

```
_modules/your-course-name/01-module-name.md
```

Use a number prefix to control the display order.

## Step 2: Add Front Matter

Every module file needs this front matter:

```yaml
---
title: "Module Title"
slug: "course-module-name"
course: "your-course-name"
order: 1
description: "Brief description of what this module covers."
---
```

### Required Fields

| Field | Description |
|-------|-------------|
| `title` | Display name of the module |
| `slug` | Unique identifier (used to link lessons) |
| `course` | Must match the parent course's `slug` |
| `order` | Number that controls display order (1, 2, 3...) |

### Optional Fields

| Field | Description |
|-------|-------------|
| `description` | Brief summary shown on course page |

## Step 3: Add Module Content (Optional)

Below the front matter, you can add an overview:

```markdown
---
title: "Getting Started"
slug: "js-getting-started"
course: "javascript-essentials"
order: 1
description: "Set up your environment and learn JavaScript basics."
---

In this module, you'll set up your development environment and write your first JavaScript code.

## Topics Covered

- Installing Node.js
- Using the browser console
- Your first script
```

## Naming Conventions

### Slugs

Use a prefix to keep slugs unique across courses:

```yaml
# Good - prefixed with course abbreviation
slug: "js-getting-started"
slug: "py-getting-started"

# Avoid - could conflict between courses
slug: "getting-started"
```

### File Names

Use number prefixes to maintain order:

```
_modules/javascript-essentials/
├── 01-getting-started.md
├── 02-variables-and-types.md
├── 03-functions.md
└── 04-dom-basics.md
```

## Complete Example

**File:** `_modules/javascript-essentials/01-getting-started.md`

```yaml
---
title: "Getting Started"
slug: "js-getting-started"
course: "javascript-essentials"
order: 1
description: "Set up your environment and learn JavaScript basics."
---

In this module, you'll install the necessary tools and write your first JavaScript program.

## What You'll Learn

- How to run JavaScript in the browser
- Setting up VS Code for JavaScript
- Writing and executing your first script
```

**File:** `_modules/javascript-essentials/02-variables-and-types.md`

```yaml
---
title: "Variables and Data Types"
slug: "js-variables-types"
course: "javascript-essentials"
order: 2
description: "Learn about variables, numbers, strings, and other data types."
---

Variables are the building blocks of any program. In this module, you'll learn how JavaScript handles data.
```

## How Modules Connect to Courses

The `course` field links the module to its parent course:

```
Course (slug: "javascript-essentials")
    └── Module (course: "javascript-essentials")
            └── Lessons (module: "js-getting-started")
```

## Next Steps

After creating modules, [add lessons]({{ '/guides/03-adding-lessons/' | relative_url }}) to each module.
