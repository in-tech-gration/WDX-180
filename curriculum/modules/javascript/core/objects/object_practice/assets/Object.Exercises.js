exercise1: {

  // ⚠️ Comment out the break statement to run this exercise
  break exercise1;

  // Instructions: 
  // Complete the function named getBusinessAddress that receives an Object 
  // representing a business as a parameter, and returns a string representation 
  // of its address.
  // Expected output: 
  const expected = "Avenuepark, number 3, 123500";

  const business = {
    "address":
    {
      "number": 3,
      "zipCode": 123500,
      "street": "Avenuepark"
    },
    "name": "100 Functions ltd."
  }

  function getBusinessAddress(business) {
    // Your code goes here...
  }

  const output = getBusinessAddress(business);

  // TESTING THAT OUR CODE WORKS AS EXPECTED:
  console.assert(
    expected === output,
    `
     Exercise 1 FAILED
     Expected output: '${expected}' is not matched by the output: '${output}'
  `
  );

}

exercise2: {

  // ⚠️ Comment out the break statement to run this exercise
  break exercise2;

  // Instructions: 
  // Write a function named getEmployeeInfo that receives an Object representing
  // an employee as a parameter, and returns a string representation of the employee's
  // full name and job title.
  // Expected output:
  const expected = "John Doe - Software Engineer";

  const employee = {
    firstName: "John",
    lastName: "Doe",
    jobTitle: "Software Engineer",
    department: "Development"
  }

  function getEmployeeInfo(employee) {
    // Your code goes here...
  }

  const output = getEmployeeInfo(employee);

  // TESTING THAT OUR CODE WORKS AS EXPECTED:
  console.assert(
    expected === output,
    `
     Exercise 2 FAILED
     Expected output: '${expected}' is not matched by the output: '${output}'
  `
  );

}

exercise3: {

  // ⚠️ Comment out the break statement to run this exercise
  break exercise3;

  // Instructions: 
  // Write a function named canDriveCar that receives 2 parameters:
  // an object named user
  // an object named car
  // and returns a boolean indicating if the user can drive the car or not.
  // Note: anybody can drive a car if it has at least 18 years old or if the car has an engine smaller than 1000cc.

  // Expected output:
  const expected = true;

  const user = {
    name: "Jane",
    age: 16,
    hasDrivingLicense: true
  }

  const car = {
    brand: "Toyota",
    model: "Yaris",
    engineCC: 900
  }

  function canDriveCar(user, car) {
    // Your code goes here...
  }

  const output = canDriveCar(user, car);

  // TESTING THAT OUR CODE WORKS AS EXPECTED:
  console.assert(
    expected === output,
    `
     Exercise 3 FAILED
     Expected output: '${expected}' is not matched by the output: '${output}'
  `
  );    
  
}

exercise4: {  

  // ⚠️ Comment out the break statement to run this exercise
  break exercise4;

  // Instructions: 
  // Write a function named getUserObject that receives 3 parameters:
  // a string named firstName
  // a string named lastName
  // a number named age
  // and returns an object representing an user, with the properties name and age.

  // Expected output:
  const expected = {
    name: "Alice Smith",
    age: 30
  };

  const firstName = "Alice";
  const lastName = "Smith";
  const age = 30;

  function getUserObject(firstName, lastName, age) {
    // Your code goes here...
  }

  const output = getUserObject(firstName, lastName, age);

  // TESTING THAT OUR CODE WORKS AS EXPECTED:
  console.assert(
    JSON.stringify(expected) === JSON.stringify(output),
    `
     Exercise 4 FAILED
     Expected output: '${JSON.stringify(expected)}' is not matched by the output: '${JSON.stringify(output)}'
  `
  );  
}

exercise5: {

  // ⚠️ Comment out the break statement to run this exercise
  break exercise5;
  
  // Instructions:   
  // Write a function named getDevelopers that receives an Array of employees as parameter.
  // Each employee has the following props:
  // name - a string
  // job - one of the following values: developer, designer, manager
  // age - a number
  // The function should return a new Array with all the employees that are developers.
  // Expected output:
  const expected = [
    { name: "Sam", job: "developer", age: 25 },
    { name: "Max", job: "developer", age: 30 }
  ];

  const employees = [
    { name: "Sam", job: "developer", age: 25 },
    { name: "Lara", job: "designer", age: 28 },
    { name: "Max", job: "developer", age: 30 },
    { name: "Nina", job: "manager", age: 35 }
  ];

  function getDevelopers(employees) {
    // Your code goes here...
  }

  const output = getDevelopers(employees);

  // TESTING THAT OUR CODE WORKS AS EXPECTED:
  console.assert(
    JSON.stringify(expected) === JSON.stringify(output),
    `
     Exercise 5 FAILED
     Expected output: '${JSON.stringify(expected)}' is not matched by the output: '${JSON.stringify(output)}'
  `
  );  



}

