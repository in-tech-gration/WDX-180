# Challenge: Many Versions of the Same Program

You should think of source code _first_ as a letter to the next developer,
_second_ as a user experience, and _third_ as instructions for the computer.

All of the programs in this folder are variations of the `Cat Detector` (_found under `_just-enough-javascript/13-while-loops/06-translate/cat-detector.js`_) with small
changes so you can explore how each change effect different audiences.

## The Developer

A developer wants to easily understand what your program is supposed to do by
reading what you wrote, running the program, and checking the logs.

There are many aspects to a developer's experience of code, you should focus on
these 4 aspects for now:

- **Formatting**: Is the code easy to look at? Is the spacing and indentation
  correct? Does the layout help to see the program's structure?
- **Variable Names**: Do the variables names help understand how they are used
  in the program, without being too long or confusing?
- **Comments**: Are there enough clear comments to help understand what the
  program does, but not so many that the code is messy?
- **Logs**: Are there logs at key points in the program with helpful messages,
  but not so many logs that the console is too cluttered to understand?

## The User

For now the user interface is limited to pop-ups, but that doesn't mean you
can't already think of the user's experience!

- **Clear Instructions**: Is it clear to the use what they are expected to do?
- **Helpful Feedback**: After they have taken an action, is it clear what
  happened?
- **Consistency**: Are the instructions and the feedback consistent with each
  other and with what the program actually did?
- **Tone of Voice**: Are the instructions and feedback polite? rude? other?

## The Computer

What matters to the computer is how the instructions in your code effect the
program's trace. The only instructions that matter to the computer (for now)
will either involve memory (_variables and types_), introduce new data
(`prompt`), decide which line to execute next (_control flow_), or perform a
computation (_operators_).

- **Variables and Types**: What type does each variable store, and how are they
  used?
- **Data Input**: what data types are passed into the program by the user?
- **Control Flow Structures**: how are the control flow structures used in the
  program?
- **Operators**: what operators are used in the program? in what combinations?

`console.log` and `alert` actually do not matter for the program's trace! Both
of them display data but neither of them change anything in memory, take input,
change control flow, or computer a new value.
