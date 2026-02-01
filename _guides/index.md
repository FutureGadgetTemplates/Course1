---
layout: default
title: "Content Guides"
---

# Content Creation Guides

These guides explain how to add and manage course content on this site.

## Getting Started

Before creating content, understand the site structure:

```
_courses/           → Course definitions
_modules/           → Module definitions (grouped by course)
_lessons/           → Lesson content (grouped by course)
```

## Guides

### [1. Adding Courses]({{ '/guides/01-adding-courses/' | relative_url }})
Learn how to create a new course with proper front matter and content structure.

### [2. Adding Modules]({{ '/guides/02-adding-modules/' | relative_url }})
Learn how to organize lessons into modules within a course.

### [3. Adding Lessons]({{ '/guides/03-adding-lessons/' | relative_url }})
Learn how to write lesson content with text, code, images, and video.

---

## Quick Reference

### Course Front Matter

```yaml
---
title: "Course Title"
slug: "course-slug"
description: "Course description"
category: programming
featured_image: /assets/images/courses/image.jpg
---
```

### Module Front Matter

```yaml
---
title: "Module Title"
slug: "unique-module-slug"
course: "parent-course-slug"
order: 1
description: "Module description"
---
```

### Lesson Front Matter

```yaml
---
title: "Lesson Title"
slug: "unique-lesson-slug"
module: "parent-module-slug"
order: 1
video: "youtube-video-id"
---
```

## Content Hierarchy

```
Course (slug: "my-course")
    │
    ├── Module 1 (course: "my-course", order: 1)
    │       ├── Lesson 1 (module: "module-1-slug", order: 1)
    │       └── Lesson 2 (module: "module-1-slug", order: 2)
    │
    └── Module 2 (course: "my-course", order: 2)
            ├── Lesson 3 (module: "module-2-slug", order: 1)
            └── Lesson 4 (module: "module-2-slug", order: 2)
```

## Folder Structure

Organize files by course for easy management:

```
_courses/
├── web-development.md
└── python-basics.md

_modules/
├── web-development/
│   ├── 01-getting-started.md
│   └── 02-html-basics.md
└── python-basics/
    ├── 01-introduction.md
    └── 02-variables.md

_lessons/
├── web-development/
│   ├── 01-intro.md
│   ├── 02-setup.md
│   └── 03-first-page.md
└── python-basics/
    ├── 01-welcome.md
    ├── 02-install.md
    └── 03-hello-world.md
```

## Tips

1. **Unique slugs**: Every slug must be unique across the entire site
2. **Consistent naming**: Use prefixes like `web-`, `py-` to avoid conflicts
3. **Order matters**: Use the `order` field, not filename, for display order
4. **Test locally**: Run `bundle exec jekyll serve` to preview changes
5. **Use relative_url**: Always use the `relative_url` filter for images and links:
   ```markdown
   ![Image]({{ '/assets/images/example.png' | relative_url }})
   [Link text]({{ '/guides/01-adding-courses/' | relative_url }})
   ```
