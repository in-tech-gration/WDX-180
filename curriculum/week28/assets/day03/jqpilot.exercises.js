//>> EXERCISES <<//
/*
Go through each labelled statement and write the code to make the tests pass.

For each exercise, you'll be given an input and an expected output variable. 

Your task is to write the function that will make the tests pass by filling the output variable with a structure that is identical to the expected variable.

You can run this code in the browser or the terminal using Node.js.

You'll find the functions you need to complete below each statement.

At the end of each statement you'll find a test function that will check if your function is working correctly. Some of these test functions are not guaranteed to work 100% of the time, but they should give you a good idea of whether your function is working correctly or not.
*/

// Make all the keys lowercase
make_all_the_keys_lowercase: {

  const input = {
    "purchases": [
      {
        "PurchaseID": "c948c625a19a",
        "PurchaseCurrency": "CDF",
        "PurchaseItem": "car",
        "PurchaseCode": 801,
        "PurchasePrice": 3.5
      },
      {
        "PurchaseID": "117aee19d14f",
        "PurchaseCurrency": "BOB",
        "PurchaseItem": "plane",
        "PurchaseCode": 4,
        "PurchasePrice": 22
      },
      {
        "PurchaseID": "d4293b288e32",
        "PurchaseCurrency": "CNY",
        "PurchaseItem": "van",
        "PurchaseCode": 801,
        "PurchasePrice": 10.81
      }
    ]
  }

  const expected = [
    {
      "purchasecode": 801,
      "purchasecurrency": "CDF",
      "purchaseid": "c948c625a19a",
      "purchaseitem": "car",
      "purchaseprice": 3.5
    },
    {
      "purchasecode": 4,
      "purchasecurrency": "BOB",
      "purchaseid": "117aee19d14f",
      "purchaseitem": "plane",
      "purchaseprice": 22
    },
    {
      "purchasecode": 801,
      "purchasecurrency": "CNY",
      "purchaseid": "d4293b288e32",
      "purchaseitem": "van",
      "purchaseprice": 10.81
    }
  ];

  function makeAllTheKeysLowercase(input) {
    // Your code here...
  }

  const output = makeAllTheKeysLowercase(input);

  // Test the function
  testToolkit("make_all_the_keys_lowercase").testLowerCase(output, expected);

}

// Convert the array into a dict
convert_the_array_into_a_dict: {

  const input = [
    {
      "label": "instance",
      "value": "infrared"
    },
    { "label": "project", "value": "ada" },
    {
      "label": "reference",
      "value": "data"
    },
    { "label": "ID", "value": "management" }
  ]

  const expected = {
    "ID": "management",
    "instance": "infrared",
    "project": "ada",
    "reference": "data"
  }

  function convertTheArrayIntoADict(input) {
    // Your code here...
  }

  const output = convertTheArrayIntoADict(input);

  // Test the function
  testToolkit("convert_the_array_into_a_dict").testPropertiesExist(output, expected);

}

// Find out how often each number was chosen
find_out_how_often_each_number_was_chosen: {

  const input = {
    "lotteryPicks": [
      {
        "person": "Tyler",
        "numbers": [0, 2, 9, 3, 2],
        "winner": false
      },
      {
        "person": "Jack",
        "numbers": [1, 4, 2, 7, 9],
        "winner": false
      },
      {
        "person": "Harry",
        "numbers": [5, 5, 7, 0, 5],
        "winner": false
      },
      {
        "person": "Mary",
        "numbers": [8, 0, 4, 6, 5],
        "winner": false
      },
      {
        "person": "Nick",
        "numbers": [4, 8, 0, 5, 6],
        "winner": false
      },
      {
        "person": "Sophie",
        "numbers": [8, 4, 6, 9, 0],
        "winner": false
      },
      {
        "person": "Bob",
        "numbers": [0, 6, 9, 3, 3],
        "winner": false
      }
    ]
  }

  const expected = {
    "0": 6,
    "1": 1,
    "2": 3,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 4,
    "7": 2,
    "8": 3,
    "9": 4
  }

  function findOutHowOftenEachNumberWasChosen(input) {
    // Your code here...
  }

  const output = findOutHowOftenEachNumberWasChosen(input);

  // Test the function
  testToolkit("find_out_how_often_each_number_was_chosen").test(output, expected);

}

