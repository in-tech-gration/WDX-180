# USEFUL REGULAR EXPRESSIONS

## REPLACE YOUTUBE ToC WITH <li>

  - Find: (\(\d?\d:\d\d\))(.*)
  or
  - Find: (\(\d?\d:\d\d\))(.*)
  or: ? (1:07:55)
  - Replace: <li>$1$2</li>
  - Replace: "$1$2",

  Example: the following text...

  ```
  00:00 - Introduction
  00:09 - What is localhost
  01:15 - What is localhost used for
  02:58 - Outro
  ```

  ...will be transformed to this:

  ```html
  <li>00:00 - Introduction</li>
  <li>00:09 - What is localhost</li>
  <li>01:15 - What is localhost used for</li>
  <li>02:58 - Outro</li>
  ```