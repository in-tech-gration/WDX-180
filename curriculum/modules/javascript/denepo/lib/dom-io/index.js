// ===== constants =====

const NO_ARG = Symbol('no arg');

// ===== the listener function =====

export const whenFormDataChanges = (id = NO_ARG, handler = NO_ARG) => {
  const functionName = 'whenFormDataChanges';

  validateId(id, functionName);

  if (handler === NO_ARG) {
    throw new Error(
      `you did not pass a handler function.\n-> first argument of ${functionName}\n`,
    );
  }
  if (typeof handler !== 'function') {
    throw new TypeError(
      `handler must be a function.\n-> second argument of ${functionName}\n`,
    );
  }

  const element = validateGetElement(id);

  if (element.nodeName !== 'FORM') {
    throw new Error(`${element.nodeName.toLowerCase()}#${id} is not a form.\n`);
  }

  element.addEventListener('input', handler);
};

// ===== input functions =====

// --- reading a string ---

const stringInputTypes = [
  'text',
  // 'password'
];

export const readString = (id = NO_ARG) => {
  const functionName = 'readString';

  validateId(id, functionName);

  const element = validateGetElement(id);

  if (
    element.nodeName !== 'INPUT' &&
    element.nodeName !== 'SELECT' &&
    element.nodeName !== 'FIELDSET'
  ) {
    throw new Error(
      `${element.nodeName.toLowerCase()}#${id} is not an <input>, <fieldset> or <select> element\n`,
    );
  }
  if (
    element.nodeName === 'INPUT' &&
    !stringInputTypes.includes(element.type)
  ) {
    throw new Error(
      `input#${id}[type=${element.type}] is not supported for strings, try using one of these instead:\n\n- select\n- ` +
        stringInputTypes.map((type) => `input[type=${type}]`).join('\n- ') +
        '\n',
    );
  }

  validateIsFormChild(element);

  // if (element.nodeName === 'INPUT' || element.nodeName === 'SELECT') {
  //   validateHasLabel(element);
  // }

  return element.nodeName === 'FIELDSET'
    ? readFieldsetValue(element)
    : element.nodeName === 'SELECT'
    ? readSelectValue(element)
    : element.value;
};

// --- reading a boolean ---

export const readBoolean = (id = NO_ARG) => {
  const functionName = 'readBoolean';

  validateId(id, functionName);

  const element = validateGetElement(id);

  if (element.nodeName !== 'INPUT') {
    throw new Error(
      `${element.nodeName.toLowerCase()}#${id} is not an <input> element\n`,
    );
  }
  if (element.type !== 'checkbox') {
    throw new Error(
      `input#${id}[type=${element.type.toLowerCase()}] is not for booleans.\n\n` +
        '- you should use input[type=checkbox]\n',
    );
  }

  validateIsFormChild(element);

  // validateHasLabel(element);

  return element.checked;
};

// --- reading a number ---

const numberInputTypes = ['number', 'range'];

export const readNumber = (id = NO_ARG) => {
  const functionName = 'readNumber';

  validateId(id, functionName);

  const element = validateGetElement(id);

  if (element.nodeName !== 'INPUT') {
    throw new Error(
      `${element.nodeName.toLowerCase()}#${id} is not an <input> element\n`,
    );
  }
  if (!numberInputTypes.includes(element.type)) {
    throw new Error(
      `input#${id}[type=${element.type}] is not supported for numbers, try using one of these instead:\n- ` +
        numberInputTypes.map((type) => `input[type=${type}]`).join('\n- ') +
        '\n',
    );
  }

  validateIsFormChild(element);

  // validateHasLabel(element);

  return Number(element.value || 0);
};

// ===== output function =====

export const displayString = (id = NO_ARG, text = NO_ARG) => {
  const functionName = 'displayString';

  validateId(id, functionName);

  if (text === NO_ARG) {
    throw new Error(
      `you did not pass a string to display.\n-> second argument of ${functionName}\n`,
    );
  }
  if (typeof text !== 'string') {
    throw new TypeError(
      `value to display must be a string.\n-> second argument of ${functionName}\n`,
    );
  }

  const element = validateGetElement(id);

  if (element.nodeName !== 'PRE') {
    throw new Error(
      `${element.nodeName.toLowerCase()}#${id} is not a <pre> tag, try:\n\n` +
        '- changing the tag to a <pre>\n' +
        '- making sure you passed the correct id\n',
    );
  }

  validateIsFormChild(element, false);

  element.innerText = text;
};

// ===== hoisted utility functions =====