// Delete: activities
delete_activities: {

  const input = {
    "activities": {
      "friday": "puzzles",
      "monday": "golf",
      "saturday": "hacking",
      "sunday": "baking",
      "thursday": "fishing",
      "tuesday": "hiking",
      "wednesday": "reading"
    },
    "age": 52,
    "favoriteColors": [
      "white", "purple", "red"
    ],
    "id": 383885,
    "location": "Sao Paolo",
    "name": "Jack"
  }

  const expected = {
    "age": 52,
    "favoriteColors": [
      "white", "purple", "red"
    ],
    "id": 383885,
    "location": "Sao Paolo",
    "name": "Jack"
  }

  function deleteActivities(input) {
    // Your code here...
  }

  const output = deleteActivities(input);

  // Test the function
  testToolkit("delete_activities").test(output, expected);

}

// Get the raw value of: name
get_the_raw_value_of_name: {

  const input = {
    "activities": {
      "friday": "fishing",
      "monday": "golf",
      "saturday": "baking",
      "sunday": "hiking",
      "thursday": "writing",
      "tuesday": "resting",
      "wednesday": "knitting"
    },
    "age": 10,
    "favoriteColors": ["brown", "black"],
    "id": 383885,
    "location": "Chicago",
    "name": "Kelly"
  }

  const expected = "Kelly";

  function getTheRawValueOfName(input) {
    // Your code here...
  }

  const output = getTheRawValueOfName(input);

  // Test the function
  testToolkit("get_the_raw_value_of_name").test(output, expected);

}

// Get the top scores for each student in each subject
get_the_top_scores_for_each_student_in_each_subject: {

  const input = {
    "students": [
      {
        "name": "Frank",
        "grades": {
          "results": {
            "art": [61, 63, 52],
            "history": [80, 62, 53],
            "math": [84, 52, 55]
          }
        }
      },
      {
        "name": "Elsa",
        "grades": {
          "results": {
            "art": [89, 55, 98],
            "history": [89, 53, 88],
            "math": [89, 88, 76]
          }
        }
      },
      {
        "name": "Ronnie",
        "grades": {
          "results": {
            "art": [91, 95, 56],
            "history": [51, 61, 65],
            "math": [56, 83, 78]
          }
        }
      }
    ]
  }

  const expected = [
    {
      "name": "Frank",
      "grades": {
        "results": {
          "art": 63,
          "history": 80,
          "math": 84
        }
      }
    },
    {
      "name": "Elsa",
      "grades": {
        "results": {
          "art": 98,
          "history": 89,
          "math": 89
        }
      }
    },
    {
      "name": "Ronnie",
      "grades": {
        "results": {
          "art": 95,
          "history": 65,
          "math": 83
        }
      }
    }
  ]

  function getTheTopScoresForEachStudentInEachSubject(input) {
    // Your code here...
  }

  const output = getTheTopScoresForEachStudentInEachSubject(input);

  // Test the function
  testToolkit("get_the_top_scores_for_each_student_in_each_subject").test(output, expected);

}

