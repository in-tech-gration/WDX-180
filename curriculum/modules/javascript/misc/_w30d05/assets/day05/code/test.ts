unions_and_never: {

  console.log("Test");
  let whatever:number|string;
  // whatever = "32";
  
  function getFromServer():number|string{
    return Math.random() > 0.5 ? 42 : "42";
  }
  
  whatever = getFromServer();
  
  if ( typeof whatever === "string" ){
    console.log(typeof whatever);
    whatever.toUpperCase();
  } else {
    // This is an impossibility given our code
    whatever.toPrecision();
  }
  
  // function upper():never {
  //   throw new Error("Whatever");
  // }

}

unreachable_code:{

  function tryInfiniteLoop(){
  
    let result;
    
    let i = 0;
  
    while ( true ){
      result = i;
      i--;
    }
    
    result = "Loop ended";
    return result;
  
  }
  
  // const result = tryInfiniteLoop();

}  

type_assertions_and_number_literals:{

  type Grade = 0|1|2;
  // type sales = 5|15|25|50

  let grade:Grade = 3; // Wrong
  let gradeC:Grade = -1; // Wrong
  let gradeB:Grade = 0;
  //                       0    1    2
  const gradeToLetter = [ "A", "B", "C" ];

  const correctGrade = 10-9; // <= We get this from a super-safe server
  const gradeA:Grade = correctGrade as Grade;
  // "as Grade", says to TS: stop worrying and think of this type as Grade

  console.log( gradeToLetter[gradeB] );
  console.log( gradeToLetter[gradeA] );

  type MeaningOfTheUniverse = 42;
  type oneString = "JavaScript";

  let notTheMeaningOfEverything:MeaningOfTheUniverse = 43;
  let theMeaningOfEverything:MeaningOfTheUniverse = 42;

  let notThebestLanguage:oneString = "javascript";
  let bestLanguage:oneString = "JavaScript";

}

chatGPT:{ 

  // Prompt: Please give me a TypeScript number literal type between the values 0 and 50, like 0|1|2|3 up to 50
  // @ts-ignore 
  type NumberFrom0To50 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50;


}

range: {

  // Range: https://stackoverflow.com/questions/39494689/is-it-possible-to-restrict-number-to-a-certain-range
  type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

  type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

  // function Range(a,b){} // Function
  // Range(75,201); // Function call with arguments
  // type Range = ...
  // Range<1,2>

  type CelsiusPolarRanges = Range<75, 201>
  type Celsius = Range<0,101>
  type ValidMonths = Range<1,13>

}

import_export: {

  // export type NumberRange = 1|2|3;
  // import { NumberRange } from "./type.ts"
  // type ValidMonths = NumberRange<1,12>
  // let month:ValidMonths = 2;

}

months: {

  break months;

  // MDN: May = 4 (January === 0, December === 11)
  type ValidMonth = 1|2|3|4|5|6|7|8|9|10|11|12;
  // The | thing is a Union Type operator in TS
  //               0    1      2     3      4      5      ...
  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const currentMonth = new Date().getMonth();
  // const correctCurrentMonth:ValidMonth = currentMonth + 1; // This will not work. TS will still complain

  function getValidMonth( month:number ):ValidMonth{
    if ( Number.isNaN(month) ){
      throw new Error("Incorrect month type");
    }
    if ( month < 1 || month > 12 ){
      throw new Error("Incorrect month type");
    }
    // Check for floating point: 3.4
    let validMonth:ValidMonth = month as ValidMonth; // as TS operator
    return validMonth;
  }

  const correctCurrentMonth:ValidMonth = getValidMonth(currentMonth);
  console.log( months[correctCurrentMonth] );

  let vacationMonth:ValidMonth = 0;
  let salesMonth:ValidMonth = 13;
  let correctMonth = 12;

  console.log( 0, months[vacationMonth] );
  console.log( 13, months[salesMonth] );
  console.log( 13, months[salesMonth].toUpperCase() );

  console.log( months[currentMonth+1] );
  console.log( months[correctMonth] );

}
