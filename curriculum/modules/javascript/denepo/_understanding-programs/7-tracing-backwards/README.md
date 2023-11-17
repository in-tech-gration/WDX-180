# Tracing Backwards

Tracing backwards is different from tracing forwards because instead of asking
"_what_?" you will ask "_why_?":

- **Tracing Forwards**: What line will execute next? What values in memory will
  change?
- **Tracing Backwards**: Why did this line execute? Why did this value in memory
  change?

Tracing backwards from a program's output is a skill that will be very useful
when you are debugging or trying to understand a larger program.

## The Exercises

Here are some steps to help you study the programs in this chapter:

1. Study the program using the questions you learned in _Describing Programs_.
2. Write `console.log` statements at important points of execution, whatever you
   find important. You will use these logs as check-points when tracing
   backwards through the program.
3. Choose a test case you want to study and run the program, keep the logs in
   the console for step 4.
4. Use a trace table to step _backwards_ through the program from the final
   output to the input.
5. Check your work with the `[trace]` button, but you will need to read the
   trace from bottom to top.