// Get all the purchase currencies
get_all_the_purchase_currencies: {

  const input = {
    "purchases": [
      {
        "PurchaseID": "0aead63d803e",
        "PurchaseCurrency": "MUR",
        "PurchaseItem": "boat",
        "PurchaseCode": 225,
        "PurchasePrice": 90.12
      },
      {
        "PurchaseID": "f12e05534cf3",
        "PurchaseCurrency": "TTD",
        "PurchaseItem": "bus",
        "PurchaseCode": 55,
        "PurchasePrice": 67.2
      },
      {
        "PurchaseID": "cd5bf9b07bf7",
        "PurchaseCurrency": "XAG",
        "PurchaseItem": "motorcycle",
        "PurchaseCode": 4,
        "PurchasePrice": 67.2
      },
      {
        "PurchaseID": "0b9ba36ca166",
        "PurchaseCurrency": "VUV",
        "PurchaseItem": "motorcycle",
        "PurchaseCode": 3997,
        "PurchasePrice": 90.12
      },
      {
        "PurchaseID": "1e03a1e52377",
        "PurchaseCurrency": "FJD",
        "PurchaseItem": "bus",
        "PurchaseCode": 801,
        "PurchasePrice": 85.15
      }
    ]
  }

  const expected = ["MUR", "TTD", "XAG", "VUV", "FJD"];

  function getAllThePurchaseCurrencies(input) {
    // Your code here...
  }

  const output = getAllThePurchaseCurrencies(input);

  // Test the function
  testToolkit("get_all_the_purchase_currencies").test(output, expected);

}

// Convert the dict into an array
convert_the_dict_into_an_array: {

  const input = {
    "department": "sales",
    "domain": "toronto",
    "team": "cattle"
  }

  const expected = [
    {
      "label": "department",
      "value": "sales"
    },
    {
      "label": "domain",
      "value": "toronto"
    },
    { "label": "team", "value": "cattle" }
  ]

  const input2 = {
    "department": "central",
    "domain": "infrared",
    "reference": "infrared"
  }

  const expected2 = [
    {
      "label": "department",
      "value": "central"
    },
    {
      "label": "domain",
      "value": "infrared"
    },
    {
      "label": "reference",
      "value": "infrared"
    }
  ]

  function convertTheDictIntoAnArray(input) {
    // Your code here...
  }

  const output = convertTheDictIntoAnArray(input);
  const output2 = convertTheDictIntoAnArray(input2);

  // Test the function
  testToolkit("convert_the_dict_into_an_array").test(output, expected);
  testToolkit("convert_the_dict_into_an_array").test(output2, expected2);

}

// Get all unique lottery pick numbers
get_all_unique_lottery_pick_numbers: {

  const input = {
    "lotteryPicks": [
      {
        "person": "Tyler",
        "numbers": [9, 3, 9, 1, 3],
        "winner": false
      },
      {
        "person": "Jack",
        "numbers": [9, 1, 1, 5, 0],
        "winner": false
      },
      {
        "person": "Vivian",
        "numbers": [9, 1, 4, 5, 6],
        "winner": false
      }
    ]
  }

  const expected = [0, 1, 3, 4, 5, 6, 9];

  function getAllUniqueLotteryPickNumbers(input) {
    // Your code here...
  }

  const output = getAllUniqueLotteryPickNumbers(input);

  // Test the function
  testToolkit("get_all_unique_lottery_pick_numbers").testThatArraysContainTheSameValuesUnordered(output, expected);

}

// Make all the purchases verified
make_all_the_purchases_verified: {

  const input = {
    "purchases": [
      {
        "PurchaseID": "5b3207d9523c",
        "PurchaseCurrency": "BRL",
        "PurchaseItem": "truck",
        "PurchaseCode": 55,
        "PurchasePrice": 90.12
      },
      {
        "PurchaseID": "b29afb043e02",
        "PurchaseCurrency": "CUP",
        "PurchaseItem": "van",
        "PurchaseCode": 55,
        "PurchasePrice": 40.99
      },
      {
        "PurchaseID": "0f28213eff4b",
        "PurchaseCurrency": "MVR",
        "PurchaseItem": "motorcycle",
        "PurchaseCode": 55,
        "PurchasePrice": 40.99
      }
    ]
  }

  const expected = [
    {
      "PurchaseID": "5b3207d9523c",
      "PurchaseCurrency": "BRL",
      "PurchaseItem": "truck",
      "PurchaseCode": 55,
      "PurchasePrice": 90.12,
      "Verified": true
    },
    {
      "PurchaseID": "b29afb043e02",
      "PurchaseCurrency": "CUP",
      "PurchaseItem": "van",
      "PurchaseCode": 55,
      "PurchasePrice": 40.99,
      "Verified": true
    },
    {
      "PurchaseID": "0f28213eff4b",
      "PurchaseCurrency": "MVR",
      "PurchaseItem": "motorcycle",
      "PurchaseCode": 55,
      "PurchasePrice": 40.99,
      "Verified": true
    }
  ]

  function makeAllThePurchasesVerified(input) {
    // Your code here...
  }

  const output = makeAllThePurchasesVerified(input);

  // Test the function
  testToolkit("make_all_the_purchases_verified").test(output, expected);

}

