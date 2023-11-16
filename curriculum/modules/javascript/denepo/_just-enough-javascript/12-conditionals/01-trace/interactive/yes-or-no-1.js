// #todo

'use strict';

let didConfirm = confirm('yes?');

let message;
if (didConfirm) {
  message = 'ok';
} else {
  message = 'no';
}

alert(message);
