---
title: "Text and Content Elements"
slug: "web-dev-text-elements"
module: "web-dev-html-basics"
order: 2
---

HTML provides many elements for structuring text content. Let's explore the most common ones.

## Headings

HTML has six levels of headings, from `<h1>` (most important) to `<h6>` (least important):

```html
<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Sub-subsection</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
```

**Best practices:**
- Use only one `<h1>` per page
- Don't skip levels (e.g., don't go from `<h2>` to `<h4>`)
- Use headings for structure, not just for styling

## Paragraphs

The `<p>` element defines a paragraph:

```html
<p>This is a paragraph of text. It can contain multiple sentences.</p>

<p>This is another paragraph. Browsers add space between paragraphs automatically.</p>
```

## Text Formatting

### Bold and Strong

```html
<b>Bold text</b> - visual only
<strong>Strong text</strong> - semantic importance
```

Use `<strong>` when the text is actually important, `<b>` for visual styling only.

### Italic and Emphasis

```html
<i>Italic text</i> - visual only
<em>Emphasized text</em> - semantic emphasis
```

### Other Formatting

```html
<mark>Highlighted text</mark>
<del>Deleted text</del>
<ins>Inserted text</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>
<code>Inline code</code>
```

## Lists

### Unordered Lists

For items without a specific order:

```html
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
</ul>
```

### Ordered Lists

For items in a specific sequence:

```html
<ol>
    <li>Preheat the oven</li>
    <li>Mix the ingredients</li>
    <li>Bake for 30 minutes</li>
</ol>
```

## Links

The `<a>` (anchor) element creates hyperlinks:

```html
<a href="https://example.com">Visit Example</a>
<a href="/about.html">About Us</a>
<a href="#section-id">Jump to Section</a>
```

Open in a new tab:

```html
<a href="https://example.com" target="_blank">Opens in New Tab</a>
```

## Images

The `<img>` element embeds images:

```html
<img src="photo.jpg" alt="Description of the image">
```

- `src`: Path to the image file
- `alt`: Alternative text (required for accessibility)

## Practice Exercise

Create an HTML page that includes:
1. A main heading and two subheadings
2. At least two paragraphs with some formatted text
3. An unordered list and an ordered list
4. A link to your favorite website

Congratulations on completing the HTML Basics module!