// Delete: favoriteColors
delete_favoriteColors: {

  const input = {
    "activities": {
      "friday": "resting",
      "monday": "puzzles",
      "saturday": "knitting",
      "sunday": "painting",
      "thursday": "writing",
      "tuesday": "hacking",
      "wednesday": "fishing"
    },
    "age": 52,
    "favoriteColors": [
      "indigo", "white", "brown",
      "green"
    ],
    "id": 23345,
    "location": "Santiago",
    "name": "Jack"
  }

  const expected = {
    "activities": {
      "friday": "resting",
      "monday": "puzzles",
      "saturday": "knitting",
      "sunday": "painting",
      "thursday": "writing",
      "tuesday": "hacking",
      "wednesday": "fishing"
    },
    "age": 52,
    "id": 23345,
    "location": "Santiago",
    "name": "Jack"
  }

  function deleteFavoriteColors(input) {
    // Your code here...
  }

  const output = deleteFavoriteColors(input);

  // Test the function
  testToolkit("delete_favoriteColors").test(output, expected);

}

// Get all the purchase codes
get_all_the_purchase_codes: {

  const input = {
    "purchases": [
      {
        "PurchaseID": "5a56574615f2",
        "PurchaseCurrency": "KES",
        "PurchaseItem": "van",
        "PurchaseCode": 102,
        "PurchasePrice": 31.67
      },
      {
        "PurchaseID": "cfaf823878fb",
        "PurchaseCurrency": "XBB",
        "PurchaseItem": "motorcycle",
        "PurchaseCode": 3997,
        "PurchasePrice": 22
      },
      {
        "PurchaseID": "b7f96a9b127c",
        "PurchaseCurrency": "GIP",
        "PurchaseItem": "motorcycle",
        "PurchaseCode": 55,
        "PurchasePrice": 1.99
      },
      {
        "PurchaseID": "b5baccf2272a",
        "PurchaseCurrency": "SRD",
        "PurchaseItem": "plane",
        "PurchaseCode": 55,
        "PurchasePrice": 90.12
      },
      {
        "PurchaseID": "38adfa1139c0",
        "PurchaseCurrency": "XAG",
        "PurchaseItem": "van",
        "PurchaseCode": 4,
        "PurchasePrice": 67.2
      }
    ]
  }

  const expected = [102, 3997, 55, 55, 4]

  function getAllThePurchaseCodes(input) {
    // Your code here...
  }

  const output = getAllThePurchaseCodes(input);

  // Test the function
  testToolkit("get_all_the_purchase_codes").test(output, expected);

}

