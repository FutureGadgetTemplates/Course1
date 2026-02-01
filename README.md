# Course Platform Template

A Jekyll-based course website template with progress tracking, designed for creating free educational content.

## Features

- **Module-based structure**: Organize lessons into modules within courses
- **Progress tracking**: localStorage-based completion tracking
- **Responsive design**: Works on desktop and mobile
- **Syntax highlighting**: Built-in code highlighting for technical content
- **Video embeds**: Easy YouTube/Vimeo embedding

## Quick Start

1. Install Ruby and Bundler
2. Clone this repository
3. Configure `_config.yml`:
   ```yaml
   baseurl: "/your-site-path"  # Change to match your deployment path
   url: "https://yourdomain.com"
   ```
4. Install dependencies:
   ```bash
   bundle install
   ```
5. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```
6. Visit `http://localhost:4000/your-site-path`

## Project Structure

```
├── _courses/           # Course definitions
├── _modules/           # Module definitions
├── _lessons/           # Individual lessons
├── _layouts/           # Page templates
├── _includes/          # Reusable components
├── _sass/              # Stylesheets
├── assets/
│   ├── css/           # Compiled CSS
│   ├── js/            # JavaScript (progress tracking)
│   └── images/        # Course images
└── index.html         # Homepage
```

## Creating Content

### Add a New Course

Create a file in `_courses/`:

```yaml
---
title: "Course Title"
slug: "course-slug"
description: "Course description"
category: programming
featured_image: /assets/images/courses/image.jpg
---

Course introduction content here.
```

### Add a Module

Create a file in `_modules/`:

```yaml
---
title: "Module Title"
slug: "module-slug"
course: "course-slug"    # Must match course slug
order: 1                 # Display order
description: "Module description"
---

Module overview content.
```

### Add a Lesson

Create a file in `_lessons/`:

```yaml
---
title: "Lesson Title"
slug: "lesson-slug"
module: "module-slug"    # Must match module slug
order: 1                 # Display order within module
video: "youtube-id"      # Optional YouTube video ID
---

Lesson content in Markdown.
```

## Customization

### Styling

Edit files in `_sass/`:
- `_variables.scss` - Colors, fonts, spacing
- `_layout.scss` - Base layout styles
- `_course.scss` - Course-specific styles

### Site Settings

Edit `_config.yml` to change:
- Site title and description
- Base URL for deployment
- Collection settings

## Deployment

### Configure Base URL

Before deploying, update `_config.yml` with your deployment path:

```yaml
# For GitHub Pages (username.github.io/repo-name)
baseurl: "/repo-name"
url: "https://username.github.io"

# For custom domain at root
baseurl: ""
url: "https://yourdomain.com"

# For subdirectory deployment
baseurl: "/courses"
url: "https://yourdomain.com"
```

### Build the Site

```bash
bundle exec jekyll build
```

The `_site/` folder contains the static files ready for deployment.

### Deployment Options

- **GitHub Pages**: Push to a `gh-pages` branch or enable Pages in repo settings
- **Netlify**: Connect your repo and set build command to `jekyll build`
- **Vercel**: Import project and configure for Jekyll
- **Any static host**: Upload the `_site/` folder contents
