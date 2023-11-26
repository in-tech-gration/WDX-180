# DOM IO

A small library of functions to build simple programs that read user input from
the DOM and output a string to the DOM. The API is scoped for building I/O
programs that listen to a form change then read strings, numbers or booleans and
display a formatted string in a `<pre>` tag. There is no support for DOM
manipulation or dynamically modifying styles.

This tight scope allows you to focus on the relationship between program inputs
and outputs, types, and debugging without getting lost in the syntax or
complexity of a full DOM-based web page.

- [documentation for the 5 library functions](DOCS.md)
- [an example of the programs you can build](./example/README.md)
