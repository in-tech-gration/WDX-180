// prettier-ignore
{ // so prettier does not remove the extra spacing

'use strict';

// ::::: don't forget to trace the program! :::::

/* --- gather user input --- */



let input = null;


while (input === null) {


    input = prompt('type nothing and click "enter"');


    console.log(input);


}

/* --- create a message --- */



let message = '';


if (input === '') {


    message = 'thank you for nothing!';


} else {


    message = 'this is not nothing: ' + input;


}

console.log(message);


/* --- display message to the user --- */



alert(message);


}
