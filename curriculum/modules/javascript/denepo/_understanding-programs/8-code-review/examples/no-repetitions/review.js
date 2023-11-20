'use strict';

/* ===== CODE REVIEW =====


  BEHAVIOR:
    TITLE: the title is helpful and makes sense, but it could be confusing.
            it can also mean the text can't have the same character more than once anywhere
    DESCRIPTION: it's clear enough. but might be confusing in the same way as the title
    USER STORY: the story and acceptance criteria are clear (besides ^)
    TEST CASES: the test cases do make the behavior more clear
            but one of them is not correct: 'JJavaSScriptt' should alert 'JavaScript'

  GOALS:
    NAMES: The first goal's name could be more clear about what input is allowed
    PROGRESSION: all good
    DATA: the second goal does not describe the data after. it could be:
        "the user's string without repeated characters"

  COMMENTS:
    "WHY" not "WHAT": the comment one line 47 is a good "why" comment
        the comment on line 56 is an unhelpful "what" comment
    QUANTITY/QUALITY: overall there is not a distracting amount of comments
        one of the comments is helpful, the other can go

  LINTING: there were a few linting mistakes
    Unexpected var: `const` should be used in the for-of loop, `let` everywhere else
    Expected '!==' and instead saw '!=': the first `if` check in the for-of should use !==

  VARIABLES:
    LOCATION: `noRepetitions` can move to the second goal where it is first used
    INITIAL VALUES: `previous` is used as a string, it should be initialized to ''
    ROLES: `noRepetitions` could be renamed to show that it is an accumulator
    DOMAIN: `next` and `prevous` could include `char` in their names
    QUANTITY/QUALITY: all good!

  LOGS:
    TRACE: yes, there is a clear trace
    QUANTITY/QUALITY: the logs are not distracting in the source or console

  LOGIC:
    OPERATIONS: the first if logic in the for-of loop is more complex than necessary
        `next` will never be an empty string so you can remove the `&& next !== ''`
    CONTROL FLOW: similar to the operations, the second condition can go
      since `next` will never be `''`, the second condition will always execute
      you can remove it and just write `previous = next;`
*/
