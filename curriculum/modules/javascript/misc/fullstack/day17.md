---
title: "Full Stack Project - Day 17"
layout: v2
load_script_js_via_src:
  - mermaid.min.js
load_script_js: 
  - mermaid.js
---

# Let's build a basic CRUD GUI for our Database

This is going to be similar to `phpMyAdmin`, but with only a tiny fraction of the functionality just to experiment and learn how to build such an app.

index.js

```js
// DB Admin (tiny phpMyAdmin-like interface)
const dbAdminRouter = require('./routes/dbadmin');
app.use('/dbadmin', dbAdminRouter);
```

views/header.ejs:

```ejs
<a href="/dbadmin">
  <button>
    DB Admin
  </button>
</a>
```

dbadmin/index.ejs:

```ejs
<%- include('../partials/header') %>

<h2>Database Admin</h2>
<ul>
  <% tables.forEach(function(t){ %>
    <li>
      <a href="/dbadmin/<%= t %>"><%= t %></a>
    </li>
  <% }) %>
</ul>
<%- include('../partials/footer') %>
```

routes/dbadmin.js:

```js
const express = require('express');
const router = express.Router();
const db = require('../db/db');

function getTables() {
  const stmt = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name");
  return stmt.all().map(r => r.name);
}

router.get('/', (req, res) => {
  const tables = getTables();
  res.render('dbadmin/index', { title: 'DB Admin', tables });
});

router.get('/:table', (req, res) => {
  const table = req.params.table;
  const tables = getTables();
  if (!tables.includes(table)) {
    return res.status(404).send('Table not found');
  }

  const cols = db.prepare(`PRAGMA table_info(${table})`).all();
  const rows = db.prepare(`SELECT * FROM ${table} LIMIT 500`).all();

  res.render('dbadmin/table', {
    title: `Table: ${table}`,
    table,
    cols,
    rows,
    tables,
    message: null
  });
});

router.post('/:table/insert', (req, res) => {
  const table = req.params.table;
  const tables = getTables();
  if (!tables.includes(table)) return res.status(404).send('Table not found');

  const cols = db.prepare(`PRAGMA table_info(${table})`).all();
  // skip auto-increment integer primary key columns
  const insertCols = cols.filter(c => !(c.pk === 1 && /INT/i.test(c.type) && c.type.toUpperCase().includes('INTEGER')));

  const names = insertCols.map(c => c.name);
  const placeholders = names.map(_ => '?').join(',');
  const values = names.map(n => req.body[n] || null);

  const sql = `INSERT INTO ${table} (${names.join(',')}) VALUES (${placeholders})`;
  try {
    const stmt = db.prepare(sql);
    const result = stmt.run(...values);
    res.redirect(`/dbadmin/${table}`);
  } catch (err) {
    res.status(500).send(String(err));
  }
});

router.post('/:table/:id/update', (req, res) => {
  const table = req.params.table;
  const id = req.params.id;
  const tables = getTables();
  if (!tables.includes(table)) return res.status(404).send('Table not found');

  const cols = db.prepare(`PRAGMA table_info(${table})`).all();
  const pkCol = cols.find(c => c.pk === 1) || cols[0];
  const upCols = cols.filter(c => c.name !== pkCol.name).map(c => c.name);

  const assignments = upCols.map(n => `${n} = ?`).join(', ');
  const values = upCols.map(n => req.body[n] || null);
  values.push(id);

  const sql = `UPDATE ${table} SET ${assignments} WHERE ${pkCol.name} = ?`;
  try {
    db.prepare(sql).run(...values);
    res.redirect(`/dbadmin/${table}`);
  } catch (err) {
    res.status(500).send(String(err));
  }
});

router.post('/:table/:id/delete', (req, res) => {
  const table = req.params.table;
  const id = req.params.id;
  const tables = getTables();
  if (!tables.includes(table)) return res.status(404).send('Table not found');

  const cols = db.prepare(`PRAGMA table_info(${table})`).all();
  const pkCol = cols.find(c => c.pk === 1) || cols[0];

  try {
    db.prepare(`DELETE FROM ${table} WHERE ${pkCol.name} = ?`).run(id);
    res.redirect(`/dbadmin/${table}`);
  } catch (err) {
    res.status(500).send(String(err));
  }
});

router.post('/:table/add-column', (req, res) => {
  const table = req.params.table;
  const { column_name, column_type } = req.body;
  const tables = getTables();
  if (!tables.includes(table)) return res.status(404).send('Table not found');

  if (!column_name || !column_type) return res.status(400).send('Missing column name or type');

  try {
    db.exec(`ALTER TABLE ${table} ADD COLUMN ${column_name} ${column_type}`);
    res.redirect(`/dbadmin/${table}`);
  } catch (err) {
    res.status(500).send(String(err));
  }
});

router.post('/:table/drop-column', (req, res) => {
  const table = req.params.table;
  const { column_name } = req.body;
  const tables = getTables();
  if (!tables.includes(table)) return res.status(404).send('Table not found');

  if (!column_name) return res.status(400).send('Missing column name');

  try {
    // Attempt DROP COLUMN (SQLite >= 3.35). If not supported, this will error.
    db.exec(`ALTER TABLE ${table} DROP COLUMN ${column_name}`);
    res.redirect(`/dbadmin/${table}`);
  } catch (err) {
    res.status(500).send('Failed to drop column: ' + err.message + '. Note: older SQLite versions do not support DROP COLUMN.');
  }
});

module.exports = router;
```