exercise6: {

  // ⚠️ Comment out the break statement to run this exercise
  break exercise6;

  // Instructions: 
  // Write a function named arrayToObject that receives an 
  // array of strings as parameter and returns an object where each key is 
  // an item of the array and its value is the index of that item.
  // If there are duplicate strings in the array, the value inside the object 
  // should be the index of it's first occurrence.

  // Expected output:
  const expected = {
    "apple": 0,
    "banana": 1,
    "orange": 2
  };

  const fruits = ["apple", "banana", "orange", "banana"]; 

  function arrayToObject(arr) {
    // Your code goes here...
  }

  const output = arrayToObject(fruits);

  // TESTING THAT OUR CODE WORKS AS EXPECTED:
  console.assert(
    JSON.stringify(expected) === JSON.stringify(output),
    `
     Exercise 6 FAILED
     Expected output: '${JSON.stringify(expected)}' is not matched by the output: '${JSON.stringify(output)}'
  `
  );  

}

exercise6: {

  // ⚠️ Comment out the break statement to run this exercise
  break exercise6;

  // Instructions:
  // Write a function named pickFields that receives 2 parameters:
  // an object - data
  // an Array of strings - fields
  // The function should return a new object that contains all 
  // properties of data whose name is present in the fields array.

  // Expected output:
  const expected = {
    name: "Emma",
    age: 29
  };

  const data = {
    name: "Emma",
    age: 29,
    city: "New York",
    profession: "Engineer"
  };

  const fields = ["name", "age"];

  function pickFields(data, fields) {
    // Your code goes here...
  }

  const output = pickFields(data, fields);

  // TESTING THAT OUR CODE WORKS AS EXPECTED:
  console.assert(
    JSON.stringify(expected) === JSON.stringify(output),
    `
     Exercise 6 FAILED
     Expected output: '${JSON.stringify(expected)}' is not matched by the output: '${JSON.stringify(output)}'
  `
  );    

}

exercise7: {

  // ⚠️ Comment out the break statement to run this exercise
  break exercise7;

  // Instructions:
  // Write a function named getHighestPaidEmployee that receives 2 parameters:
  // employees - an Array of objects representing employees of a company. 
  // Each has the following properties
  // name - a string representing the name of the employee
  // departmentId - a string representing the ID of the department the employee works in
  // salary - a number representing the salary of the employee, per month
  // departmentId - a string representing the ID of a department

  // The function should return the name of the employee with the highest salary in 
  // the specified department. If no employee exists in that department return undefined.

  // Expected output:
  const expected = "Olivia";

  const employees = [
    { name: "Liam", departmentId: "D1", salary: 4000 },
    { name: "Olivia", departmentId: "D2", salary: 5000 },
    { name: "Noah", departmentId: "D1", salary: 4500 },
    { name: "Emma", departmentId: "D2", salary: 4800 }
  ];

  const departmentId = "D2";

  function getHighestPaidEmployee(employees, departmentId) {
    // Your code goes here... 
  }

  const output = getHighestPaidEmployee(employees, departmentId);

  // TESTING THAT OUR CODE WORKS AS EXPECTED:
  console.assert(
    expected === output,
    `
     Exercise 7 FAILED
     Expected output: '${expected}' is not matched by the output: '${output}'
  `
  );


}

exercise8: {

  // ⚠️ Comment out the break statement to run this exercise
  break exercise8;

  // Instructions:
  // Write a function named flipObject that receives an Object 
  // describing people and their jobs and returns a new object 
  // with the jobs as keys, and names as values.

  // Expected output:
  const expected = {
    "Developer": [ "Alice", "Alan"],
    "Designer": [ "Bob" ],
    "Manager": [ "Charlie" ]
  };

  const people = {
    "Alice": "Developer",
    "Alan": "Developer",
    "Bob": "Designer",
    "Charlie": "Manager"
  };

  function flipObject(obj) {
    // Your code goes here...
  }

  const output = flipObject(people);

  // TESTING THAT OUR CODE WORKS AS EXPECTED:
  console.assert(
    JSON.stringify(expected) === JSON.stringify(output),
    `
     Exercise 8 FAILED
     Expected output: '${JSON.stringify(expected)}' is not matched by the output: '${JSON.stringify(output)}'
  `
  );
}

