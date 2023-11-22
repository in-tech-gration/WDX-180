import { reverse } from './utils/reverse.js';

// --- main program ---

const forwards = prompt('enter something to reverse') || '';

const backwards = reverse(forwards);

const message = `${forwards} --> ${backwards}`;

alert(message);