views/dbadmin/table.ejs

```ejs
<%- include('../partials/header') %>

<h2>Table: <%= table %></h2>

<p>
  <a href="/dbadmin">Back to tables</a>
</p>

<h3>Columns</h3>
<table border="1">
  <tr>
    <th>cid</th>
    <th>name</th>
    <th>type</th>
    <th>notnull</th>
    <th>dflt_value</th>
    <th>pk</th>
  </tr>
  <% cols.forEach(function(c){ %>
    <tr>
      <td><%= c.cid %></td>
      <td><%= c.name %></td>
      <td><%= c.type %></td>
      <td><%= c.notnull %></td>
      <td><%= c.dflt_value %></td>
      <td><%= c.pk %></td>
    </tr>
  <% }) %>
</table>

<h4>Add column</h4>
<form method="post" action="/dbadmin/<%= table %>/add-column">
  <input name="column_name" placeholder="column_name" />
  <input name="column_type" placeholder="TEXT" />
  <button type="submit">Add Column</button>
</form>

<h4>Drop column (may not be supported by SQLite version)</h4>
<form method="post" action="/dbadmin/<%= table %>/drop-column">
  <input name="column_name" placeholder="column_name" />
  <button type="submit">Drop Column</button>
</form>

<h3>Rows (first 500)</h3>
<table border="1">
  <tr>
    <% cols.forEach(function(c){ %>
      <th><%= c.name %></th>
    <% }) %>
    <th>Actions</th>
  </tr>

  <% rows.forEach(function(r){ %>
    <tr>
      <form method="post" action="/dbadmin/<%= table %>/<%= r[cols.find(c => c.pk === 1) ? cols.find(c => c.pk === 1).name : cols[0].name] %>/update">
      <% cols.forEach(function(c){ %>
        <td>
          <input name="<%= c.name %>" value="<%= r[c.name] %>" />
        </td>
      <% }) %>
      <td>
        <button type="submit">Update</button>
      </form>
      <form method="post" action="/dbadmin/<%= table %>/<%= r[cols.find(c => c.pk === 1) ? cols.find(c => c.pk === 1).name : cols[0].name] %>/delete" style="display:inline">
        <button type="submit" onclick="return confirm('Delete this row?')">Delete</button>
      </form>
      </td>
    </tr>
  <% }) %>
</table>

<h3>Insert new row</h3>
<form method="post" action="/dbadmin/<%= table %>/insert">
  <% cols.forEach(function(c){ %>
    <div>
      <label><%= c.name %> (<%= c.type %>)</label>
      <input name="<%= c.name %>" />
    </div>
  <% }) %>
  <button type="submit">Insert</button>
</form>

<%- include('../partials/footer') %>
```