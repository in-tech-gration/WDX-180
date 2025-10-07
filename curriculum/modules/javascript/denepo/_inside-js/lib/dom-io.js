// --- constants ---

const STRING_INPUTS = [
  'text',
  'email',
  'password',
  'search',
  'radio',
  'url',
  'tel',
  'date',
  'time',
  'month',
  'week',
  'datetime-local',
  'color',
  'hidden',
];

const BOOLEAN_INPUTS = ['checkbox'];

const NUMBER_INPUTS = ['number', 'range'];

const NO_ARG = Symbol('no arg');

const NO_ID = 'you did not pass an element id (first argument)';

const INVALID_ID = 'id is not a string (first argument)';

// --- helper functions ---

const wrongInputMessage = ({
  type = 'strings',
  id = '',
  allowed = [],
  name = 'input',
}) => `${name.toLowerCase()}${id ? `#${id}` : ''} is not for ${type}.
${
  allowed && allowed.length > 0
    ? `try using one of these types instead:\n- ${allowed.join('\n- ')}`
    : ''
}
`;

// ========= read functions =========

export const readString = (id = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }
  if (element.nodeName !== 'INPUT') {
    throw new TypeError(
      `${element.nodeName.toLowerCase()}#${id} is not an <input> element`,
    );
  }
  if (!STRING_INPUTS.includes(element.type)) {
    throw new TypeError(
      wrongInputMessage({
        allowed: STRING_INPUTS,
        name: element.nodeName,
        id: element.id,
      }),
    );
  }

  return element.value || '';
};

export const readBoolean = (id = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }
  if (element.nodeName !== 'INPUT') {
    throw new Error(
      `${element.nodeName.toLowerCase()}#${id} is not an <input> element`,
    );
  }
  if (!BOOLEAN_INPUTS.includes(element.type)) {
    throw new Error(
      wrongInputMessage({
        allowed: BOOLEAN_INPUTS,
        name: element.nodeName,
        id: element.id,
        type: 'booleans',
      }),
    );
  }

  return element.checked;
};

export const readNumber = (id = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }
  if (element.nodeName !== 'INPUT') {
    throw new Error(
      `${element.nodeName.toLowerCase()}#${id} is not an <input> element`,
    );
  }
  if (!NUMBER_INPUTS.includes(element.type)) {
    throw new Error(
      wrongInputMessage({
        allowed: NUMBER_INPUTS,
        name: element.nodeName,
        id: element.id,
        type: 'numbers',
      }),
    );
  }

  return Number(element.value || 0);
};

// ========= set functions =========

export const setString = (id = NO_ARG, newValue = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }
  if (newValue === NO_ARG) {
    throw new Error('no new string was passed (second argument)');
  }
  if (typeof newValue !== 'string') {
    throw new TypeError('new value is not a string (second argument)');
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }
  if (element.nodeName !== 'INPUT') {
    throw new Error(
      `${element.nodeName.toLowerCase()}#${id} is not an <input> element`,
    );
  }
  if (!STRING_INPUTS.includes(element.type)) {
    throw new Error(
      wrongInputMessage({
        allowed: STRING_INPUTS,
        name: element.nodeName,
        id: element.id,
      }),
    );
  }

  element.value = newValue;
};

export const setBoolean = (id = NO_ARG, newValue = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }
  if (newValue === NO_ARG) {
    throw new Error('no new boolean was passed (second argument)');
  }
  if (typeof newValue !== 'boolean') {
    throw new TypeError('new value is not a boolean (second argument)');
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }
  if (element.nodeName !== 'INPUT') {
    throw new Error(
      `${element.nodeName.toLowerCase()}#${id} is not an <input> element`,
    );
  }
  if (!BOOLEAN_INPUTS.includes(element.type)) {
    throw new Error(
      wrongInputMessage({
        allowed: BOOLEAN_INPUTS,
        name: element.nodeName,
        id: element.id,
        type: 'booleans',
      }),
    );
  }

  element.checked = newValue;
};

export const setNumber = (id = NO_ARG, newValue = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }
  if (newValue === NO_ARG) {
    throw new Error('no new number was passed (second argument)');
  }
  if (typeof newValue !== 'number') {
    throw new TypeError('new value is not a number (second argument)');
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }
  if (element.nodeName !== 'INPUT') {
    throw new Error(
      `${element.nodeName.toLowerCase()}#${id} is not an <input> element`,
    );
  }
  if (!NUMBER_INPUTS.includes(element.type)) {
    throw new Error(
      wrongInputMessage({
        allowed: NUMBER_INPUTS,
        name: element.nodeName,
        id: element.id,
        type: 'numbers',
      }),
    );
  }

  element.value = String(newValue);
};

// ========= reading & setting <select> elements =========

export const readSelection = (id = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }
  if (element.nodeName === 'OPTION') {
    throw new TypeError(
      `do not read the <option> element directly, read the parent <select> instead`,
    );
  }
  if (element.nodeName !== 'SELECT') {
    throw new TypeError(
      `${element.nodeName.toLowerCase()}#${id} is not a <select> element`,
    );
  }

  return element.value || '';
};

export const setSelection = (id = NO_ARG, optionValue = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }
  if (optionValue === NO_ARG) {
    throw new Error('no new string was passed (second argument)');
  }
  if (typeof optionValue !== 'string') {
    throw new TypeError('new value is not a string (second argument)');
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }
  if (element.nodeName === 'OPTION') {
    throw new TypeError(
      `do not set the <option> element directly, set the parent <select> instead`,
    );
  }
  if (element.nodeName !== 'SELECT') {
    throw new TypeError(
      `${element.nodeName.toLowerCase()}#${id} is not a <select> element`,
    );
  }

  const hasOptionValue = Array.from(element.children).find(
    (child) => child.value === optionValue,
  );
  if (!hasOptionValue) {
    throw new Error(
      `${element.nodeName.toLowerCase()}#${id} has no option with value "${optionValue}"`,
    );
  }

  element.value = optionValue;
};

// ========= display to DOM element =========

export const display = (id = NO_ARG, newValue = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }
  if (newValue === NO_ARG) {
    throw new Error('you did not pass a value to display (second argument)');
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }
  if (
    element.nodeName === 'OPTION' ||
    element.nodeName === 'SELECT' ||
    (element.nodeName === 'INPUT' &&
      (STRING_INPUTS.includes(element.type) ||
        BOOLEAN_INPUTS.includes(element.type) ||
        NUMBER_INPUTS.includes(element.type)))
  ) {
    throw new Error(
      `${element.nodeName}#${id} is not for displaying data\n` +
        '- try using a "set" function to update it\'s value' +
        '- or changing it to a different element or input type',
    );
  }

  element.innerHTML = newValue;
};

export const append = (id = NO_ARG, newValue = NO_ARG) => {
  if (id === NO_ARG) {
    throw new Error(NO_ID);
  }
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }
  if (newValue === NO_ARG) {
    throw new Error('you did not pass a value to append (second argument)');
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new Error(`there is no element with id "${id}"`);
  }
  if (
    element.nodeName === 'OPTION' ||
    element.nodeName === 'SELECT' ||
    (element.nodeName === 'INPUT' &&
      (STRING_INPUTS.includes(element.type) ||
        BOOLEAN_INPUTS.includes(element.type) ||
        NUMBER_INPUTS.includes(element.type)))
  ) {
    throw new Error(
      `${element.nodeName}#${id} is not for displaying data\n` +
        '- try using a "set" function to update it\'s value' +
        '- or changing it to a different element or input type',
    );
  }

  element.innerHTML += newValue;
};
