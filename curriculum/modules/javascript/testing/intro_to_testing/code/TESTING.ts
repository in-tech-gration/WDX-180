// This file was created on a vite environment: npm create vite@latest => React/TS

// Pure functions:
pure_functions: {

  // eslint-disable-next-line
  function add(a:number,b:number){
    return a + b;
  }

  // Input: a,b, Output: (a new value) sum of a and b
  let cleanTotal = 0;
  cleanTotal = add(40,2);
  console.log(cleanTotal);
  
  // Impure functions:
  let total = 0;
  // eslint-disable-next-line
  function addImpure(a:number,b:number):void{
    total += a + b;
    // return undefined => :void
  }
  console.log(total, addImpure(40,2));

  // Watch out for missing var/let/const
  // function subImpure(a,b){
  //   totalSub += a - b;
  // }

  // @ts-expect-error Just testing
  // eslint-disable-next-line
  function displayAvg(a,b,c){
    const avg = (a+b+c) / 3
    //  string                number
    document.body.innerHTML = String(avg); // avg.toString()
  }
  // @ts-expect-error Just learning...
  // eslint-disable-next-line
  function getRandomLotteryNumber(){
    return Math.ceil(Math.random() * 40);
  }
  // Test that the values are between 1 and 40

  break pure_functions;

}