// Find the best at: art
find_the_best_at_art: {

  const input = {
    "students": [
      {
        "name": "Greta",
        "grades": {
          "results": {
            "art": [55, 98, 68],
            "history": [93, 67, 58],
            "math": [79, 97, 98]
          }
        }
      },
      {
        "name": "Bob",
        "grades": {
          "results": {
            "art": [66, 67, 52],
            "history": [58, 95, 93],
            "math": [82, 75, 71]
          }
        }
      },
      {
        "name": "Harry",
        "grades": {
          "results": {
            "art": [55, 88, 60],
            "history": [89, 84, 61],
            "math": [97, 92, 73]
          }
        }
      }
    ]
  }

  const expected = {
    "name": "Greta",
    "grades": {
      "results": {
        "art": [55, 98, 68],
        "history": [93, 67, 58],
        "math": [79, 97, 98]
      }
    }
  }

  function findTheBestAtArt(input) {
    // Your code here...
  }

  const output = findTheBestAtArt(input);

  // Test the function
  testToolkit("find_the_best_at_art").test(output, expected);

}

// Get the highest math grade for Ingrid:
get_the_highest_math_grade_for_ingrid: {

  const input = {
    "students": [
      {
        "name": "Yvonne",
        "grades": {
          "results": {
            "art": [74, 90, 52],
            "history": [53, 79, 65],
            "math": [82, 73, 93]
          }
        }
      },
      {
        "name": "Ronnie",
        "grades": {
          "results": {
            "art": [50, 55, 91],
            "history": [86, 98, 50],
            "math": [59, 83, 87]
          }
        }
      },
      {
        "name": "Ingrid",
        "grades": {
          "results": {
            "art": [71, 89, 55],
            "history": [70, 88, 74],
            "math": [78, 95, 79]
          }
        }
      }
    ]
  }

  const expected = 95;

  function getTheHighestMathGradeFor(input, name) {
    // Your code here...
  }

  const output = getTheHighestMathGradeFor(input, "Ingrid");

  // Test the function
  testToolkit("get_the_highest_math_grade_for_ingrid").test(output, expected);

  // Get the highest math grade for Jack:
  const input2 = {
    "students": [
      {
        "name": "Jack",
        "grades": {
          "results": {
            "art": [93, 89, 63],
            "history": [69, 63, 50],
            "math": [85, 64, 83]
          }
        }
      },
      {
        "name": "Ronnie",
        "grades": {
          "results": {
            "art": [70, 54, 60],
            "history": [73, 79, 51],
            "math": [67, 56, 90]
          }
        }
      },
      {
        "name": "Mary",
        "grades": {
          "results": {
            "art": [94, 62, 78],
            "history": [59, 98, 78],
            "math": [91, 59, 62]
          }
        }
      }
    ]
  }

  const expected2 = 85;

  testToolkit("get_the_highest_math_grade_for_ingrid").test(getTheHighestMathGradeFor(input2, "Jack"), expected2);

}

// Group the purchases into higher and lower than 40.40:
group_the_purchases_into_higher_and_lower_than_40_40: {

  const input = {
    "purchases": [
      {
        "PurchaseID": "7b9463d87de3",
        "PurchaseCurrency": "KGS",
        "PurchaseItem": "motorcycle",
        "PurchaseCode": 801,
        "PurchasePrice": 10.81
      },
      {
        "PurchaseID": "c13a10a107fb",
        "PurchaseCurrency": "CAD",
        "PurchaseItem": "motorcycle",
        "PurchaseCode": 102,
        "PurchasePrice": 38.5
      },
      {
        "PurchaseID": "eeba58729c60",
        "PurchaseCurrency": "SGD",
        "PurchaseItem": "plane",
        "PurchaseCode": 102,
        "PurchasePrice": 69.99
      }
    ]
  }

  const expected = {
    "high": [
      {
        "PurchaseID": "eeba58729c60",
        "PurchaseCurrency": "SGD",
        "PurchaseItem": "plane",
        "PurchaseCode": 102,
        "PurchasePrice": 69.99
      }
    ],
    "low": [
      {
        "PurchaseID": "7b9463d87de3",
        "PurchaseCurrency": "KGS",
        "PurchaseItem": "motorcycle",
        "PurchaseCode": 801,
        "PurchasePrice": 10.81
      },
      {
        "PurchaseID": "c13a10a107fb",
        "PurchaseCurrency": "CAD",
        "PurchaseItem": "motorcycle",
        "PurchaseCode": 102,
        "PurchasePrice": 38.5
      }
    ]
  }

  function groupThePurchasesIntoHigherAndLowerThan(input, threshold) {
    // Your code here...
  }

  const output = groupThePurchasesIntoHigherAndLowerThan(input, 40.40);

  // Test the function
  testToolkit("group_the_purchases_into_higher_and_lower_than_40_40").test(output, expected);

}

