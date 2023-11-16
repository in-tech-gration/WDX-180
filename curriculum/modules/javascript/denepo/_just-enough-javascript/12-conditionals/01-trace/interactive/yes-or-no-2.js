// #todo

'use strict';

let didConfirm = confirm('yes?');

let message;
if (didConfirm === false) {
  message = 'no';
} else {
  message = 'ok';
}

alert(message);
