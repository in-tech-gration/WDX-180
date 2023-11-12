'use strict';

/* Local Configurations

  you may have noticed a lot of files named /study.json in this repository
    this is how you set default study configurations for each folder of code

  when you use the ?--defaults option, a file will open using the local configurations
    you can think of this like the suggested way to study each file
    but you can always change lenses if you want to
    and you can edit the study.json files to set your own defaults!
  most of the time exercises will open with ?--defaults

  which lens is the default for this folder?

*/

let backwards = null;
while (backwards === null) {
  backwards = prompt("enter something backwards, we'll reverse it");
  console.log(backwards);
}

let fixed = '';
for (let character of backwards) {
  fixed = character + fixed;
}
console.log(fixed);

let processed = '"' + backwards + '" -> "' + fixed + '"';
alert(processed);
