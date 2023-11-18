# Reading Programs

Learning to read code is learning to ask the right questions then finding your
answers in the code. In this folder you will practice asking important questions
about a new program, then exploring the code to find your answers. Depending on
what you want to learn from the code you will need to ask and answer different
questions.

The code in this folder is a collection of fully working programs that use Just
Enough JavaScript. Each file has block comments (`/* ... */`) to help you find
your way through the important steps of the program. Below are some tips to help
you get started reading the programs:

- [Zooming in, Zooming out](#zooming-in-zooming-out) is about asking the right
  questions
- [Drawing on Code](#drawing-on-code) is about finding the answers

You can also have a look at this guide [over here](https://www.youtube.com/watch?v=7nCCQQFbMOM)
 by our dear friend Evan!

> Note: 
> 
> The video has some UI differences but the content is the same with our version.
> Just follow the link to the exercise `getting-an-orange.js`!
---

## Printing Code

Code printed out on paper is a great study resource. If you'd like to save these
programs as a PDF or print them out you can open them in the browser by opening
them with `study-lenses` then using the `?print` lens, there is a guide in the
main repo: `../printing-code.mp4`.

You can also draw on or print any of the JS programs in this repo after opening
them with Study Lenses by replacing `?--defaults` with `?highlight`

---

## Code Reading Session

Reading code is like a nice sunny day, best enjoyed with friends. Try following
this code-reading [Session Agenda](./session-agenda.md) to give some structure
to your study time.

---

## Zooming in, Zooming out

Reading code is a balance between understanding the big picture and all the tiny
details. If you spend too much time on the big picture you'll miss the details.
If you spend all your time on the details you'll miss the big picture.

There is no magic rule to find this balance. It will depend on the program
you're reading and your experience.

### Big Picture

- What does this program do?
- Can you spot different sections of the program?
- How many variables are there?
- How many user interactions are there?

### Details

- Which languages features are used in this program?
- What code is written on each line?
- How does each line of code work?

### Connections

- **Variables:**
  - Where is it declared?
  - Is it initialized with a value?
  - Where is it assigned? and what value?
  - Where is it read?
  - _hint: try the `?variables` lens_
- **Interactions:**
  - Where is each interaction written (scope, control flow, ...)?
  - Which variables do they write to?
  - How are the user-provided values used in the program?
- **Data Operations:**
  - What is the main program data? (what goes in at the beginning, what comes
    out at the end?)
  - How is the data used in each line of code?
  - How is the data used in each goal?
  - What operations are used to transform the data?
- **Program Logic:**
  - Do you see repeated snippets of code?
  - How deeply nested are the blocks?
  - Which snippets of code are executed conditionally?
  - What are the loop conditions?
  - Which lines of code early in the program make a difference later on?

---

## Drawing on Code

There's more you can do with code than run it, you can also draw on it! Drawing
on code as you read it will help to highlight important parts and to see the
connections between different parts of the program. If you don't want to print
out code to paper, you can always draw on a .js file in your browser by using
the `?highlight` lens.

### Marking Things

The lowest hanging fruit is just to mark parts of the program that come to your
attention. With an underline, or an X, or little circle, or anything else that
works for you.

No need for deep meaning. Just leave a little something to help you remember
which parts of the program you're thinking about.

### Reactions

What are your reactions to different parts of the program? Does a line confuse
you? Does another seem important? Maybe it seems important but you can't figure
out why?

Reactions can be words, sentences or just a mark with special meaning. Maybe an
`!` when something seems important, a `?` when you're not sure, or a `:)` can
also work. The sky's the limit.

### Color-Coding

Use different colors to indicated different pieces of a program.

One approach is to color-code by syntax, for example:

- **black**: primitive values
- **red**: variables
- **blue**: operations
- **green**: functions
- **orange**: control flow

Another approach might be to use different colors to visually link lines that
have a similar role in the program, for example:

- **blue**: code that is involved in reading user input
- **green**: code that is involved in displaying info to the user
- **orange**: code that processes data but does not interact with the user

What else can you think of?

### Lines Between Things

Very often lines in a program that are related are not close together on the
page. It can be helpful to connect these pieces of code with a line to see
connections across the file.

### Grouping Things

You can use circles/squares/blobs to group lines of code that are close together
and complete an important step in the program.

The programs in this folder already have steps indicated by comments, but maybe
you'd like to even break the steps into smaller steps. Or maybe you don't agree
with the steps that are laid out by the comments!
