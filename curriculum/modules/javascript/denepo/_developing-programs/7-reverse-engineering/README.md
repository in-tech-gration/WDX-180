# Reverse Engineering

An important skill in programming is **reverse-engineering**.

Reverse-engineering is studying the **behavior** of a program _without_ seeing
it's source code, then writing code that behaves the same. It goes something
like this:

1. **Describe the Behavior**: Use the program and explore it's behavior with
   different inputs and outputs. Describe the behavior by writing test cases, a
   user story, acceptance criteria, and a description. Giving the program a
   title is also helpful.
2. **Plan your Goals**: What important goals can you imagine between the input
   and the output? Mark these with comments in your empty file. Describing the
   data in and data out of each goal can be helpful.
3. **Plan your Strategy**: Start writing comments or pseudo code in each goal to
   imagine how you could solve it. You may notice your goals need to change,
   that's fine! As you solve a problem you understand it better.
4. **Write your Code**: Work through your goals one at a time, developing the
   program from input to output. Again, you may discover you need to change your
   goals or your strategy inside each goal. That's not a problem! Development is
   not a straight line, it's about iteration.

## The Exercises

The exercises in this chapter have two files:

- `/mystery.js`: This file contains a working program with _obfuscated_ code.
  You can use the program, but it's (almost) impossible to understand the code.
- `/solution.js`: This file is empty.

Your task is to study the mystery programs and to reverse-engineer their
behavior in the `/solution.js` file following the steps described above. When
you are finished each solution file will have a working program along with
comments describing the behavior, goals, and data in / data out.

---

## More Practice

If you like reverse engineering and want more practice, you can do it with any
program in this repository! Replace the query in a program's URL with
`?obf&study` instead of `?--defaults` and you will be able to run it without
being able to read the code.
