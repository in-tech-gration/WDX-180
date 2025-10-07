// #todo

'use strict';

/* Has a Dog

  A user can input some text and learn if it has "dog" in it (upper or lower case).
    - given the user cancels:
        they are prompted again
    - given their input does not have "dog" (in any case):
        they are told there is no dog
    - given their input does have a "dog" (in any case):
        they are told their input has at least one dog

  test cases:
    contains no dogs:
      ' '           ->   'no dogs'
      'abc'         ->   'no dogs'
      'market'      ->   'no dogs'
    contains at one or more dogs:
      'dog'         ->  'at least one dog'
      'DOG'         ->  'at least one dog'
      'dOg'         ->  'at least one dog'
      'godogo'      ->  'at least one dog'
      'GOdoGO'      ->  'at least one dog'
      'A fast dog.' ->  'at least one dog'
*/
