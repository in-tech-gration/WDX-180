---
title: "Full Stack Project - Day 10"
layout: v2
load_script_js_via_src:
  - mermaid.min.js
load_script_js: 
  - mermaid.js
---

# File Uploads & Image Management

## Working with Real Files

> Text is easy.
>
> Files are where web applications start getting interesting.

So far, our CMS stores:

```text id="v9q4xk"
Name
Description
Price
```

But real products also need:

```text id="kj3d8n"
Images
PDF Manuals
Datasheets
Downloads
```

Today we'll learn how to upload files from a browser and store references to them in our database.

This is one of the first features that makes a CRUD application feel like a professional CMS.

---

# Learning Objectives

By the end of this lesson, students will be able to:

* Understand multipart form submissions
* Upload files using Express
* Use Multer middleware
* Store uploaded files
* Validate uploads
* Restrict file types
* Generate unique filenames
* Associate files with database records
* Display uploaded images
* Understand common upload security concerns

---

# Part 1 — Why File Uploads Are Different

Normal forms:

```html id="i4q7xt"
<input
    name="name"
>
```

send:

```text id="qj8m6e"
Text
```

---

File inputs:

```html id="m5s3rp"
<input
    type="file"
    name="image"
>
```

send:

```text id="8x1k9v"
Binary Data
```

---

The browser must use:

```text id="j4k0yu"
multipart/form-data
```

instead of:

```text id="w0a6dl"
application/x-www-form-urlencoded
```

---

# Part 2 — Understanding multipart/form-data

Regular request:

```text id="u2r6nv"
name=keyboard
price=89.99
```

---

Multipart request:

```text id="7c2txe"
name=keyboard

[file bytes]

price=89.99
```

Contains both:

* Form fields
* Files

---

Express cannot process this by default.

We need middleware.

---

# Part 3 — Introducing Multer

The most common Express upload middleware is:

Multer

Install:

```bash id="uv1jz3"
npm install multer
```

---

Import:

```javascript id="5g6u2r"
const multer =
    require('multer');
```

---

Create upload middleware:

```javascript id="3y2j7f"
const upload =
    multer({
        dest: 'uploads/'
    });
```

---

Now uploaded files are stored in:

```text id="q7v8wr"
uploads/
```

directory.

---

# Part 4 — Creating the Upload Form

Edit product form:

```html id="s4m1hz"
<form
    method="post"
    enctype="multipart/form-data"
>

    <input
        type="file"
        name="image"
    >

    <button>
        Upload
    </button>

</form>
```

---

Most common beginner mistake:

Forgetting:

```html id="w6r2tn"
enctype="multipart/form-data"
```

Without it:

```text id="t9k3qm"
File never arrives
```

---

# Part 5 — Processing Uploads

Route:

```javascript id="f1x7ju"
router.post(
    '/edit/:id',
    upload.single('image'),
    (req, res) => {

        console.log(
            req.file
        );

    }
);
```

---

Multer places uploaded file inside:

```javascript id="7m0kzs"
req.file
```

---

Example:

```javascript id="3d4vjh"
{
  filename:
    '5d8a7f6e9c3',

  originalname:
    'keyboard.jpg',

  mimetype:
    'image/jpeg',

  size:
    125000
}
```

---

# Understanding req.file

Useful properties:

| Property     | Purpose        |
| ------------ | -------------- |
| filename     | Generated name |
| originalname | Original file  |
| mimetype     | File type      |
| size         | File size      |
| path         | Stored path    |

---

# Part 6 — Storing Image References

Do NOT store:

```text id="y3k8rt"
Entire image
```

inside SQLite.

Store:

```text id="q0v2cm"
Filename
```

instead.

---

Add column:

```sql id="u5f7an"
ALTER TABLE products

ADD COLUMN image
TEXT;
```

---

Example value:

```text id="j9c1vb"
5d8a7f6e9c3.jpg
```

---

Repository:

```javascript id="8h4smd"
UPDATE products

SET image = ?

WHERE id = ?
```

---

Database stores:

```text id="3w7fqo"
Reference
```

not file contents.

---

# Part 7 — Serving Uploaded Files

Files exist on disk.

Browser cannot access them yet.

---

Expose uploads folder:

```javascript id="x8m4ct"
app.use(
    '/uploads',
    express.static(
        'uploads'
    )
);
```

---

Example:

```text id="q1f8wy"
/uploads/image.jpg
```

becomes publicly accessible.

---

# Displaying Images

View:

```html id="t6v5dr"
<img
    src="/uploads/<%= product.image %>"
    alt="<%= product.name %>"
>
```

---

Result:

```text id="h2u9sb"
Product Image
```

appears on page.

---

# Part 8 — Generating Better Filenames

Default Multer names:

```text id="g9x5jq"
7fa1c2f8b4...
```

Not ideal.

---

Custom storage:

```javascript id="m3t6cw"
const storage =
    multer.diskStorage({

        destination:
            'uploads/',

        filename:
            (
                req,
                file,
                cb
            ) => {

                cb(
                    null,
                    Date.now()
                    + '-'
                    + file.originalname
                );

            }

    });
```

---

Example:

```text id="b7s0vh"
1712345678-keyboard.jpg
```

Much easier to debug.

---

# Part 9 — Restricting File Types

Dangerous:

```text id="z4y6pf"
virus.exe
```

---

Dangerous:

```text id="j5v3ok"
shell.php
```

---

Accept only images.

---

Example:

```javascript id="y8n7ru"
fileFilter:
(
    req,
    file,
    cb
) => {

    const allowed =
        [
            'image/jpeg',
            'image/png',
            'image/webp'
        ];

    cb(
        null,
        allowed.includes(
            file.mimetype
        )
    );

}
```

---

Only image uploads allowed.

---

# Part 10 — Limiting File Size

Without limits:

```text id="u6c9mr"
10GB upload
```

Possible.

---

Not ideal.

---

Limit:

```javascript id="p8k2zx"
limits: {

    fileSize:
        5 * 1024 * 1024

}
```

---

Equivalent:

```text id="m7t4cf"
5 MB
```

---

Large enough for images.

Small enough to avoid abuse.

---

# Part 11 — Handling Upload Errors

Example:

```text id="r2v5qn"
File too large
```

---

Example:

```text id="n0k7xh"
Wrong file type
```

---

Display errors:

```javascript id="j1m9te"
return res.render(
    'products/edit',
    {
        error:
            'Invalid file.'
    }
);
```

---

Never fail silently.

Users should know what happened.

---

# Part 12 — Replacing Existing Images

Current:

```text id="p4j6wr"
Upload image
```

works.

---

But:

```text id="d9x1fu"
Upload second image
```

leaves:

```text id="u0k8av"
Old file
```

on disk.

---

Result:

```text id="c3r7my"
Unused files accumulate
```

---

Future improvement:

```javascript id="g5w2lt"
fs.unlink(...)
```

to remove old images.

---

We'll revisit cleanup strategies later.

---

# Part 13 — Security Considerations

Never trust:

```text id="m8u4zb"
Filename
```

---

Never trust:

```text id="t1r9kc"
File extension
```

---

Never trust:

```text id="v6j3oq"
MIME type alone
```

---

Real systems often inspect:

```text id="e7q5ds"
Actual file contents
```

before accepting uploads.

---

For our CMS:

* Restrict file types
* Restrict size
* Generate filenames
* Store outside source code

is sufficient.

---

# Part 14 — Product Creation with Images

Current:

```text id="y5k7hn"
Create Product
```

---

Enhanced:

```text id="w8q2tr"
Create Product
Upload Image
```

---

Single form:

```html id="k1m7vz"
<input
    type="text"
    name="name"
>

<input
    type="file"
    name="image"
>
```

---

Create product and image together.

This is how many CMS platforms operate.

---

# Part 15 — Database Design Discussion

Current:

```sql id="p0u4cn"
products

image
```

One image.

---

Future:

```sql id="m7q3tw"
product_images
```

table.

---

Example:

```text id="f9r1vs"
Product

1
```

linked to:

```text id="v4y8lb"
image1.jpg

image2.jpg

image3.jpg
```

---

This becomes important for galleries.

We'll keep one image for now.

---

# Common Beginner Mistakes

## Forgetting enctype

Bad:

```html id="d5m8rz"
<form method="post">
```

---

Must be:

```html id="u3j1qx"
multipart/form-data
```

---

## Storing Images in SQLite

Usually unnecessary.

Store filenames instead.

---

## No File Validation

Always validate:

* Type
* Size

---

## Public Uploads Without Restrictions

Dangerous.

Never allow arbitrary uploads.

---

## Ignoring Cleanup

Unused files eventually consume storage.

---

# Assignment

## Exercise 1

Install:

```text id="e6t4wk"
Multer
```

and configure uploads.

---

## Exercise 2

Add:

```text id="g2r9nf"
Image Upload
```

to product creation.

---

## Exercise 3

Store uploaded filename in SQLite.

---

## Exercise 4

Display uploaded image on:

```text id="j8v5pm"
Product Details
```

page.

---

## Exercise 5

Restrict uploads to:

```text id="t7c1dx"
JPEG
PNG
WEBP
```

files.

---

# Bonus Challenge

Create:

```text id="s9k4zb"
product_images
```

table.

Schema:

```sql id="c5v7qn"
CREATE TABLE product_images (

    id INTEGER PRIMARY KEY,

    product_id INTEGER,

    filename TEXT

);
```

---

Allow:

```text id="q3n8fr"
Multiple Images
```

per product.

---

Use:

```javascript id="u4m6jk"
upload.array(
    'images'
)
```

instead of:

```javascript id="b2r9xp"
upload.single(
    'image'
)
```

---

Display gallery:

```html id="v1x7wt"
<img ...>

<img ...>

<img ...>
```

under product details.

Congratulations.

You've just crossed from simple CRUD into media management, one of the foundational capabilities of real-world CMS platforms.

---

# Key Takeaways

Today you learned:

* Multipart forms
* Multer middleware
* File uploads
* Image management
* File validation
* Static file serving
* Filename generation
* Upload security
* Database file references

At this stage, the CMS can manage not only structured data but also media assets. This is a major step toward building applications that resemble WordPress, Shopify, Drupal, Ghost, and other production content management systems.

---

# Suggested Syllabus Improvements

This is the point where I'd consider splitting the course into two tracks:

### Application Development Track

* Authentication
* Authorization
* Sessions
* Roles

### CMS Track

* Media Library
* Categories
* Tags
* SEO
* Content Publishing

Most real CMS platforms become complex not because CRUD is difficult, but because content organization becomes difficult.

I'd also strongly consider adding a dedicated day for:

```text id="w6n3af"
Environment Variables
Configuration
Secrets
```

using:

dotenv

before authentication begins. In production systems, configuration management becomes critical very quickly, and students benefit enormously from learning it early.

---

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
