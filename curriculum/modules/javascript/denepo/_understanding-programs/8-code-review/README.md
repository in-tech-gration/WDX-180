# Code Review

Programming is collaborative work, when you work together you help each other!
Code reviews is one of the most important ways developers can help each other
grow and deliver the best possible software.

The goal of a code review is provide _constructive feedback_. You study your
colleague's code and let them know what is good, what could be better, and
suggest improvements if you can. The most important thing to keep in mind when
writing a code review is:

- Talk about the code, not the person.

If there is something you would change in the code don't say "_you_ used a bad
variable name", say something like "_this variable name_ could be more clear".
Remember that you're working towards the same goal and trying to help each other
learn.

Code review is also subjective, there is not a single correct answer. In a
collaborative project code review is a conversation not an exam. To practice
this conversation try completing these Code Review exercises with a study
partner or in a small group.

## Code Review Questions

There are a lot of different aspects to a program. An efficient code review will
be thorough, but not painfully detailed. For now because you're learning we'll
stick with "painfully detailed". Below is a list of everything you will learn to
review in this chapter:

- **Behavior**:
  - _Title_: does the program have a title? Does that title make sense?
  - _Description_: does the program have a clear description? Does it describe
    the program's actual behavior?
  - _User Story_: If there is a user story, is it clear and does it have helpful
    acceptance criteria?
  - _Test Cases_: If there are test cases, are they helpful and are they
    correct?
- **Goals**:
  - _Names_: Are there comments marking the program's goals? If so, do they have
    clear and helpful names?
  - _Progression_: Do the goals make sense and actually mark important steps in
    the program?
  - _Data_: If the goals describe before/after data, is the description clear
    and accurate?
- **Comments**:
  - _"Why" not "what"_: Do other comments describe _why_ a line of code is in
    the program, not _what_ code is written on that line?
  - _Quantity/Quality_: Overall, do the comments help to understand the program
    without adding too much clutter?
- **Linting**:
  - Are there any linting mistakes? If there are, list them and suggest how to
    fix each one.
- **Variables**:
  - _Location_: Is each variable declared in the smallest scope possible, and as
    close to its first use as possible?
  - _Initial Values_: Does each variable have a helpful initial value? If a
    variable is uninitialized, is that the most helpful choice?
  - _Roles_: Does each variable's name help explain it's role in the program? If
    not, suggest a better name.
  - _Domain_: Does each variable's name help explain the data's purpose in the
    program's domain?
  - _Quality/Quantity_: Are there too many extra variables cluttering the code
    without making it easier to understand the program?
- **Logs**:
  - _Trace_: If there are logs in the program, do they print a helpful trace of
    the program's execution?
  - _Quantity/Quality_: Do the logs help you understand the program without
    cluttering the source code or console?
- **Logic**:
  - _Operations_: Are the operators in the program as clear and simple as
    possible? If you find an operation that is more complicated than necessary,
    suggest a simpler solution.
  - _Control Flow_: Is the control flow as clear and simple as possible? If you
    think some of the control flow is too complicated, suggest an improvement.

## Code Review Template

Here's a template comment you will use to structure your reviews in these
exercises. You can also use this template outside of these exercises to review
your own or your classmate's work.

```js
/* ===== CODE REVIEW =====


  BEHAVIOR:
    TITLE:
    DESCRIPTION:
    USER STORY:
    TEST CASES:

  GOALS:
    NAMES:
    PROGRESSION:
    DATA:

  COMMENTS:
    "WHY" not "WHAT":
    QUANTITY/QUALITY:

  LINTING:

  VARIABLES:
    LOCATION:
    INITIAL VALUES:
    ROLES:
    DOMAIN:
    QUANTITY/QUALITY:

  LOGS:
    TRACE:
    QUANTITY/QUALITY:

  LOGIC:
    OPERATIONS:
    CONTROL FLOW:
*/
```
