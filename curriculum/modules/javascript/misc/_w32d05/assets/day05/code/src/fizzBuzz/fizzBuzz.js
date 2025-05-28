export default function fizzBuzz(input){

  // Loop over the input
  const newArray = input
  .map((entry) => {
    if (entry % 3 === 0 && entry % 5 === 0) {
      return 'FizzBuzz'
    }
    if (entry % 3 === 0) {
      return 'Fizz'
    }
    if (entry % 5 === 0) {
      return 'Buzz'
    }
    return entry
  })
  return newArray.join(', ')
}