function quiz(a,b,c){
    const input = prompt(`Question: Who created JavaScript?

  A) Brendan Eich
  B) Bill Gates
  C) Mark Zuckerberg

  Please select the correct option (A, B, or C).`)

 const ans = input.trim().toUpperCase();

  if (ans ==='A'){
   alert('Correct! Not only did he create JS, the prototype of the language was ready in 10 days!');
  }else if( ans === 'B'){
    alert('Nope. He lead the development of the Windows Operating System.');
  }else if(ans === 'C'){
    alert('Nope. He just came up with the idea for a social network idea.');
  }else{
    alert('Please enter A , B or C');
  }
}

quiz();