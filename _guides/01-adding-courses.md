---
layout: default
title: "Guide: Adding Courses"
---

# Adding a New Course

This guide explains how to create a new course for your site.

## Step 1: Create the Course File

Create a new Markdown file in `_courses/`:

```
_courses/your-course-name.md
```

Use lowercase with hyphens for the filename.

## Step 2: Add Front Matter

Every course file needs this front matter at the top:

```yaml
---
title: "Your Course Title"
slug: "your-course-name"
description: "A brief description of your course (1-2 sentences)"
category: programming
featured_image: /assets/images/courses/your-image.jpg
---
```

### Required Fields

| Field | Description |
|-------|-------------|
| `title` | Display name shown on the site |
| `slug` | Unique identifier (must match filename, used in URLs) |
| `description` | Brief summary shown on course cards |

### Optional Fields

| Field | Description |
|-------|-------------|
| `category` | Category label (e.g., programming, design, business) |
| `featured_image` | Path to course thumbnail image |

## Step 3: Add Course Content

Below the front matter, add your course introduction in Markdown:

```markdown
---
title: "JavaScript Essentials"
slug: "javascript-essentials"
description: "Learn JavaScript from scratch and build interactive web applications."
category: programming
featured_image: /assets/images/courses/javascript.jpg
---

Welcome to JavaScript Essentials! This course will teach you the fundamentals of JavaScript programming.

## What You'll Learn

- JavaScript syntax and basics
- DOM manipulation
- Event handling
- Asynchronous programming

## Prerequisites

- Basic HTML and CSS knowledge
- Familiarity with a code editor

## Course Format

Each module contains video lessons and hands-on exercises.
```

## Step 4: Create Course Folder Structure

Create matching folders for modules and lessons:

```
_modules/your-course-name/
_lessons/your-course-name/
```

## Step 5: Add a Course Image (Optional)

Add a course thumbnail to:

```
assets/images/courses/your-image.jpg
```

Recommended size: 600x400 pixels

## Complete Example

**File:** `_courses/javascript-essentials.md`

```yaml
---
title: "JavaScript Essentials"
slug: "javascript-essentials"
description: "Learn JavaScript from scratch and build interactive web applications."
category: programming
featured_image: /assets/images/courses/javascript.jpg
---

Welcome to JavaScript Essentials!

## What You'll Learn

- Variables and data types
- Functions and scope
- DOM manipulation
- Event handling

## Prerequisites

Basic HTML and CSS knowledge recommended.
```

## Next Steps

After creating your course, you'll need to:

1. [Add modules]({{ '/guides/02-adding-modules/' | relative_url }}) to organize your content
2. [Add lessons]({{ '/guides/03-adding-lessons/' | relative_url }}) with the actual course material
