import { Exercise } from '@/types/course';

export const exercises: Exercise[] = [
  {
    id: 'js-var-exercise',
    topicId: 'javascript',
    title: 'Variable Practice',
    description: 'Practice declaring and using variables in JavaScript',
    difficulty: 'easy',
    completed: false,
    instructions: 'Create variables for a user profile including name, age, and whether they are a student. Then construct a greeting message using these variables.',
    codeTemplate: `// Declare your variables here


// Create a greeting message


// Log the message to the console
`,
    solution: `// Declare your variables here
const name = "Sarah";
const age = 24;
const isStudent = true;

// Create a greeting message
const status = isStudent ? "a student" : "not a student";
const greeting = \`Hello, \${name}! You are \${age} years old and you are \${status}.\`;

// Log the message to the console
console.log(greeting);`,
    hints: [
      'Use const for variables that won\'t change',
      'Try using template literals (backticks) for the greeting',
      'You can use a ternary operator for conditional logic'
    ]
  },
  {
    id: 'js-func-exercise',
    topicId: 'javascript',
    title: 'Function Challenge',
    description: 'Create and use different types of functions',
    difficulty: 'medium',
    completed: false,
    instructions: 'Create a function that calculates the area of a rectangle. Then refactor it to an arrow function. Finally, create a function that returns the perimeter.',
    codeTemplate: `// Function declaration for area


// Arrow function for area


// Function for perimeter


// Test your functions with a rectangle of width 5 and height 10

`,
    solution: `// Function declaration for area
function calculateArea(width, height) {
  return width * height;
}

// Arrow function for area
const areaArrow = (width, height) => width * height;

// Function for perimeter
function calculatePerimeter(width, height) {
  return 2 * (width + height);
}

// Test your functions with a rectangle of width 5 and height 10
const width = 5;
const height = 10;
console.log(\`Area: \${calculateArea(width, height)}\`); // 50
console.log(\`Area (arrow): \${areaArrow(width, height)}\`); // 50
console.log(\`Perimeter: \${calculatePerimeter(width, height)}\`); // 30`,
    hints: [
      'The area of a rectangle is width × height',
      'The perimeter of a rectangle is 2 × (width + height)',
      'Arrow functions with a single expression can omit curly braces and return'
    ]
  },
  {
    id: 'dsa-array-exercise',
    topicId: 'dsa',
    title: 'Array Manipulation',
    description: 'Practice common array operations',
    difficulty: 'medium',
    completed: false,
    instructions: 'Complete the functions to manipulate an array of numbers. Implement functions to find the sum, average, maximum value, and filter even numbers.',
    codeTemplate: `// Find the sum of all numbers in the array
function sumArray(numbers) {
  // Your code here
}

// Calculate the average of numbers in the array
function average(numbers) {
  // Your code here
}

// Find the maximum value in the array
function findMax(numbers) {
  // Your code here
}

// Filter out only the even numbers
function filterEven(numbers) {
  // Your code here
}

// Test with this array
const numbers = [4, 7, 2, 9, 1, 5, 8, 3, 6];
console.log("Sum:", sumArray(numbers));
console.log("Average:", average(numbers));
console.log("Max:", findMax(numbers));
console.log("Even numbers:", filterEven(numbers));`,
    solution: `// Find the sum of all numbers in the array
function sumArray(numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}

// Calculate the average of numbers in the array
function average(numbers) {
  if (numbers.length === 0) return 0;
  const sum = sumArray(numbers);
  return sum / numbers.length;
}

// Find the maximum value in the array
function findMax(numbers) {
  if (numbers.length === 0) return null;
  return Math.max(...numbers);
  // Alternative: return numbers.reduce((max, current) => current > max ? current : max, numbers[0]);
}

// Filter out only the even numbers
function filterEven(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// Test with this array
const numbers = [4, 7, 2, 9, 1, 5, 8, 3, 6];
console.log("Sum:", sumArray(numbers)); // 45
console.log("Average:", average(numbers)); // 5
console.log("Max:", findMax(numbers)); // 9
console.log("Even numbers:", filterEven(numbers)); // [4, 2, 8, 6]`,
    hints: [
      'Consider using array methods like reduce(), filter(), and Math.max()',
      'Remember to handle edge cases like empty arrays',
      'The modulo operator (%) can help you determine if a number is even'
    ]
  },
];