// Find all purchases with a price below: 39.44
find_all_purchases_with_a_price_below_39_44: {

  const input = {
    "purchases": [
      {
        "PurchaseID": "ab29f3eb7154",
        "PurchaseCurrency": "FKP",
        "PurchaseItem": "bus",
        "PurchaseCode": 801,
        "PurchasePrice": 22
      },
      {
        "PurchaseID": "dca3588d4a5e",
        "PurchaseCurrency": "MXN",
        "PurchaseItem": "plane",
        "PurchaseCode": 225,
        "PurchasePrice": 1.99
      },
      {
        "PurchaseID": "a62367ff48b5",
        "PurchaseCurrency": "KZT",
        "PurchaseItem": "truck",
        "PurchaseCode": 801,
        "PurchasePrice": 76.89
      }
    ]
  }

  const expected = [
    {
      "PurchaseID": "ab29f3eb7154",
      "PurchaseCurrency": "FKP",
      "PurchaseItem": "bus",
      "PurchaseCode": 801,
      "PurchasePrice": 22
    },
    {
      "PurchaseID": "dca3588d4a5e",
      "PurchaseCurrency": "MXN",
      "PurchaseItem": "plane",
      "PurchaseCode": 225,
      "PurchasePrice": 1.99
    }
  ];

  function findAllPurchasesWithAPriceBelow(input, threshold) {
    // Your code here...
  }

  const output = findAllPurchasesWithAPriceBelow(input, 39.44);

  // Test the function
  testToolkit("find_all_purchases_with_a_price_below_39_44").test(output, expected);

}

// Find the number of lottery picks:
find_the_number_of_lottery_picks: {

  const input = {
    "lotteryPicks": [
      {
        "person": "Alice",
        "numbers": [3, 4, 4, 4, 8],
        "winner": false
      },
      {
        "person": "Liam",
        "numbers": [8, 8, 3, 4, 4],
        "winner": false
      }
    ]
  }

  const expected = 2;

  function findTheNumberOfLotteryPicks(input) {
    // Your code here...
  }

  const output = findTheNumberOfLotteryPicks(input);

  // Test the function
  testToolkit("find_the_number_of_lottery_picks").test(output, expected);

}
// Find the first 1 picks for each person:
find_the_first_1_picks_for_each_person: {

  const input = {
    "lotteryPicks": [
      {
        "person": "Christine",
        "numbers": [2, 7, 2, 3, 2],
        "winner": false
      },
      {
        "person": "Frank",
        "numbers": [7, 2, 1, 8, 0],
        "winner": false
      },
      {
        "person": "Quinn",
        "numbers": [3, 4, 5, 5, 4],
        "winner": false
      },
      {
        "person": "William",
        "numbers": [4, 0, 6, 5, 5],
        "winner": false
      },
      {
        "person": "Bob",
        "numbers": [9, 3, 5, 7, 3],
        "winner": false
      },
      {
        "person": "Nick",
        "numbers": [1, 1, 8, 6, 5],
        "winner": false
      }
    ]
  }

  const expected = [
    {
      "person": "Christine",
      "numbers": [2],
      "winner": false
    },
    {
      "person": "Frank",
      "numbers": [7],
      "winner": false
    },
    {
      "person": "Quinn",
      "numbers": [3],
      "winner": false
    },
    {
      "person": "William",
      "numbers": [4],
      "winner": false
    },
    {
      "person": "Bob",
      "numbers": [9],
      "winner": false
    },
    {
      "person": "Nick",
      "numbers": [1],
      "winner": false
    }
  ];

  function findFirst1PicksForEachPerson(input) {
    // Your code here...
  }

  const output = findFirst1PicksForEachPerson(input);

  // Test the function
  testToolkit("find_the_first_1_picks_for_each_person").test(output, expected)

}

