// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// RED

describe("peopleCaps", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]  
    it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {

    expect(peopleCaps(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    })
})

// ReferenceError: peopleCaps is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.176 s, estimated 1 s


// b) Create the function that makes the test pass.

// GREEN
// PSEUDOCODE
// Input: an array of objects containing name and occupation keys
// Output: an array of strings with capitalized names and occupation

// Process:
// Create a function called peopleCaps that accepts an array of objects as an argument.
// Use .map to iterate through each object in the people array.
// For each object, destructure the name and occupation keys and assign them to variables.
// Use .split to create an array of words from the name string.
// Use .map to iterate through each word in the name array.
// For each word, use charAt(0) to get the first letter, toUpperCase() to capitalize it, and slice(1) to get the rest of the word.
// Use .join to create a string from the capitalized words array with a space between each word.
// Concatenate the capitalized name with the occupation in a string.
// Return the new string for each object as an element of a new array.

const peopleCaps = (people) => {
  return people.map(person => {
    const { name, occupation } = person
    const capitalized = name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    return `${capitalized} is ${occupation}.`
  })
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// RED

describe("filterRemainders", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {

    expect(filterRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(filterRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// ReferenceError: filterRemainders is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.172 s, estimated 1 s

// b) Create the function that makes the test pass.

// GREEN
// PSEUDOCODE
// Input: an array of values
// Output: an array of remainders of only the numbers in the input array when divided by 3

// Process:
// use .filter to filter the input array
// use typerof to only keep values of the date type "number"
// .map over the filtered array to a new array containing the remainders of each number in the filtered array when divided by 3
// Return the resulting array of remainders

const filterRemainders = (array) => {
  return array.filter(value =>(typeof value === "number")).map(number=>(number%3))
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// RED

describe("numbersCubed", ()=>{
  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]

it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {

  expect(numbersCubed(cubeAndSum1)).toEqual(99)
  expect(numbersCubed(cubeAndSum2)).toEqual(1125)
})
})

// ReferenceError: numbersCubed is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.178 s, estimated 1 s

// b) Create the function that makes the test pass.
// GREEN
// Input: an array of numbers called "numbers"
// Output: the sum of all the numbers in the "numbers" array cubed

// Process:
// Create a function called "numbersCubed" that takes in an array of numbers called "numbers" as its parameter
// Use the reduce method on the "numbers" array to calculate the sum of each number cubed
// For each iteration, calculate the cube of the current number using the Math.pow method
// Add the cubed number to the sum
// Return the sum of all the numbers cubed

const numbersCubed = (numbers) => {
  return numbers.reduce((sum, number) => {
    return sum + Math.pow(number, 3)
  }, 0)
}