exercise9: {

  // ⚠️ Comment out the break statement to run this exercise
  break exercise9;

  // Instructions:
  // Write a function named extractElementsBetweenPositions that receives 3 parameters:
  // an Array of numbers - numbers
  // a number - n
  // a number - m
  // and returns a new Array containing all elements that have their position between n and m (both included).
  // NOTE: there's no guarantee that n is lower than m.

  // Expected output:
  const expected = [30, 40, 50];

  const numbers = [10, 20, 30, 40, 50, 60, 70];
  const n = 2;
  const m = 4;

  function extractElementsBetweenPositions(numbers, n, m) {
    // Your code goes here...
  }

  const output = extractElementsBetweenPositions(numbers, n, m);

  console.assert(
    JSON.stringify(expected) === JSON.stringify(output),
    `
     Exercise 9 FAILED
     Expected output: '${JSON.stringify(expected)}' is not matched by the output: '${JSON.stringify(output)}'
  `
  );

}

exercise10: {

  // ⚠️ Comment out the break statement to run this exercise
  break exercise10;

  // Instructions:
  // Write a function named getLongestString that receives an Array 
  // of strings as parameter and returns the longest one.
  // If the Array is empty, return an empty string.
  // If there are multiple strings of the same maximum length, return the first one.

  // Expected output:
  const expected = "elephant";

  const strings = ["cat", "elephant", "dog", "giraffe", "lion"];

  function getLongestString(strings) {
    // Your code goes here... 
  }

  const output = getLongestString(strings);

  console.assert(
    expected === output,
    `
     Exercise 10 FAILED
     Expected output: '${expected}' is not matched by the output: '${output}'
  `
  );

}

exercise11: {

  // ⚠️ Comment out the break statement to run this exercise
  break exercise11;

  // Instructions:
  // Write a function named doubleNumbers that takes an array of numbers 
  // as a parameter. The function should return a new array where each 
  // element of the original array is doubled.

  // Expected output:
  const expected = [2, 4, 6, 8, 10];

  const numbers = [1, 2, 3, 4, 5];

  function doubleNumbers(numbers) {
    // Your code goes here...
  }

  const output = doubleNumbers(numbers);

  console.assert(
    JSON.stringify(expected) === JSON.stringify(output),
    `
     Exercise 11 FAILED
     Expected output: '${JSON.stringify(expected)}' is not matched by the output: '${JSON.stringify(output)}'
  `
  );


}

exercise12: {

  // ⚠️ Comment out the break statement to run this exercise
  break exercise12;

  // Instructions:
  // Write a function named mergeObjects that takes two objects as parameters 
  // and returns a new object that combines the properties of both objects.
  // If both objects have a property with the same name, the value from 
  // the second object should overwrite the value from the first object.

  // Expected output:
  const expected = {
    name: "Alice",
    age: 30,
    city: "New York"
  };

  const obj1 = {
    name: "Alice",
    age: 25
  };

  const obj2 = {
    age: 30,
    city: "New York"
  };

  function mergeObjects(obj1, obj2) {
    // Your code goes here...
  }

  const output = mergeObjects(obj1, obj2);

  console.assert(
    JSON.stringify(expected) === JSON.stringify(output),
    `
     Exercise 12 FAILED
     Expected output: '${JSON.stringify(expected)}' is not matched by the output: '${JSON.stringify(output)}'
  `
  );

}

exercise13: {

  // ⚠️ Comment out the break statement to run this exercise
  break exercise13;

  // Instructions:
  // Write a function named groupByProperty that takes an array of objects 
  // and a property name as parameters. The function should return an object 
  // where the keys are the unique values of the specified property, 
  // and the values are arrays of objects that have that property value.

  // Expected output:
  const expected = {
    "fruit": [
      { name: "apple", type: "fruit" },
      { name: "banana", type: "fruit" }
    ],
    "vegetable": [
      { name: "carrot", type: "vegetable" }
    ]
  };

  const items = [
    { name: "apple", type: "fruit" },
    { name: "carrot", type: "vegetable" },
    { name: "banana", type: "fruit" }
  ];

  const property = "type";

  function groupByProperty(items, property) {
    // Your code goes here...
  }

  const output = groupByProperty(items, property);

  console.assert(
    JSON.stringify(expected) === JSON.stringify(output),
    `
     Exercise 13 FAILED
     Expected output: '${JSON.stringify(expected)}' is not matched by the output: '${JSON.stringify(output)}'
  `
  );  
}

