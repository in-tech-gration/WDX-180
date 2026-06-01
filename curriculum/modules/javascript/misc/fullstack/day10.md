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

  ```text 
  Name
  Description
  Price
  ```

  But real products also need:

  ```text 
  Images
  PDF Manuals
  Datasheets
  Downloads
  ```

  Today we'll learn how to upload files from a browser and store references to them in our database.

  This is one of the first features that makes a CRUD application feel like a professional CMS.

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

# Part 1 — Why File Uploads Are Different

  Normal forms:

  ```html 
  <input name="name">
  ```

  send:

  ```text 
  Text
  ```

  File inputs:

  ```html 
  <input type="file" name="image">
  ```

  send:

  ```text 
  Binary Data
  ```

  The browser must use:

  ```text 
  multipart/form-data
  ```

  instead of:

  ```text 
  application/x-www-form-urlencoded
  ```

# Part 2 — Understanding multipart/form-data

  Regular request:

  ```text 
  name=keyboard
  price=89.99
  ```

  ---

  Multipart request:

  ```text 
  name=keyboard

  [file bytes]

  price=89.99
  ```

  Contains both:

  * Form fields
  * Files

  ---

  Express **cannot process this by default**.

  We need **middleware**.

# Part 3 — Introducing Multer

  The most common Express upload middleware is:

  `Multer`

  Install:

  ```bash 
  npm install multer
  ```

  Import:

  ```javascript 
  // index.js
  const multer = require('multer');
  ```

  Create upload middleware:

  ```javascript 
  const upload = multer({ dest: 'uploads/' });
  ```

  Now uploaded files are stored in:

  ```text 
  uploads/
  ```

  directory.

# Part 4 — Creating the Upload Form

  Edit product form:

  ```html 
  <form method="post" enctype="multipart/form-data">
      <input type="file" name="image">
      <button>
          Upload
      </button>
  </form>
  ```

  Most common beginner mistake:

  Forgetting:

  ```html 
  enctype="multipart/form-data"
  ```

  Without it:

  ```text 
  File never arrives
  ```