// Source: https://github.com/lpmi-13/jq-pilot 

//>> HELPER FUNCTIONS AND VARIABLES <<//
/* This section includes helper functions and variables that will be used to test your code. 
You can skip this section and focus on the EXERCISES section.
*/
function testToolkit(label) {

  const RED_COLOR = "\x1b[31m%s\x1b[0m";
  const GREEN_COLOR = "\x1b[32m%s\x1b[0m";
  const CYAN_COLOR = "\x1b[36m%s\x1b[0m";
  const testLabel = label ? `\n${label}:` : "";

  function diffJSON(output, expected) {
    return Object.keys(output).reduce((diff, key) => {
      if (JSON.stringify(output[key]) !== JSON.stringify(expected[key])) {
        diff["Mismatch #" + key] = {
          output: output[key],
          expected: expected
        };
      }
      return diff;
    }, {});
  }
  function test(output, expected) {

    const isPassing = JSON.stringify(output) === JSON.stringify(expected);

    if (isPassing) {
      console.log(testLabel);
      return console.log(GREEN_COLOR, `All tests passed!`);
    }

    if (typeof output !== typeof expected) {
      console.log(testLabel);
      return console.log(RED_COLOR, `Tests failed! Output and expected are of the wrong type. Expected "${typeof expected}", instead got "${typeof output}"`);
    }

    if (output && !isPassing) {
      console.log(testLabel);
      Object.entries(diffJSON(output, expected)).forEach(([key, value]) => {
        
        console.log(`\n${CYAN_COLOR}`, key + ":");
        console.log(CYAN_COLOR, "------------");
        console.log(GREEN_COLOR, "Expected:", value.expected);
        console.log(RED_COLOR, "Output:  ", value.output);
      });
    }

    console.log(testLabel);
    console.log(RED_COLOR, "\nTests failed!");

  }
  function testLowerCase(output, expected) {

    if (!output) {
      console.log(testLabel);
      return console.log(RED_COLOR, `Tests failed! Output is "${typeof output}"!`);
    }

    const isPassing = output.every((obj, i) => {
      return Object.keys(obj).every(key => {
        return expected[i].hasOwnProperty(key.toLowerCase());
      });
    });
    if (isPassing) {
      console.log(testLabel);
      console.log(GREEN_COLOR, "All tests passed!");
    } else {
      console.log(testLabel);
      console.log(RED_COLOR, "Tests failed!");
    }
  }
  function testPropertiesExist(output, expected) {

    if (!output) {
      console.log(testLabel);
      return console.log(RED_COLOR, `Tests failed! Output is "${typeof output}"!`);
    }

    const isPassing = Object.keys(output).every(key => {
      return expected.hasOwnProperty(key);
    });
    if (isPassing) {
      console.log(testLabel);
      console.log(GREEN_COLOR, "All tests passed!");
    } else {
      console.log(testLabel);
      console.log(RED_COLOR, "Tests failed!");
    }
  }
  function testThatArraysContainTheSameValuesUnordered(output, expected) {
    if (!output) {
      console.log(testLabel);
      return console.log(RED_COLOR, `Tests failed! Output is "${typeof output}"!`);
    }
    const isPassing = JSON.stringify(output.sort()) === JSON.stringify(expected.sort());
    if (isPassing) {
      console.log(testLabel);
      return console.log(GREEN_COLOR, "All tests passed!");
    }
    console.log(testLabel);
    console.log(RED_COLOR, "Tests failed!");
  }

  return {
    test,
    testLowerCase,
    testPropertiesExist,
    testThatArraysContainTheSameValuesUnordered
  }

}
