---
title: "HTML Document Structure"
slug: "web-dev-html-structure"
module: "web-dev-html-basics"
order: 1
---

Every HTML document follows a specific structure. Understanding this structure is essential for creating valid web pages.

## The Basic Structure

Here's the skeleton of every HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
```

Let's break down each part:

## DOCTYPE Declaration

```html
<!DOCTYPE html>
```

This tells the browser that this is an HTML5 document. Always include it at the very top.

## The `<html>` Element

```html
<html lang="en">
```

The root element that contains all other elements. The `lang` attribute specifies the language of the content.

## The `<head>` Element

The `<head>` contains metadata about the document—information that isn't displayed on the page itself:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
```

- `charset="UTF-8"`: Enables support for most characters and symbols
- `viewport`: Makes the page mobile-friendly
- `<title>`: Sets the browser tab title

## The `<body>` Element

The `<body>` contains everything visible on the page:

```html
<body>
    <h1>Welcome to My Site</h1>
    <p>This content is visible to users.</p>
</body>
```

## HTML Elements and Tags

HTML uses **tags** to create **elements**:

```html
<tagname>Content goes here</tagname>
```

- **Opening tag**: `<tagname>`
- **Content**: The text or other elements inside
- **Closing tag**: `</tagname>`

Some elements are **self-closing** (no content or closing tag):

```html
<img src="photo.jpg" alt="A photo">
<br>
<hr>
```

## Nesting Elements

Elements can contain other elements:

```html
<article>
    <h2>Article Title</h2>
    <p>This is a paragraph with <strong>bold text</strong> inside.</p>
</article>
```

Always close tags in the correct order—the last tag opened should be the first one closed.

## Practice

Create a new HTML file and build a document with:
- A proper DOCTYPE and html structure
- A meaningful title
- A heading and a few paragraphs in the body

In the next lesson, we'll explore common HTML elements for text and content.
