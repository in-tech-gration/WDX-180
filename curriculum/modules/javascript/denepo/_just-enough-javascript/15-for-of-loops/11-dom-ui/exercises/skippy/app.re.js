import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';
whenFormDataChanges('skippable', () => {
  let e = readNumber('skip-size'),
    r = readString('phrase'),
    a = '',
    i = 0;
  for (let s of r) i % e != 0 && (a += s), i++;
  displayString('secret-solution', a);
});