# Part 5 — Processing Uploads

  Route:

  ```javascript 
  router.post('/edit/:id',
      // Multer Middleware for file uploading
      upload.single('image'),
      (req, res) => {

        // Contains information about the uploaded file
        // handled by the Multer middleware
        console.log(req.file);

      }
  );
  ```

  Multer places uploaded file inside:

  ```javascript 
  req.file
  ```

  Example:

  ```javascript 
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

  **Understanding req.file**

  Useful properties:

  | Property     | Purpose        |
  | ------------ | -------------- |
  | filename     | Generated name |
  | originalname | Original file  |
  | mimetype     | File type      |
  | size         | File size      |
  | path         | Stored path    |

# Part 6 — Storing Image References

  Do NOT store:

  ```text 
  Entire image
  ```

  inside SQLite.

  Store:

  ```text 
  Filename
  ```

  instead.

  Add column:

  ```sql 
  ALTER TABLE products

  ADD COLUMN image TEXT;
  ```

  Example value:

  ```text 
  5d8a7f6e9c3.jpg
  ```

  Repository:

  ```javascript 
  UPDATE products

  SET image = ?

  WHERE id = ?
  ```

  Database stores:

  ```text 
  Reference
  ```

  not file contents.

# Part 7 — Serving Uploaded Files

  Files exist on disk.

  Browser cannot access them yet.

  Expose uploads folder:

  ```javascript 
  app.use('/uploads', express.static('uploads'));
  ```

  Example:

  ```text 
  /uploads/image.jpg
  ```

  becomes publicly accessible.

  **Displaying Images**

  View:

  ```html 
  <img src="/uploads/<%= product.image %>" alt="<%= product.name %>">
  ```

  Result:

  ```text 
  Product Image
  ```

  appears on page.

# Part 8 — Generating Better Filenames

  Default Multer names:

  ```text 
  7fa1c2f8b4...
  ```

  Not ideal.

  [Custom storage](https://expressjs.com/en/resources/middleware/multer/#diskstorage){:target="_blank"}:

  ```javascript 
  const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: ( req, file, cb ) => {
      cb(
        null,
        Date.now() + '-' + file.originalname
      );
    }
  });
  const upload = multer({ storage });
  ```

  Example:

  ```text 
  1712345678-keyboard.jpg
  ```

  Much easier to debug.

# Part 9 — Restricting File Types

  Dangerous:

  ```text 
  virus.exe
  ```

  Dangerous:

  ```text 
  shell.php
  ```

  [Accept only images via fileFilter](https://expressjs.com/en/resources/middleware/multer/#filefilter){:target="_blank"}.

  Example:

  ```javascript 
  multer({
    // ...
    fileFilter:( req, file, cb) => {
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
  });
  ```

  Only image uploads allowed.

# Part 10 — Limiting File Size

  Without limits:

  ```text 
  10GB upload
  ```

  Possible.

  Not ideal.

  [Limit](https://expressjs.com/en/resources/middleware/multer/#limits){:target="_blank"}.

  ```javascript 
  multer({
    // ...
    limits: {
      fileSize: 5 * 1024 * 1024
    }
  })
  ```

  Equivalent:

  ```text 
  5 MB
  ```

  Large enough for images.

  Small enough to avoid abuse.

# Part 11 — Handling Upload Errors

  Example:

  ```text 
  File too large
  ```

  Example:

  ```text 
  Wrong file type
  ```

  Handle errors:

  ```js
  const multer = require('multer');
  const upload = multer({
    limits: { ... }
    // ...
  })

  router.post("/edit", (req, res)=>{
    upload.single("image")(req, res, err =>{

      let error;

      if ( err instanceof multer.MulterError ){
        // Handle Multer error...
        error = "Invalid file";
      }
      // ...

      // Display errors:
      return res.render('products/edit',
          {
            title: "Edit Product",
            error,
          }
      );
    });
  });
  ```

  Never fail silently.

  Users should know what happened.

# Part 12 — Replacing Existing Images

  Current:

  ```text 
  Upload image
  ```

  works.

  But:

  ```text 
  Upload second image
  ```

  leaves:

  ```text 
  Old file
  ```

  on disk.

  Result:

  ```text 
  Unused files accumulate
  ```

  Future improvement:

  ```javascript 
  fs.unlink(...)
  ```

  to remove old images.

  We'll revisit cleanup strategies later.

# Part 13 — Security Considerations

  Do you remember the  mantra _"Treat all user input as evil!"_

  ❌ Never trust:

  ```text 
  Filename
  ```

  ❌ Never trust:

  ```text 
  File extension
  ```

  ❌ Never trust:

  ```text 
  MIME type alone
  ```

  Real systems often inspect:

  ```text 
  Actual file contents
  ```

  before accepting uploads.

  For our CMS:

  * Restrict file types
  * Restrict size
  * Generate filenames
  * Store outside source code

  is sufficient.

# Part 14 — Product Creation with Images

  Current:

  ```text 
  Create Product
  ```

  Enhanced:

  ```text 
  Create Product
  Upload Image
  ```

  Single form:

  ```html 
  <input type="text" name="name">
  <input type="file" name="image">
  ```

  Create product and image together.

  This is how many CMS platforms operate.

# Part 15 — Database Design Discussion

  Current:

  ```sql 
  products

  image
  ```

  One image.

  ```mermaid
  erDiagram
    products {
      INTEGER id
      TEXT name
      TEXT description
      REAL price
      TEXT image
    }
  ```

  Future:

  ```sql 
  product_images
  ```

  table.

  Example:

  ```text 
  Product

  1
  ```

  linked to:

  ```text 
  image1.jpg
  image2.jpg
  image3.jpg
  ```

  ```mermaid
  erDiagram
      products {
          integer id PK
          string name
          text description
      }
      product_images {
          integer id PK
          integer product_id FK
          string filename
      }
      products ||--o{ product_images : has
  ```

  This becomes important for galleries.

  We'll keep one image for now.

# Common Beginner Mistakes

  **Forgetting enctype**

  ❌ Bad:

  ```html 
  <form method="post">
  ```

  ✅ Must be:

  ```html 
  multipart/form-data
  ```

  **Storing Images in SQLite**

  Usually unnecessary.

  Store filenames instead.

  **No File Validation**

  Always validate:

  * Type
  * Size

  **Public Uploads Without Restrictions**

  Dangerous.

  Never allow arbitrary uploads.

  **Ignoring Cleanup**

  Unused files eventually consume storage.

# Bonus Challenge

  Create:

  ```text 
  product_images
  ```

  table.

  Schema:

  ```sql 
  CREATE TABLE product_images (

      id INTEGER PRIMARY KEY,

      product_id INTEGER,

      filename TEXT

  );
  ```

  Allow:

  ```text 
  Multiple Images
  ```

  per product.

  Use:

  ```javascript 
  upload.array(
      'images'
  )
  ```

  instead of:

  ```javascript 
  upload.single(
      'image'
  )
  ```

  Display gallery:

  ```html 
  <img ...>

  <img ...>

  <img ...>
  ```

  under product details.

  Congratulations.

  You've just crossed from simple CRUD into media management, one of the foundational capabilities of real-world CMS platforms.

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

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