function validateId(id = '', functionName = '') {
  if (id === NO_ARG) {
    throw new Error(
      `you did not pass an id.\n-> first argument of ${functionName}\n`,
    );
  }
  if (typeof id !== 'string') {
    throw new TypeError(
      `id is not a string.\n-> first argument of ${functionName}\n`,
    );
  }
}

function validateGetElement(id = '') {
  const element = document.getElementById(id);
  if (element === null) {
    throw new Error(`there is no element with id "${id}"\n`);
  }
  return element;
}

function validateIsFormChild(element, shouldBe = true) {
  let parent = element.parentElement;
  while (parent !== null) {
    if (!shouldBe && parent.nodeName === 'FORM') {
      throw new Error(
        `${element.nodeName.toLowerCase()}#${
          element.id
        } is in a <form> but it should not be, try either:\n\n` +
          '- moving the element out of the form\n' +
          '- changing the element to an input\n' +
          '- making sure you are using the correct id\n',
      );
    } else if (shouldBe && parent.node === 'FORM') {
      break;
    }
    parent = parent.parentElement;
  }
  if (shouldBe && parent !== null) {
    throw new Error(
      `${element.nodeName.toLowerCase()}#${
        element.id
      } is not in a <form> but it should be, try either:\n\n` +
        '- moving the element into a form\n' +
        '- using a different element\n' +
        '- making sure you are using the correct id\n',
    );
  }
}

// not using for the moment, too strict
function validateHasLabel(element) {
  // https://stackoverflow.com/a/285565
  let itDoes = false;

  const labels = Array.from(document.getElementsByTagName('label'));
  for (const label of labels) {
    if (
      (label.htmlFor && element.id && label.htmlFor === element.id) ||
      label.contains(element)
    ) {
      itDoes = true;
      break;
    }
  }

  if (!itDoes) {
    throw new Error(
      `${element.nodeName.toLowerCase()}#${element.id}${
        element.nodeName === 'INPUT' ? `[type=${element.type}]` : ''
      } does not have a label.\n`,
    );
  }
}

function readFieldsetValue(element) {
  if (element.childElementCount === 0) {
    throw new Error(
      `fieldset#${element.id} is empty.\n\n- try adding inputs with [type=radio]\n`,
    );
  }

  const children = Array.from(element.querySelectorAll('input'));
  if (!children.some((child) => child.nodeName === 'INPUT')) {
    throw new Error(`fieldset#${element.id} contains no <input> elements.\n`);
  }

  const inputChildren = children.filter((el) => el.nodeName === 'INPUT');
  if (!inputChildren.every((child) => child.type === 'radio')) {
    throw new Error(
      `fieldset#${element.id} contains <input> elements that are not [type=radio].\n`,
    );
  }

  const firstName = inputChildren[0].name;
  for (const child of inputChildren) {
    if (firstName !== child.name) {
      throw new Error(
        `all radio inputs in fieldset#${element.id} do not have the same name, try:\n\n` +
          '- making all of the names the same\n' +
          '- using more than one <fieldset> elements\n',
      );
    }
  }

  const radioSiblings = Array.from(
    document.querySelectorAll(`input[name=${firstName}]`),
  );

  const isChildOfFiledset = (el) =>
    el === element
      ? true
      : el === null
      ? false
      : isChildOfFiledset(el.parentElement);
  if (!radioSiblings.every(isChildOfFiledset)) {
    throw new Error(
      `some radio inputs with [name=${firstName}] are not in fieldset#${element.id}, try:\n\n` +
        `- moving all radios with this name into this fieldset#${element.id}\n` +
        `- renaming radios with this that are not in fieldset#${element.id}\n`,
    );
  }

  // for (const radioSib of radioSiblings) {
  //   validateHasLabel(radioSib);
  // }

  const checkedSibling = radioSiblings.find((sib) => sib.checked);
  if (checkedSibling) {
    return checkedSibling.value;
  } else {
    throw new Error(
      `Failed to read value from fieldset#${element.id}, no radios with [name=${firstName}] are selected. Try:\n\n` +
        '- or adding the `checked` attribute one of the radios in this <fieldset>\n',
    );
  }
}

function readSelectValue(element) {
  const children = Array.from(element.children);

  if (children.length === 0) {
    throw new Error(`select#${element.id} has no children.\n`);
  }

  if (children.some((child) => child.nodeName !== 'OPTION')) {
    throw new Error(
      `some children of select#${element.id} are not <option> tags.\n`,
    );
  }

  if (children.some((child) => child.value === '' && child.innerText === '')) {
    throw new Error(
      `some options in select#${element.id} do not have a value.\n`,
    );
  }

  if (children.some((child) => child.value !== '' && child.innerText === '')) {
    throw new Error(
      `some options in select#${element.id} do not have any text.\n`,
    );
  }

  return element.value;
}
