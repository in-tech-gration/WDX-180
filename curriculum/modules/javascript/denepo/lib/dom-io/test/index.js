import {
  whenFormDataChanges,
  readString,
  readBoolean,
  readNumber,
  displayString,
} from '../index.js';

// ===== success cases =====

whenFormDataChanges('user-data', () => {
  // debugger

  // --- reading strings ---

  const word = readString('words'); // input text
  const pig = readString('pig'); // select options
  const toad = readString('toad'); // fieldset input radio

  // --- reading booleans ---

  const red = readBoolean('red'); // input checkbox

  // --- reading numbers ---

  const x = readNumber('x'); // input range
  const y = readNumber('y'); // input number

  // --- displaying strings ---

  const message = [red, word, pig, toad, x, y].join(', ');
  displayString('out', message);
});

// ===== error cases =====

// --- passing no/wrong arguments ---

// whenFormDataChanges();
// whenFormDataChanges(true);
// whenFormDataChanges('');
// whenFormDataChanges('', true);

// whenFormDataChanges('user-data', () => readNumber());
// whenFormDataChanges('user-data', () => readNumber(true));

// whenFormDataChanges('user-data', () => readString());
// whenFormDataChanges('user-data', () => readString(true));

// whenFormDataChanges('user-data', () => readBoolean());
// whenFormDataChanges('user-data', () => readBoolean(true));

// whenFormDataChanges('user-data', () => displayString());
// whenFormDataChanges('user-data', () => displayString(true));
// whenFormDataChanges('user-data', () => displayString(''));
// whenFormDataChanges('user-data', () => displayString('', true));

// --- element does not exist ---

// whenFormDataChanges('asdf', () => {});
// whenFormDataChanges('user-data', () => readBoolean('asdf'));
// whenFormDataChanges('user-data', () => readString('asdf'));
// whenFormDataChanges('user-data', () => readNumber('asdf'));
// whenFormDataChanges('user-data', () => displayString('asdf', ''));

// --- accessing wrong element types ---

// whenFormDataChanges('user-data', () => readString('red')); // wrong input type
// whenFormDataChanges('user-data', () => readNumber('red')); // wrong input type
// whenFormDataChanges('user-data', () => readBoolean('t')); // wrong input type
// whenFormDataChanges('user-data', () => readBoolean('out')); // not an input
// whenFormDataChanges('user-data', () => readNumber('out')); // not an input
// whenFormDataChanges('user-data', () => readString('out')); // not an input
// whenFormDataChanges('user-data', () => displayString('t', ''));
// whenFormDataChanges('red', () => {});

// --- elements are/not in a form ---

// whenFormDataChanges('user-data', () =>
//   readNumber('should-be-in-a-form-n'),
// );
// whenFormDataChanges('user-data', () =>
//   readString('should-be-in-a-form-s'),
// );
// whenFormDataChanges('user-data', () =>
//   readBoolean('should-be-in-a-form-b'),
// );
// whenFormDataChanges('user-data', () =>
//   displayString('should-not-be-in-a-form', ''),
// );
