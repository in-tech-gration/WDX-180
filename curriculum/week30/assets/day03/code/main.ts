// Basic TS Syntax: value:TYPE
// value => variable, argument, parameter, etc.
// TYPE: string, number, boolean, function, object, etc. (built-in and custom types)

basics: {

  // Basic primitives:
  const str:string = "42";
  str.toUpperCase();
  str.toFixed(); // ❌ Property 'toFixed' does not exist on type 'string'
  str = 32; // ❌ Cannot assign to 'str' because it is a constant.ts(2588)
  
  let num:number = 42;
  num.toFixed();
  num.toUpperCase(); // ❌ Property 'toUpperCase' does not exist on type 'number'.ts(2339)
  num = 32;
  num = false; // ❌ Type 'boolean' is not assignable to type 'number'.ts(2322)
  // Type 'boolean' => RIGHT side: false
  // is not assignable to => OPERATOR =
  // type 'number' => LEFT side: num

  const bool:boolean = false; // 'bool' is declared but its value is never read.ts(6133)
  const array:[] = []
  console.log(array.toFixed()); // ❌ Property 'toFixed' does not exist on type '[]'
  array.sort();
  array.length;
  array.lll; // ❌ Property 'lll' does not exist on type '[]'
  array.lengnt;

  // TODO: Come back here and change any to a specific type:
  let futureValue:any; // any => similar to disabling TS types
  futureValue = {};
  futureValue = 42;
  futureValue = "42";
  futureValue.toFixed();

  // Catch common typos that are hard to find or see
  // const reallyLongDefinition = "....";
  // console.log(reallyLongdefiniton);

  let whatever; // TS => type:any
  whatever = "42";
  whatever.toLowerCase();
  // whatever = 42;
  whatever.toFixed(); // ❌ Property 'toFixed' does not exist on type 'string'.

  const user = {
    firstName: "first"
  }
  user.firstname; // ❌ Property 'firstname' does not exist on type '{ firstName: string; }'. Did you mean 'firstName'?
  user.age = 42; // ❌ Property 'age' does not exist on type '{ firstName: string; }'

  // type <TYPE_NAME> = <TYPE>
  type Years = number;
  let years:Years = 11;

  type Message = {
    sender: string;
    recipient: string;
    content: string;
    date: Date;
    isEncrypted: boolean;
  }

  const message: Message = {
    sender: "Alice",
    recipient: "Bob",
    content: "Hi there!",
    date: new Date(),
    isEncrypted: true
  }

  message.date.getFullYear();
  message.date.map(function(){}); // ❌

  // Arrays: any[], number[], boolean[], string[]

  const arrayOfNums:number[] = [10,20,30];
  arrayOfNums[0].toUpperCase(); // ❌
  arrayOfNums[2].toExponential();

  // Array<number|string> give me a type for an Array that can contain BOTH strings and numbers (only numbers, only strings or both)
  const arrayOfStringsAndNumbers:(string | number)[] = [10,"10","30"]
  // const arrayOfStringsAndNumbers:Array<number|string> = [10,"10","30"]
  // Some in here did arrayOfStringsAndNumbers.unshift("11")
  // Some in here did arrayOfStringsAndNumbers.unshift(2211)
  console.log(arrayOfStringsAndNumbers);
  arrayOfStringsAndNumbers[0].toFixed(); // What if [0] is string?
  arrayOfStringsAndNumbers[1].toUpperCase(); // What if [1] is number?

  const first  = arrayOfStringsAndNumbers[0];
  const second = arrayOfStringsAndNumbers[1];
  if ( typeof first === "number" ){
    first.toFixed();
  }
  if ( typeof second === "string" ){
    second.toUpperCase();
  }

  type NumberGrade = 0 | 1 | 2 | 3 | 4;
  const grade:NumberGrade = 1;
  const gradeB:NumberGrade = 11;

  // A+, A, B, C, C-
  type Grade = "A" | "A+" | "B" | "C" | "C-";
  const studentAGrade:Grade = "A";
  const studentBGrade:Grade = "A+";
  const studentCGrade:Grade = "B";
  // Wrong grades:
  const studentDGrade:Grade = "B-";
  const studentEGrade:Grade = "D";
  const studentFGrade:Grade = 10;

  console.log(
    studentAGrade, studentBGrade, studentCGrade, studentDGrade, studentEGrade
  )

  // const a:Grade = "" // We also get intellisense out-of-the-box!

}
