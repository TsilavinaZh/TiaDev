import { Lesson } from '@/types/course';


export const lessons: Lesson[] = [
  {
    id: 'js-variables',
    topicId: 'javascript',
    title: 'Variables and Data Types',
    description: 'Learn about JavaScript variables and basic data types',
    duration: 10,
    completed: false,
    content: `
Variables and Data Types

In JavaScript, variables are containers for storing data values. You can declare variables using:

- var: Function scoped, older way (avoid when possible)
- let: Block scoped, can be reassigned
- const: Block scoped, cannot be reassigned

Basic Data Types

JavaScript has several primitive data types:

- String: Text values, e.g., "Hello"
- Number: Numeric values, e.g., 42 or 3.14
- Boolean: true or false
- Undefined: Declared but not assigned
- Null: Represents "nothing" or "empty"
- Symbol: Unique identifiers
- BigInt: For very large integers
    `,
    codeExample: `// Variable declarations
const name = "John";  // String
let age = 25;         // Number
const isStudent = true; // Boolean

// You can change the value of let variables
age = 26;

// Type checking
console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isStudent); // "boolean"

`,
  },
  {
    id: 'js-functions',
    topicId: 'javascript',
    title: 'Functions',
    description: 'Learn how to create and use functions in JavaScript',
    duration: 15,
    completed: false,
    content: `
# JavaScript Functions

Functions are reusable blocks of code designed to perform specific tasks.

 Function Declarations vs Expressions

There are multiple ways to define functions in JavaScript:

Function Declaration
javascript
function add(a, b) {
  return a + b;
}


 Function Expression
javascript
const add = function(a, b) {
  return a + b;
};


 Arrow Function
javascript
const add = (a, b) => a + b;


Parameters and Arguments

- Parameters are the names listed in the function definition
- Arguments are the real values passed to the function
    `,
    codeExample: `// Function declaration
function greet(name) {
  return Hello, \${name}!;
}

// Function expression
const sum = function(a, b) {
  return a + b;
};

// Arrow function (ES6)
const multiply = (a, b) => a * b;

`,
  },
  {
    id: 'js-debugging',
    topicId: 'javascript',
    title: 'Debugging',
    description: 'Learn how to debug JavaScript code effectively',
    duration: 10,
    completed: false,
    content: `
# JavaScript Debugging

Debugging is the process of identifying and fixing errors in your code. JavaScript provides several tools and techniques for debugging.

 Using \`console.log()\`

The simplest way to debug is by logging values to the console.

javascript
const x = 10;
console.log('Value of x:', x);


 Using Breakpoints

You can set breakpoints in your browser's developer tools to pause execution and inspect variables.

1. Open the browser's developer tools (usually F12 or right-click > Inspect).
2. Go to the "Sources" tab.
3. Click on the line number to set a breakpoint.
4. Reload the page or trigger the code to hit the breakpoint.


 Debugger Statement

The \`debugger\` statement pauses execution if developer tools are open.

javascript
function add(a, b) {
  debugger; // Execution will pause here
  return a + b;
}

add(2, 3);


 Error Messages

Pay attention to error messages in the console. They provide useful information about the type and location of the error.

javascript
const obj = {};
console.log(obj.property.nonExistent); // TypeError: Cannot read property 'nonExistent' of undefined


 Try...Catch for Error Handling

Use \`try...catch\` to handle runtime errors gracefully.

javascript
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
}


 Debugging Tools

Modern browsers provide powerful debugging tools:

- **Chrome DevTools**: Inspect elements, set breakpoints, and monitor network requests.
- **Firefox Developer Tools**: Similar to Chrome DevTools with additional features for CSS debugging.
- **Node.js Debugger**: Use \`node inspect\` or \`--inspect\` for server-side debugging.


 Debugging Tips

1. Reproduce the issue consistently.
2. Isolate the problematic code.
3. Use breakpoints and step through the code.
4. Check variable values and function calls.
5. Simplify the code to narrow down the issue.
    `,
    codeExample: `// Example of using console.log for debugging
function calculateArea(width, height) {
  console.log('Width:', width);
  console.log('Height:', height);
  return width * height;
}

console.log('Area:', calculateArea(5, 10));

// Example of using debugger
function findMax(arr) {
  debugger; // Pause execution here
  return Math.max(...arr);
}

console.log(findMax([1, 2, 3, 4, 5])); // 5

// Example of try...catch for error handling
try {
  const data = JSON.parse('invalid JSON');
  console.log(data);
} catch (error) {
  console.error('Failed to parse JSON:', error.message);
}`,
  },

  {
    id: 'js-async-patterns',
    topicId: 'javascript',
    title: 'Asynchronous Patterns',
    description:
      'Learn about different patterns for handling asynchronous code in JavaScript',
    duration: 15,
    completed: false,
    content: `
  # JavaScript Asynchronous Patterns

  JavaScript provides several patterns for handling asynchronous operations. These patterns help manage code that doesn't execute sequentially.

   Callback Functions

  A callback is a function passed as an argument to another function, which is executed after some operation is completed.

  javascript
  function fetchData(callback) {
    setTimeout(() => {
      callback('Data fetched');
    }, 1000);
  }

  fetchData(data => {
    console.log(data); // "Data fetched"
  });


   Promises

  Promises represent a value that may be available now, or in the future, or never. They provide a cleaner way to handle asynchronous operations compared to callbacks.

  javascript
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });

  promise.then(data => {
    console.log(data); // "Data fetched"
  });


   Async/Await

  Async/Await is a modern syntax for working with Promises. It makes asynchronous code look synchronous.

  javascript
  async function fetchData() {
    const data = await new Promise(resolve => {
      setTimeout(() => {
        resolve('Data fetched');
      }, 1000);
    });
    console.log(data); // "Data fetched"
  }

  fetchData();


   Combining Patterns

  You can combine these patterns to handle complex asynchronous workflows.

  javascript
  async function fetchDataWithFallback() {
    try {
      const data = await fetch('https://api.example.com/data').then(res => res.json());
      console.log(data);
    } catch (error) {
      console.error('Error fetching data, using fallback:', error);
      console.log('Fallback data');
    }
  }

  fetchDataWithFallback();
      `,
    codeExample: `// Callback example
  function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, src);
    script.onerror = () => callback(new Error(\`Failed to load script: \${src}\`));
    document.head.append(script);
  }

  loadScript('example.js', (error, src) => {
    if (error) {
      console.error(error);
    } else {
      console.log(\`Script loaded: \${src}\`);
    }
  });

  // Promise example
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  delay(1000).then(() => console.log('1 second delay'));

  // Async/Await example
  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  fetchData();`,
  },
  {
    id: 'js-hoisting',
    topicId: 'javascript',
    title: 'Hoisting',
    description:
      'Learn about hoisting in JavaScript and how it affects variable and function declarations',
    duration: 10,
    completed: false,
    content: `
  # JavaScript Hoisting

  Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

   Variable Hoisting

  Variables declared with \`var\` are hoisted to the top of their scope but are not initialized.

  javascript
  console.log(x); // undefined
  var x = 5;

  Variables declared with \`let\` and \`const\` are also hoisted but are not initialized. Accessing them before declaration results in a \`ReferenceError\`.

  javascript
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 10;


   Function Hoisting

  Function declarations are hoisted along with their definitions.

  javascript
  greet(); // "Hello!"
  function greet() {
    console.log('Hello!');
  }

  Function expressions are not hoisted.

  javascript
  sayHello(); // TypeError: sayHello is not a function
  var sayHello = function () {
    console.log('Hi!');
  };


   Best Practices

  - Declare variables at the top of their scope to avoid confusion.
  - Use \`let\` and \`const\` instead of \`var\` to prevent unintentional hoisting issues.
  - Declare functions before calling them.
      `,
    codeExample: `// Variable hoisting with var
  console.log(a); // undefined
  var a = 10;

  // Variable hoisting with let/const
  try {
    console.log(b); // ReferenceError
  } catch (e) {
    console.error(e.message);
  }
  let b = 20;

  // Function hoisting
  hoistedFunction(); // "This function is hoisted!"
  function hoistedFunction() {
    console.log('This function is hoisted!');
  }

  // Function expression (not hoisted)
  try {
    nonHoistedFunction(); // TypeError
  } catch (e) {
    console.error(e.message);
  }
  const nonHoistedFunction = function () {
    console.log('This function is not hoisted!');
  };`,
  },

  {
    id: 'js-prototypes',
    topicId: 'javascript',
    title: 'Prototypes',
    description:
      'Learn about prototypes and prototypal inheritance in JavaScript',
    duration: 12,
    completed: false,
    content: `
  # JavaScript Prototypes

  Prototypes are the mechanism by which JavaScript objects inherit properties and methods from other objects.

   Prototype Chain

  Every JavaScript object has a prototype. The prototype itself is an object, and it can have its own prototype, forming a chain called the prototype chain.

  javascript
  const obj = {};
  console.log(obj.__proto__); // Object prototype
  console.log(obj.__proto__.__proto__); // null (end of the chain)


   Adding Methods to Prototypes

  You can add methods to an object's prototype to share them across all instances.

  javascript
  function Person(name) {
    this.name = name;
  }

  Person.prototype.greet = function () {
    console.log(\`Hello, my name is \${this.name}\`);
  };

  const john = new Person('John');
  john.greet(); // "Hello, my name is John"


   Object.create()

  The \`Object.create()\` method creates a new object with the specified prototype.

  javascript
  const parent = {
    greet() {
      console.log('Hello from parent');
    },
  };

  const child = Object.create(parent);
  child.greet(); // "Hello from parent"


   hasOwnProperty()

  The \`hasOwnProperty()\` method checks if a property exists directly on the object, not on its prototype.

  javascript
  console.log(john.hasOwnProperty('name')); // true
  console.log(john.hasOwnProperty('greet')); // false


   Prototypal Inheritance

  Prototypal inheritance allows objects to inherit from other objects.

  javascript
  const animal = {
    eat() {
      console.log('Eating...');
    },
  };

  const dog = Object.create(animal);
  dog.bark = function () {
    console.log('Woof!');
  };

  dog.eat(); // "Eating..."
  dog.bark(); // "Woof!"
      `,
    codeExample: `// Constructor function and prototype
  function Car(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  Car.prototype.start = function () {
    console.log(\`\${this.brand} \${this.model} is starting...\`);
  };

  const myCar = new Car('Toyota', 'Corolla');
  myCar.start(); // "Toyota Corolla is starting..."

  // Using Object.create()
  const vehicle = {
    move() {
      console.log('Moving...');
    },
  };

  const bike = Object.create(vehicle);
  bike.ringBell = function () {
    console.log('Ring ring!');
  };

  bike.move(); // "Moving..."
  bike.ringBell(); // "Ring ring!"

  // Checking property ownership
  console.log(bike.hasOwnProperty('move')); // false
  console.log(bike.hasOwnProperty('ringBell')); // true`,
  },

  {
    id: 'js-conditionals',
    topicId: 'javascript',
    title: 'Conditionals',
    description: 'Learn how to use conditional statements in JavaScript',
    duration: 10,
    completed: false,
    content: `
  # JavaScript Conditionals

  Conditionals are used to perform different actions based on different conditions.

   if...else Statement

  The \`if\` statement executes a block of code if a specified condition is true. Use \`else\` to specify a block of code to execute if the condition is false.

  javascript
  if (condition) {
    // code to execute if condition is true
  } else {
    // code to execute if condition is false
  }


   else if Statement

  Use \`else if\` to specify a new condition to test if the first condition is false.

  javascript
  if (condition1) {
    // code to execute if condition1 is true
  } else if (condition2) {
    // code to execute if condition2 is true
  } else {
    // code to execute if none of the conditions are true
  }


   Ternary Operator

  The ternary operator is a shorthand for \`if...else\`.

  javascript
  condition ? expressionIfTrue : expressionIfFalse;


   switch Statement

  The \`switch\` statement is used to perform different actions based on different conditions.

  javascript
  switch (expression) {
    case value1:
    // code to execute if expression === value1
    break;
    case value2:
    // code to execute if expression === value2
    break;
    default:
    // code to execute if no case matches
  }
    `,
    codeExample: `// if...else example
  const age = 18;
  if (age >= 18) {
    console.log('You are an adult.');
  } else {
    console.log('You are a minor.');
  }

  // else if example
  const score = 85;
  if (score >= 90) {
    console.log('Grade: A');
  } else if (score >= 80) {
    console.log('Grade: B');
  } else {
    console.log('Grade: C');
  }

  // Ternary operator example
  const isMember = true;
  const fee = isMember ? '$5' : '$10';
  console.log(fee); // "$5"

  // switch example
  const day = 'Monday';
  switch (day) {
    case 'Monday':
    console.log('Start of the work week.');
    break;
    case 'Friday':
    console.log('End of the work week.');
    break;
    default:
    console.log('Midweek day.');
  }
  `,
  },

  {
    id: 'js-loops',
    topicId: 'javascript',
    title: 'Loops',
    description: 'Learn how to use loops to iterate over data in JavaScript',
    duration: 12,
    completed: false,
    content: `
  # JavaScript Loops

  Loops are used to execute a block of code repeatedly, as long as a specified condition is true.

   Types of Loops

  # for Loop

  The \`for\` loop is used when the number of iterations is known.

  javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }


  # while Loop

  The \`while\` loop is used when the number of iterations is not known and depends on a condition.

  javascript
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }


  # do...while Loop

  The \`do...while\` loop is similar to the \`while\` loop, but it executes the block of code at least once.

  javascript
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);


  # for...of Loop

  The \`for...of\` loop is used to iterate over iterable objects like arrays.

  javascript
  const fruits = ['apple', 'banana', 'orange'];
  for (const fruit of fruits) {
    console.log(fruit);
  }


  # for...in Loop

  The \`for...in\` loop is used to iterate over the properties of an object.

  javascript
  const person = { name: 'John', age: 30 };
  for (const key in person) {
    console.log(\`\${key}: \${person[key]}\`);
  }
      `,
    codeExample: `// for loop example
  for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
  }

  // while loop example
  let count = 0;
  while (count < 3) {
    console.log(count); // 0, 1, 2
    count++;
  }

  // do...while loop example
  let num = 0;
  do {
    console.log(num); // 0, 1, 2
    num++;
  } while (num < 3);

  // for...of loop example
  const colors = ['red', 'green', 'blue'];
  for (const color of colors) {
    console.log(color); // "red", "green", "blue"
  }

  // for...in loop example
  const car = { brand: 'Toyota', model: 'Corolla' };
  for (const property in car) {
    console.log(\`\${property}: \${car[property]}\`);
  }
  `,
  },
  {
    id: 'js-objects',
    topicId: 'javascript',
    title: 'Objects',
    description: 'Learn about objects and how to work with them in JavaScript',
    duration: 14,
    completed: false,
    content: `
  # JavaScript Objects

  Objects are collections of key-value pairs. They are used to store related data and functionality.

   Creating Objects

  You can create objects using object literals or the \`Object\` constructor.

  javascript
  const person = {
    name: 'John',
    age: 30,
    greet: function() {
      console.log('Hello!');
    }
  };

  const car = new Object();
  car.brand = 'Toyota';
  car.model = 'Corolla';


   Accessing Properties

  You can access object properties using dot notation or bracket notation.

  javascript
  console.log(person.name); // "John"
  console.log(person['age']); // 30


   Adding and Removing Properties

  You can add or remove properties dynamically.

  javascript
  person.job = 'Developer';
  delete person.age;


   Object Methods

  Objects can have methods, which are functions stored as properties.

  javascript
  person.greet = function() {
    console.log('Hi, I am ' + this.name);
  };


   Iterating Over Objects

  You can use \`for...in\` or \`Object.keys()\` to iterate over object properties.

  javascript
  for (const key in person) {
    console.log(\`\${key}: \${person[key]}\`);
  }

  Object.keys(person).forEach(key => {
    console.log(\`\${key}: \${person[key]}\`);
  });
      `,
    codeExample: `// Creating an object
  const book = {
    title: 'JavaScript Basics',
    author: 'Jane Doe',
    pages: 200,
    read: false,
    readBook: function() {
      this.read = true;
      console.log(\`You have read \${this.title}\`);
    }
  };

  // Accessing properties
  console.log(book.title); // "JavaScript Basics"

  // Adding a property
  book.publisher = 'Tech Books';
  console.log(book.publisher); // "Tech Books"

  // Removing a property
  delete book.pages;
  console.log(book.pages); // undefined

  // Calling a method
  book.readBook(); // "You have read JavaScript Basics"

  // Iterating over properties
  for (const key in book) {
    console.log(\`\${key}: \${book[key]}\`);
  }
  `,
  },

  {
    id: 'js-arrays',
    topicId: 'javascript',
    title: 'Arrays',
    description: 'Learn about arrays and how to work with them in JavaScript',
    duration: 12,
    completed: false,
    content: `
# JavaScript Arrays

Arrays are used to store multiple values in a single variable. They are one of the most commonly used data structures in JavaScript.

 Creating Arrays

You can create arrays using array literals or the \`Array\` constructor.

javascript
const numbers = [1, 2, 3, 4, 5];
const fruits = new Array('apple', 'banana', 'cherry');


 Accessing Elements

Array elements are accessed using their index, which starts at 0.

javascript
console.log(numbers[0]); // 1
console.log(fruits[2]); // "cherry"


 Modifying Arrays

You can add, remove, or modify elements in an array.

javascript
numbers[0] = 10; // Modify the first element
numbers.push(6); // Add an element to the end
numbers.pop(); // Remove the last element


 Iterating Over Arrays

You can use loops or array methods to iterate over arrays.

javascript
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach(num => console.log(num));


 Common Array Methods

- \`push()\`: Add elements to the end
- \`pop()\`: Remove the last element
- \`shift()\`: Remove the first element
- \`unshift()\`: Add elements to the beginning
- \`splice()\`: Add/remove elements at a specific position
- \`slice()\`: Return a section of an array
- \`map()\`: Create a new array with results of a function
- \`filter()\`: Create a new array with elements that pass a test
- \`reduce()\`: Reduce array to a single value
    `,
    codeExample: `// Creating an array
const numbers = [1, 2, 3, 4, 5];

// Accessing elements
console.log(numbers[0]); // 1
console.log(numbers[4]); // 5

// Adding elements
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// Removing elements
numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5]

// Iterating over an array
numbers.forEach(num => console.log(num));

// Using map to create a new array
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

// Using filter to create a new array
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Using reduce to calculate the sum
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15`,
  },

  {
    id: 'js-promises',
    topicId: 'javascript',
    title: 'Promises',
    description:
      'Learn about Promises and how to handle asynchronous operations in JavaScript',
    duration: 15,
    completed: false,
    content: `
# JavaScript Promises

Promises are used to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never.

 Creating a Promise

A Promise is created using the \`Promise\` constructor, which takes a function with two parameters: \`resolve\` and \`reject\`.

javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve('Operation was successful');
  } else {
    reject('Operation failed');
  }
});


 Consuming a Promise

You can consume a Promise using \`.then()\`, \`.catch()\`, and \`.finally()\`.

javascript
myPromise
  .then(result => {
    console.log(result); // "Operation was successful"
  })
  .catch(error => {
    console.error(error); // "Operation failed"
  })
  .finally(() => {
    console.log('Promise completed');
  });


 Chaining Promises

You can chain multiple \`.then()\` calls to handle sequential asynchronous operations.

javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


 Async/Await

Async/Await is a modern way to work with Promises, making asynchronous code look synchronous.

javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
    `,
    codeExample: `// Creating a Promise
const isEven = (number) => {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(\`\${number} is even\`);
    } else {
      reject(\`\${number} is odd\`);
    }
  });
};

// Consuming the Promise
isEven(4)
  .then(message => console.log(message)) // "4 is even"
  .catch(error => console.error(error));

// Using Async/Await
async function checkNumber(num) {
  try {
    const result = await isEven(num);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

checkNumber(5); // "5 is odd"
`,
  },

  {
    id: 'js-modules',
    topicId: 'javascript',
    title: 'Modules',
    description: 'Learn how to use modules to organize your JavaScript code',
    duration: 10,
    completed: false,
    content: `
# JavaScript Modules

Modules allow you to break your code into smaller, reusable pieces. Each module can export functions, objects, or variables, and other modules can import them.

 Exporting from a Module

You can export values from a module using \`export\`.

# Named Exports

javascript
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

# Default Export

javascript
const multiply = (a, b) => a * b;
export default multiply;

 Importing a Module

You can import values from a module using \`import\`.

# Importing Named Exports

javascript

# Importing Default Export

javascript

# Importing All Exports

javascript
console.log(math.add(2, 3)); // 5
console.log(math.multiply(2, 3)); // 6

 Benefits of Modules

- Code organization and reusability
- Avoiding global namespace pollution
- Easier maintenance and testing
    `,
    codeExample: `// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
export default multiply;

// main.js

console.log(add(2, 3)); // 5
console.log(subtract(5, 3)); // 2
console.log(multiply(4, 3)); // 12`,
  },
  {
    id: 'js-classes',
    topicId: 'javascript',
    title: 'Classes',
    description:
      'Learn about classes and object-oriented programming in JavaScript',
    duration: 15,
    completed: false,
    content: `
# JavaScript Classes

Classes are a template for creating objects. They encapsulate data and behavior that belong together.

 Defining a Class

You can define a class using the \`class\` keyword.

javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Hi, my name is \${this.name} and I am \${this.age} years old.\`);
  }
}


 Creating an Instance

You can create an instance of a class using the \`new\` keyword.

javascript
const john = new Person('John', 30);
john.greet(); // "Hi, my name is John and I am 30 years old."


 Inheritance

Classes can inherit from other classes using the \`extends\` keyword.

javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(\`\${this.name} is studying in grade \${this.grade}.\`);
  }
}

const jane = new Student('Jane', 20, 'A');
jane.greet(); // "Hi, my name is Jane and I am 20 years old."
jane.study(); // "Jane is studying in grade A."


 Static Methods

Static methods belong to the class and not to any instance.

javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); // 5
    `,
    codeExample: `// Defining a class
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log(\`\${this.name} makes a sound.\`);
  }
}

// Creating an instance
const dog = new Animal('Buddy', 'Dog');
dog.makeSound(); // "Buddy makes a sound."

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'Dog');
    this.breed = breed;
  }

  bark() {
    console.log(\`\${this.name} barks loudly!\`);
  }
}

const rex = new Dog('Rex', 'German Shepherd');
rex.makeSound(); // "Rex makes a sound."
rex.bark(); // "Rex barks loudly!"

// Static method
class Calculator {
  static multiply(a, b) {
    return a * b;
  }
}

console.log(Calculator.multiply(4, 5)); // 20`,
  },
  {
    id: 'js-events',
    topicId: 'javascript',
    title: 'Events',
    description: 'Learn how to handle events in JavaScript',
    duration: 10,
    completed: false,
    content: `
# JavaScript Events

Events are actions or occurrences that happen in the browser, such as a user clicking a button, submitting a form, or pressing a key. JavaScript can be used to handle these events.

 Adding Event Listeners

You can use the \`addEventListener\` method to attach an event handler to an element.

javascript
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});


 Common Event Types

- \`click\`: Fired when an element is clicked
- \`mouseover\`: Fired when the mouse hovers over an element
- \`keydown\`: Fired when a key is pressed
- \`submit\`: Fired when a form is submitted
- \`change\`: Fired when the value of an input changes


 Removing Event Listeners

You can remove an event listener using the \`removeEventListener\` method.

javascript
function handleClick() {
  console.log('Button clicked!');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);


 Event Object

When an event occurs, an event object is passed to the event handler. This object contains information about the event.

javascript
button.addEventListener('click', (event) => {
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
});


 Event Delegation

Event delegation is a technique where you attach a single event listener to a parent element to handle events for its child elements.

javascript
const list = document.querySelector('ul');
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log('List item clicked:', event.target.textContent);
  }
});
    `,
    codeExample: `// Adding an event listener
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button was clicked!');
});

// Removing an event listener
function handleClick() {
  console.log('Button clicked!');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

// Event delegation example
const list = document.querySelector('ul');
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(\`You clicked on \${event.target.textContent}\`);
  }
});
`,
  },
  {
    id: 'js-dom',
    topicId: 'javascript',
    title: 'DOM Manipulation',
    description:
      'Learn how to manipulate the Document Object Model (DOM) in JavaScript',
    duration: 15,
    completed: false,
    content: `
# JavaScript DOM Manipulation

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects.

 Selecting Elements

You can select elements in the DOM using various methods:

- \`document.getElementById()\`: Selects an element by its ID
- \`document.querySelector()\`: Selects the first element that matches a CSS selector
- \`document.querySelectorAll()\`: Selects all elements that match a CSS selector

javascript
const title = document.getElementById('title');
const button = document.querySelector('.btn');
const items = document.querySelectorAll('.item');


 Modifying Elements

You can modify the content and attributes of elements:

- \`textContent\`: Sets or gets the text content of an element
- \`innerHTML\`: Sets or gets the HTML content of an element
- \`setAttribute()\`: Sets an attribute on an element
- \`classList\`: Adds, removes, or toggles classes

javascript
title.textContent = 'New Title';
button.setAttribute('disabled', true);
button.classList.add('active');


 Creating and Appending Elements

You can create new elements and add them to the DOM:

javascript
const newItem = document.createElement('li');
newItem.textContent = 'New Item';
document.querySelector('ul').appendChild(newItem);


 Removing Elements

You can remove elements from the DOM:

javascript
const itemToRemove = document.querySelector('.item');
itemToRemove.remove();


 Event Handling

You can handle events on DOM elements:

javascript
button.addEventListener('click', () => {
  console.log('Button clicked!');
});
    `,
    codeExample: `// Selecting elements
const title = document.getElementById('title');
const button = document.querySelector('.btn');
const items = document.querySelectorAll('.item');

// Modifying elements
title.textContent = 'Updated Title';
button.classList.add('highlight');

// Creating and appending elements
const newItem = document.createElement('li');
newItem.textContent = 'New List Item';
document.querySelector('ul').appendChild(newItem);

// Removing elements
const firstItem = document.querySelector('.item');
firstItem.remove();

// Adding an event listener
button.addEventListener('click', () => {
  alert('Button was clicked!');
});
`,
  },

  {
    id: 'js-async-await',
    topicId: 'javascript',
    title: 'Async/Await',
    description:
      'Learn how to use async/await for handling asynchronous operations in JavaScript',
    duration: 15,
    completed: false,
    content: `
# JavaScript Async/Await

Async/Await is a modern way to handle asynchronous operations in JavaScript. It makes asynchronous code look and behave more like synchronous code.

 Async Functions

An \`async\` function always returns a Promise. Inside an async function, you can use the \`await\` keyword to pause the execution until a Promise is resolved.

javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}

fetchData();


 Error Handling

You can use \`try...catch\` blocks to handle errors in async functions.

javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();


 Combining Async/Await with Other Promises

You can use \`Promise.all()\` to wait for multiple Promises to resolve.

javascript
async function fetchMultipleData() {
  try {
    const [data1, data2] = await Promise.all([
      fetch('https://api.example.com/data1').then(res => res.json()),
      fetch('https://api.example.com/data2').then(res => res.json())
    ]);
    console.log(data1, data2);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchMultipleData();
    `,
    codeExample: `// Example of async/await
async function getUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
}

getUserData(1);

// Using Promise.all with async/await
async function getPostsAndComments() {
  try {
    const [posts, comments] = await Promise.all([
      fetch('https://api.example.com/posts').then(res => res.json()),
      fetch('https://api.example.com/comments').then(res => res.json())
    ]);
    console.log('Posts:', posts);
    console.log('Comments:', comments);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getPostsAndComments();`,
  },

  {
    id: 'js-error-handling',
    topicId: 'javascript',
    title: 'Error Handling',
    description: 'Learn how to handle errors in JavaScript effectively',
    duration: 10,
    completed: false,
    content: `
# JavaScript Error Handling

Error handling is an essential part of writing robust JavaScript code. It ensures that your application can gracefully handle unexpected situations.

 try...catch

The \`try...catch\` statement allows you to handle errors that occur during the execution of code.

javascript
try {
  // Code that may throw an error
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  // Handle the error
  console.error('An error occurred:', error.message);
}


 throw Statement

You can use the \`throw\` statement to create custom errors.

javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
}


 finally Block

The \`finally\` block is executed after the \`try\` and \`catch\` blocks, regardless of whether an error occurred.

javascript
try {
  console.log('Trying something risky...');
  riskyOperation();
} catch (error) {
  console.error('Error:', error.message);
} finally {
  console.log('Cleanup code executed');
}


 Error Object

The \`Error\` object provides information about an error.

- \`message\`: A description of the error
- \`name\`: The type of error (e.g., \`TypeError\`, \`ReferenceError\`)
- \`stack\`: A stack trace (useful for debugging)

javascript
try {
  throw new Error('Something went wrong');
} catch (error) {
  console.log('Error name:', error.name);
  console.log('Error message:', error.message);
  console.log('Error stack:', error.stack);
}
    `,
    codeExample: `// Example of try...catch
try {
  const data = JSON.parse('invalid JSON');
  console.log(data);
} catch (error) {
  console.error('Failed to parse JSON:', error.message);
}

// Custom error with throw
function validateAge(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  return 'Valid age';
}

try {
  console.log(validateAge(-5));
} catch (error) {
  console.error('Validation error:', error.message);
}

// Using finally
try {
  console.log('Executing risky operation...');
  riskyOperation();
} catch (error) {
  console.error('Caught an error:', error.message);
} finally {
  console.log('This will always execute');
}`,
  },
  {
    id: 'js-closures',
    topicId: 'javascript',
    title: 'Closures',
    description: 'Learn about closures and how they work in JavaScript',
    duration: 12,
    completed: false,
    content: `
# JavaScript Closures

A closure is a function that has access to its own scope, the scope of the outer function, and the global scope, even after the outer function has returned.

 How Closures Work

Closures are created every time a function is created. They allow functions to "remember" the environment in which they were created.

javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(\`Outer Variable: \${outerVariable}\`);
    console.log(\`Inner Variable: \${innerVariable}\`);
  };
}

const newFunction = outerFunction('outside');
newFunction('inside');
// Output:
// Outer Variable: outside
// Inner Variable: inside


 Practical Uses of Closures

# Data Privacy

Closures can be used to create private variables.

javascript
function Counter() {
  let count = 0;
  return {
    increment: () => count++,
    getCount: () => count,
  };
}

const counter = Counter();
counter.increment();
console.log(counter.getCount()); // 1


# Function Factories

Closures can be used to create functions with preset arguments.

javascript
function createMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10

const triple = createMultiplier(3);
console.log(triple(5)); // 15
    `,
    codeExample: `// Example of a closure
function greeting(message) {
  return function (name) {
    console.log(\`\${message}, \${name}!\`);
  };
}

const sayHello = greeting('Hello');
sayHello('Alice'); // "Hello, Alice!"

const sayGoodbye = greeting('Goodbye');
sayGoodbye('Bob'); // "Goodbye, Bob!"

// Using closures for private variables
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1`,
  },

  {
    id: 'js-iterators',
    topicId: 'javascript',
    title: 'Iterators and Generators',
    description: 'Learn about iterators and generators in JavaScript',
    duration: 15,
    completed: false,
    content: `
# JavaScript Iterators and Generators

Iterators and generators provide a way to work with data sequentially.

 Iterators

An iterator is an object that defines a sequence and potentially a return value upon its termination. It implements the \`next()\` method, which returns an object with two properties:

- \`value\`: The next value in the sequence
- \`done\`: A boolean indicating whether the sequence is complete

javascript
function createIterator(array) {
  let index = 0;
  return {
    next: function () {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const iterator = createIterator(['a', 'b', 'c']);
console.log(iterator.next()); // { value: 'a', done: false }
console.log(iterator.next()); // { value: 'b', done: false }
console.log(iterator.next()); // { value: 'c', done: false }
console.log(iterator.next()); // { value: undefined, done: true }


 Generators

Generators are a special type of function that can pause and resume their execution. They are defined using the \`function*\` syntax and use the \`yield\` keyword to produce values.

javascript
function* generatorFunction() {
  yield 'Hello';
  yield 'World';
  return 'Done';
}

const generator = generatorFunction();
console.log(generator.next()); // { value: 'Hello', done: false }
console.log(generator.next()); // { value: 'World', done: false }
console.log(generator.next()); // { value: 'Done', done: true }


 Iterating with Generators

Generators can be used with \`for...of\` loops to iterate over their values.

javascript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

for (const num of numberGenerator()) {
  console.log(num); // 1, 2, 3
}


 Practical Use Cases

- Lazy evaluation
- Infinite sequences
- Custom iterable objects

javascript
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const sequence = infiniteSequence();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
    `,
    codeExample: `// Example of an iterator
const iterable = {
  [Symbol.iterator]: function () {
    let step = 0;
    return {
      next: function () {
        step++;
        if (step === 1) {
          return { value: 'Step 1', done: false };
        } else if (step === 2) {
          return { value: 'Step 2', done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (const value of iterable) {
  console.log(value); // "Step 1", "Step 2"
}

// Example of a generator
function* fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci(5);
console.log([...fib]); // [0, 1, 1, 2, 3]`,
  },

  {
    id: 'js-date',
    topicId: 'javascript',
    title: 'Date and Time',
    description: 'Learn how to work with dates and times in JavaScript',
    duration: 10,
    completed: false,
    content: `
# JavaScript Date and Time

JavaScript provides the \`Date\` object to work with dates and times.

 Creating a Date Object

You can create a \`Date\` object in several ways:

javascript
const now = new Date(); // Current date and time
const specificDate = new Date('2023-01-01'); // Specific date
const timestamp = new Date(1672531200000); // From timestamp (milliseconds since Jan 1, 1970)


 Getting Date and Time Components

You can extract specific components of a date:

javascript
const date = new Date();
console.log(date.getFullYear()); // Year
console.log(date.getMonth()); // Month (0-11)
console.log(date.getDate()); // Day of the month
console.log(date.getDay()); // Day of the week (0-6)
console.log(date.getHours()); // Hours
console.log(date.getMinutes()); // Minutes
console.log(date.getSeconds()); // Seconds


 Setting Date and Time Components

You can modify specific components of a date:

javascript
const date = new Date();
date.setFullYear(2024);
date.setMonth(11); // December (0-11)
date.setDate(25);
console.log(date);


 Formatting Dates

You can format dates using \`toLocaleDateString()\` and \`toLocaleTimeString()\`:

javascript
const date = new Date();
console.log(date.toLocaleDateString()); // e.g., "1/1/2023"
console.log(date.toLocaleTimeString()); // e.g., "12:00:00 AM"


 Working with Timestamps

You can get the timestamp of a date using \`getTime()\`:

javascript
const date = new Date();
console.log(date.getTime()); // Milliseconds since Jan 1, 1970


 Calculating Date Differences

You can calculate the difference between two dates:

javascript
const date1 = new Date('2023-01-01');
const date2 = new Date('2023-12-31');
const diff = date2 - date1; // Difference in milliseconds
console.log(diff / (1000 * 60 * 60 * 24)); // Difference in days
    `,
    codeExample: `// Creating a date object
const now = new Date();
console.log('Current Date and Time:', now);

// Getting date components
console.log('Year:', now.getFullYear());
console.log('Month:', now.getMonth() + 1); // Months are 0-based
console.log('Day:', now.getDate());

// Setting date components
const futureDate = new Date();
futureDate.setFullYear(2030);
futureDate.setMonth(0); // January
futureDate.setDate(1);
console.log('Future Date:', futureDate);

// Formatting a date
console.log('Formatted Date:', now.toLocaleDateString());
console.log('Formatted Time:', now.toLocaleTimeString());

// Calculating date difference
const startDate = new Date('2023-01-01');
const endDate = new Date('2023-12-31');
const daysDifference = (endDate - startDate) / (1000 * 60 * 60 * 24);
console.log('Days Difference:', daysDifference);`,
  },

  {
    id: 'js-regular-expressions',
    topicId: 'javascript',
    title: 'Regular Expressions',
    description:
      'Learn how to use regular expressions for pattern matching in JavaScript',
    duration: 15,
    completed: false,
    content: `
# JavaScript Regular Expressions

Regular expressions (regex) are patterns used to match character combinations in strings.

 Creating a Regular Expression

You can create a regex using:

- Literal syntax: \`/pattern/flags\`
- Constructor: \`new RegExp('pattern', 'flags')\`

javascript
const regex1 = /hello/i; // Case-insensitive match
const regex2 = new RegExp('hello', 'i');


 Common Flags

- \`i\`: Case-insensitive
- \`g\`: Global match
- \`m\`: Multiline match


 Testing a Pattern

You can use \`.test()\` to check if a pattern exists in a string.

javascript
const regex = /world/;
console.log(regex.test('Hello world')); // true


 Matching a Pattern

You can use \`.match()\` to find matches in a string.

javascript
const str = 'Hello world';
const matches = str.match(/world/);
console.log(matches); // ["world"]


 Replacing with a Pattern

You can use \`.replace()\` to replace matched substrings.

javascript
const str = 'Hello world';
const newStr = str.replace(/world/, 'JavaScript');
console.log(newStr); // "Hello JavaScript"


 Common Patterns

- \`\\d\`: Matches a digit
- \`\\w\`: Matches a word character
- \`\\s\`: Matches a whitespace character
- \`.\`: Matches any character except newline
- \`[abc]\`: Matches any character in the set
- \`[^abc]\`: Matches any character not in the set
- \`a*\`: Matches zero or more occurrences of "a"
- \`a+\`: Matches one or more occurrences of "a"
- \`a?\`: Matches zero or one occurrence of "a"
- \`a{2}\`: Matches exactly two occurrences of "a"
- \`a{2,4}\`: Matches between two and four occurrences of "a"
    `,
    codeExample: `// Testing a pattern
const regex = /\\d+/;
console.log(regex.test('123abc')); // true
console.log(regex.test('abc')); // false

// Matching a pattern
const str = 'The price is $100';
const match = str.match(/\\$\\d+/);
console.log(match[0]); // "$100"

// Replacing with a pattern
const text = 'I love cats';
const newText = text.replace(/cats/, 'dogs');
console.log(newText); // "I love dogs"

// Using regex with global flag
const sentence = 'The rain in Spain stays mainly in the plain';
const words = sentence.match(/\\b\\w+\\b/g);
console.log(words); // ["The", "rain", "in", "Spain", "stays", "mainly", "in", "the", "plain"]`,
  },
  {
    id: 'js-advanced-functions',
    topicId: 'javascript',
    title: 'Advanced Functions',
    description: 'Learn about advanced concepts in JavaScript functions',
    duration: 15,
    completed: false,
    content: `
# Advanced JavaScript Functions

Functions in JavaScript are first-class citizens, meaning they can be treated like any other value. This allows for powerful patterns and techniques.

 Higher-Order Functions

A higher-order function is a function that takes another function as an argument or returns a function.

javascript
function higherOrderFunction(callback) {
  callback();
}

higherOrderFunction(() => console.log('Callback executed'));


 Closures

Closures allow functions to access variables from their outer scope even after the outer function has returned.

javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(\`Outer: \${outerVariable}, Inner: \${innerVariable}\`);
  };
}

const newFunction = outerFunction('outside');
newFunction('inside'); // Outer: outside, Inner: inside


 Currying

Currying is the process of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

javascript
function add(a) {
  return function (b) {
    return a + b;
  };
}

const addFive = add(5);
console.log(addFive(3)); // 8


 Function Composition

Function composition is combining multiple functions into a single function.

javascript
const multiplyBy2 = x => x * 2;
const add3 = x => x + 3;

const compose = (f, g) => x => f(g(x));
const multiplyAndAdd = compose(add3, multiplyBy2);

console.log(multiplyAndAdd(5)); // 13


 Memoization

Memoization is an optimization technique to cache the results of expensive function calls.

javascript
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const factorial = memoize(n => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5)); // 120
console.log(factorial(5)); // Cached result: 120
    `,
    codeExample: `// Higher-order function example
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log); // Logs 0, 1, 2

// Currying example
const multiply = a => b => a * b;
const double = multiply(2);
console.log(double(4)); // 8

// Memoization example
const fibonacci = memoize(n => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10)); // 55`,
  },

  {
    id: 'js-recursion',
    topicId: 'javascript',
    title: 'Recursion',
    description: 'Learn about recursion and how to use it in JavaScript',
    duration: 12,
    completed: false,
    content: `
# JavaScript Recursion

Recursion is a programming technique where a function calls itself to solve smaller instances of a problem.

 Base Case and Recursive Case

A recursive function must have:

1. A **base case**: The condition under which the recursion stops.
2. A **recursive case**: The part where the function calls itself.

javascript
function factorial(n) {
  if (n === 0) { // Base case
    return 1;
  }
  return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // 120


 Common Use Cases

- Calculating factorials
- Traversing data structures (e.g., trees, graphs)
- Solving mathematical problems (e.g., Fibonacci sequence)


 Tail Recursion

Tail recursion is a special form of recursion where the recursive call is the last operation in the function. It can be optimized by some JavaScript engines to avoid stack overflow.

javascript
function tailFactorial(n, acc = 1) {
  if (n === 0) {
    return acc;
  }
  return tailFactorial(n - 1, acc * n);
}

console.log(tailFactorial(5)); // 120


 Recursive Data Structures

Recursion is often used to traverse nested data structures like trees.

javascript
const tree = {
  value: 1,
  children: [
    { value: 2, children: [] },
    { value: 3, children: [{ value: 4, children: [] }] },
  ],
};

function traverse(node) {
  console.log(node.value);
  node.children.forEach(traverse);
}

traverse(tree);
// Output: 1, 2, 3, 4
    `,
    codeExample: `// Example: Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8

// Example: Sum of an array using recursion
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15

// Example: Flattening a nested array
function flattenArray(arr) {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val);
  }, []);
}

console.log(flattenArray([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]`,
  },

  {
    id: 'js-map-set',
    topicId: 'javascript',
    title: 'Map and Set',
    description: 'Learn about Map and Set data structures in JavaScript',
    duration: 12,
    completed: false,
    content: `
# JavaScript Map and Set

JavaScript provides two powerful data structures: \`Map\` and \`Set\`.

 Map

A \`Map\` is a collection of key-value pairs where keys can be of any type.

# Creating a Map

javascript
const map = new Map();

# Common Methods

- \`set(key, value)\`: Adds a key-value pair
- \`get(key)\`: Retrieves the value for a key
- \`has(key)\`: Checks if a key exists
- \`delete(key)\`: Removes a key-value pair
- \`clear()\`: Removes all key-value pairs
- \`size\`: Returns the number of key-value pairs

javascript
map.set('name', 'John');
map.set('age', 30);
console.log(map.get('name')); // "John"
console.log(map.has('age')); // true
map.delete('age');
console.log(map.size); // 1

# Iterating Over a Map

javascript
map.set('country', 'USA');
for (const [key, value] of map) {
  console.log(\`\${key}: \${value}\`);
}

 Set

A \`Set\` is a collection of unique values.

# Creating a Set

javascript
const set = new Set();

# Common Methods

- \`add(value)\`: Adds a value
- \`has(value)\`: Checks if a value exists
- \`delete(value)\`: Removes a value
- \`clear()\`: Removes all values
- \`size\`: Returns the number of values

javascript
set.add(1);
set.add(2);
set.add(2); // Duplicate values are ignored
console.log(set.has(1)); // true
set.delete(2);
console.log(set.size); // 1

# Iterating Over a Set

javascript
set.add(3);
for (const value of set) {
  console.log(value);
}

 Use Cases

- \`Map\`: When you need key-value pairs with keys of any type
- \`Set\`: When you need a collection of unique values
    `,
    codeExample: `// Using Map
const userRoles = new Map();
userRoles.set('Alice', 'Admin');
userRoles.set('Bob', 'Editor');
console.log(userRoles.get('Alice')); // "Admin"
console.log(userRoles.has('Bob')); // true
userRoles.delete('Bob');
console.log(userRoles.size); // 1

// Using Set
const uniqueNumbers = new Set([1, 2, 3, 3, 4]);
console.log(uniqueNumbers); // Set { 1, 2, 3, 4 }
uniqueNumbers.add(5);
uniqueNumbers.delete(3);
console.log(uniqueNumbers.has(3)); // false
console.log([...uniqueNumbers]); // [1, 2, 4, 5]`,
  },
  {
    id: 'js-symbols',
    topicId: 'javascript',
    title: 'Symbols',
    description: 'Learn about Symbols and their use cases in JavaScript',
    duration: 10,
    completed: false,
    content: `
# JavaScript Symbols

Symbols are a unique and immutable primitive data type introduced in ES6. They are often used as unique property keys.

 Creating a Symbol

You can create a Symbol using the \`Symbol()\` function.

javascript
const sym1 = Symbol();
const sym2 = Symbol('description');

console.log(sym1); // Symbol()
console.log(sym2); // Symbol(description)


 Unique Nature of Symbols

Each Symbol is unique, even if they have the same description.

javascript
const sym1 = Symbol('key');
const sym2 = Symbol('key');

console.log(sym1 === sym2); // false


 Using Symbols as Object Keys

Symbols can be used as unique keys for object properties.

javascript
const obj = {};
const sym = Symbol('id');

obj[sym] = 123;
console.log(obj[sym]); // 123


 Symbol.for() and Symbol.keyFor()

- \`Symbol.for(key)\`: Creates or retrieves a Symbol from the global Symbol registry.
- \`Symbol.keyFor(sym)\`: Retrieves the key for a Symbol in the global registry.

javascript
const globalSym = Symbol.for('globalKey');
console.log(Symbol.keyFor(globalSym)); // "globalKey"


 Well-Known Symbols

JavaScript provides built-in Symbols for customizing object behavior.

- \`Symbol.iterator\`: Defines the default iterator for an object.
- \`Symbol.toStringTag\`: Customizes the default string description of an object.

javascript
const iterable = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

console.log([...iterable]); // [1, 2, 3]

const obj = {
  [Symbol.toStringTag]: 'CustomObject',
};

console.log(obj.toString()); // "[object CustomObject]"
    `,
    codeExample: `// Creating unique symbols
const sym1 = Symbol('unique');
const sym2 = Symbol('unique');
console.log(sym1 === sym2); // false

// Using symbols as object keys
const user = {
  [Symbol('id')]: 1,
  name: 'Alice',
};
console.log(Object.keys(user)); // ["name"]
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]

// Global symbols
const globalSym = Symbol.for('shared');
const anotherGlobalSym = Symbol.for('shared');
console.log(globalSym === anotherGlobalSym); // true

// Well-known symbols
class CustomArray extends Array {
  get [Symbol.toStringTag]() {
    return 'CustomArray';
  }
}
const arr = new CustomArray(1, 2, 3);
console.log(arr.toString()); // "1,2,3"
console.log(Object.prototype.toString.call(arr)); // "[object CustomArray]"`,
  },

  {
    id: 'dsa-arrays',
    topicId: 'dsa',
    title: 'Arrays',
    description: 'Understanding arrays and basic array operations',
    duration: 12,
    completed: false,
    content: `
# Arrays in JavaScript

Arrays are ordered collections of values. They can hold values of different types.

 Creating Arrays

You can create arrays using array literals or the Array constructor:

javascript
const fruits = ['apple', 'banana', 'orange'];
const numbers = new Array(1, 2, 3, 4, 5);


 Common Array Methods

- push(): Add elements to the end
- pop(): Remove the last element
- shift(): Remove the first element
- unshift(): Add elements to the beginning
- splice(): Add/remove elements at a specific position
- slice(): Return a section of an array
- forEach(): Execute a function on each element
- map(): Create a new array with results of a function
- filter(): Create a new array with elements that pass a test
- reduce(): Reduce array to a single value
    `,
    codeExample: `// Creating an array
const fruits = ['apple', 'banana', 'orange'];

// Accessing elements (zero-based indexing)
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "orange"

// Modifying elements
fruits[1] = 'grape';
console.log(fruits); // ["apple", "grape", "orange"]

// Array length
console.log(fruits.length); // 3

// Adding elements
fruits.push('mango');
console.log(fruits); // ["apple", "grape", "orange", "mango"]

// Removing elements
const lastFruit = fruits.pop();
console.log(lastFruit); // "mango"
console.log(fruits); // ["apple", "grape", "orange"]

// Iterating through an array
fruits.forEach((fruit, index) => {
  console.log(\${index}: \${fruit});
});

// Creating a new array with map()
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ["APPLE", "GRAPE", "ORANGE"]`,
  },

  {
    id: 'dsa-bubble-sort',
    topicId: 'dsa',
    title: 'Bubble Sort',
    description: 'Learn how the Bubble Sort algorithm works',
    duration: 10,
    completed: false,
    content: `
  # Bubble Sort

  Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

   Algorithm

  1. Start at the beginning of the array.
  2. Compare each pair of adjacent elements.
  3. Swap them if they are in the wrong order.
  4. Repeat the process for all elements until the array is sorted.

   Time Complexity

  - Best Case: O(n) (when the array is already sorted)
  - Worst Case: O(n^2)
  - Average Case: O(n^2)
      `,
    codeExample: `// Bubble Sort Implementation
  function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }

  // Example usage
  const array = [64, 34, 25, 12, 22, 11, 90];
  console.log('Sorted Array:', bubbleSort(array)); // [11, 12, 22, 25, 34, 64, 90]`,
  },
  {
    id: 'dsa-selection-sort',
    topicId: 'dsa',
    title: 'Selection Sort',
    description: 'Learn how the Selection Sort algorithm works',
    duration: 10,
    completed: false,
    content: `
  # Selection Sort

  Selection Sort is a simple sorting algorithm that divides the array into a sorted and an unsorted part. It repeatedly selects the smallest element from the unsorted part and moves it to the sorted part.

   Algorithm

  1. Find the smallest element in the unsorted part of the array.
  2. Swap it with the first element of the unsorted part.
  3. Repeat the process for the remaining unsorted part.

   Time Complexity

  - Best Case: O(n^2)
  - Worst Case: O(n^2)
  - Average Case: O(n^2)
      `,
    codeExample: `// Selection Sort Implementation
  function selectionSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Swap the found minimum element with the first element
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
  }

  // Example usage
  const array = [64, 25, 12, 22, 11];
  console.log('Sorted Array:', selectionSort(array)); // [11, 12, 22, 25, 64]`,
  },
  {
    id: 'dsa-insertion-sort',
    topicId: 'dsa',
    title: 'Insertion Sort',
    description: 'Learn how the Insertion Sort algorithm works',
    duration: 10,
    completed: false,
    content: `
  # Insertion Sort

  Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much like sorting playing cards in your hands.

   Algorithm

  1. Start with the second element as the key.
  2. Compare the key with elements before it.
  3. Shift elements that are greater than the key to the right.
  4. Insert the key in its correct position.
  5. Repeat for all elements.

   Time Complexity

  - Best Case: O(n) (when the array is already sorted)
  - Worst Case: O(n^2)
  - Average Case: O(n^2)
      `,
    codeExample: `// Insertion Sort Implementation
  function insertionSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }

  // Example usage
  const array = [12, 11, 13, 5, 6];
  console.log('Sorted Array:', insertionSort(array)); // [5, 6, 11, 12, 13]`,
  },
  {
    id: 'dsa-quick-sort',
    topicId: 'dsa',
    title: 'Quick Sort',
    description: 'Learn how the Quick Sort algorithm works',
    duration: 12,
    completed: false,
    content: `
  # Quick Sort

  Quick Sort is a divide-and-conquer algorithm that selects a pivot element and partitions the array into two subarrays: one with elements less than the pivot and one with elements greater than the pivot.

   Algorithm

  1. Choose a pivot element.
  2. Partition the array into two subarrays.
  3. Recursively apply the same process to the subarrays.

   Time Complexity

  - Best Case: O(n log n)
  - Worst Case: O(n^2) (when the pivot is poorly chosen)
  - Average Case: O(n log n)
      `,
    codeExample: `// Quick Sort Implementation
  function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = arr.filter((el) => el < pivot);
    const right = arr.filter((el) => el > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
  }

  // Example usage
  const array = [10, 7, 8, 9, 1, 5];
  console.log('Sorted Array:', quickSort(array)); // [1, 5, 7, 8, 9, 10]`,
  },
  {
    id: 'dsa-counting-sort',
    topicId: 'dsa',
    title: 'Counting Sort',
    description: 'Learn how the Counting Sort algorithm works',
    duration: 12,
    completed: false,
    content: `
  # Counting Sort

  Counting Sort is a non-comparison-based sorting algorithm that works by counting the frequency of each element and using that information to place elements in their correct positions.

   Algorithm

  1. Count the frequency of each element.
  2. Compute the cumulative sum of counts.
  3. Place elements in their correct positions based on the cumulative counts.

   Time Complexity

  - Best Case: O(n + k)
  - Worst Case: O(n + k)
  - Average Case: O(n + k)

  Where \`k\` is the range of input values.
      `,
    codeExample: `// Counting Sort Implementation
  function countingSort(arr: number[]): number[] {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    const output = new Array(arr.length);

    // Count the occurrences
    arr.forEach((num) => count[num]++);

    // Compute cumulative counts
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }

    // Place elements in sorted order
    for (let i = arr.length - 1; i >= 0; i--) {
      output[--count[arr[i]]] = arr[i];
    }

    return output;
  }

  // Example usage
  const array = [4, 2, 2, 8, 3, 3, 1];
  console.log('Sorted Array:', countingSort(array)); // [1, 2, 2, 3, 3, 4, 8]`,
  },
  {
    id: 'dsa-radix-sort',
    topicId: 'dsa',
    title: 'Radix Sort',
    description: 'Learn how the Radix Sort algorithm works',
    duration: 12,
    completed: false,
    content: `
  # Radix Sort

  Radix Sort is a non-comparison-based sorting algorithm that sorts numbers by processing individual digits.

   Algorithm

  1. Find the maximum number to determine the number of digits.
  2. Sort the array digit by digit, starting from the least significant digit.

   Time Complexity

  - Best Case: O(nk)
  - Worst Case: O(nk)
  - Average Case: O(nk)

  Where \`k\` is the number of digits in the largest number.
      `,
    codeExample: `// Radix Sort Implementation
  function radixSort(arr: number[]): number[] {
    const max = Math.max(...arr);
    let exp = 1;

    while (Math.floor(max / exp) > 0) {
      arr = countingSortByDigit(arr, exp);
      exp *= 10;
    }

    return arr;
  }

  function countingSortByDigit(arr: number[], exp: number): number[] {
    const count = new Array(10).fill(0);
    const output = new Array(arr.length);

    // Count occurrences of digits
    arr.forEach((num) => count[Math.floor(num / exp) % 10]++);

    // Compute cumulative counts
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }

    // Place elements in sorted order
    for (let i = arr.length - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[--count[digit]] = arr[i];
    }

    return output;
  }

  // Example usage
  const array = [170, 45, 75, 90, 802, 24, 2, 66];
  console.log('Sorted Array:', radixSort(array)); // [2, 24, 45, 66, 75, 90, 170, 802]`,
  },
  {
    id: 'dsa-merge-sort',
    topicId: 'dsa',
    title: 'Merge Sort',
    description: 'Learn how the Merge Sort algorithm works',
    duration: 12,
    completed: false,
    content: `
  # Merge Sort

  Merge Sort is a divide-and-conquer algorithm that divides the array into halves, sorts them, and then merges them back together.

   Algorithm

  1. Divide the array into two halves.
  2. Recursively sort each half.
  3. Merge the sorted halves.

   Time Complexity

  - Best Case: O(n log n)
  - Worst Case: O(n log n)
  - Average Case: O(n log n)
      `,
    codeExample: `// Merge Sort Implementation
  function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  }

  function merge(left: number[], right: number[]): number[] {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
  }

  // Example usage
  const array = [12, 11, 13, 5, 6, 7];
  console.log('Sorted Array:', mergeSort(array)); // [5, 6, 7, 11, 12, 13]`,
  },
  {
    id: 'dsa-linear-search',
    topicId: 'dsa',
    title: 'Linear Search',
    description: 'Learn how the Linear Search algorithm works',
    duration: 8,
    completed: false,
    content: `
  # Linear Search

  Linear Search is a simple search algorithm that checks each element in the array until the target element is found.

   Algorithm

  1. Start from the first element.
  2. Compare each element with the target.
  3. Return the index if the target is found, or -1 if not.

   Time Complexity

  - Best Case: O(1) (when the target is at the beginning)
  - Worst Case: O(n)
  - Average Case: O(n)
      `,
    codeExample: `// Linear Search Implementation
  function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }

  // Example usage
  const array = [10, 20, 30, 40, 50];
  console.log('Index of 30:', linearSearch(array, 30)); // 2
  console.log('Index of 60:', linearSearch(array, 60)); // -1`,
  },
  {
    id: 'dsa-binary-search',
    topicId: 'dsa',
    title: 'Binary Search',
    description: 'Learn how the Binary Search algorithm works',
    duration: 10,
    completed: false,
    content: `
  # Binary Search

  Binary Search is an efficient search algorithm that works on sorted arrays by repeatedly dividing the search interval in half.

   Algorithm

  1. Start with the middle element.
  2. If the target is equal to the middle element, return its index.
  3. If the target is less than the middle element, search the left half.
  4. If the target is greater than the middle element, search the right half.

   Time Complexity

  - Best Case: O(1)
  - Worst Case: O(log n)
  - Average Case: O(log n)
      `,
    codeExample: `// Binary Search Implementation
  function binarySearch(arr: number[], target: number): number {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }

  // Example usage
  const array = [10, 20, 30, 40, 50];
  console.log('Index of 30:', binarySearch(array, 30)); // 2
  console.log('Index of 60:', binarySearch(array, 60)); // -1`,
  },

  {
    id: 'dsa-linked-lists',
    topicId: 'dsa',
    title: 'Linked Lists',
    description: 'Learn about linked lists and their operations',
    duration: 15,
    completed: false,
    content: `
  # Linked Lists

  A linked list is a linear data structure where each element (node) contains a value and a reference (link) to the next node in the sequence.

   Types of Linked Lists

  1. **Singly Linked List**: Each node points to the next node.
  2. **Doubly Linked List**: Each node points to both the next and previous nodes.
  3. **Circular Linked List**: The last node points back to the first node.

   Memory Representation

  In a linked list, nodes are stored in non-contiguous memory locations. Each node contains:
  - **Data**: The value of the node.
  - **Next**: A pointer/reference to the next node.

   Common Operations

  1. **Traversal**: Visit each node in the list.
  2. **Insertion**: Add a node at the beginning, end, or a specific position.
  3. **Deletion**: Remove a node from the beginning, end, or a specific position.
  4. **Search**: Find a node with a specific value.

   Time Complexity

  - Traversal: O(n)
  - Insertion: O(1) (at the beginning), O(n) (at a specific position)
  - Deletion: O(1) (at the beginning), O(n) (at a specific position)
  - Search: O(n)
      `,
    codeExample: `// Node class
  class Node {
    constructor(public data: number, public next: Node | null = null) {}
  }

  // Singly Linked List class
  class LinkedList {
    head: Node | null = null;

    // Insert at the beginning
    insertAtBeginning(data: number): void {
      const newNode = new Node(data, this.head);
      this.head = newNode;
    }

    // Insert at the end
    insertAtEnd(data: number): void {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    // Delete a node
    deleteNode(data: number): void {
      if (!this.head) return;
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      while (current.next && current.next.data !== data) {
        current = current.next;
      }
      if (current.next) {
        current.next = current.next.next;
      }
    }

    // Traverse the list
    traverse(): void {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }

  // Example usage
  const list = new LinkedList();
  list.insertAtBeginning(10);
  list.insertAtEnd(20);
  list.insertAtEnd(30);
  list.traverse(); // 10, 20, 30
  list.deleteNode(20);
  list.traverse(); // 10, 30`,
  },
  {
    id: 'dsa-stacks',
    topicId: 'dsa',
    title: 'Stacks',
    description: 'Learn about stacks and their operations',
    duration: 12,
    completed: false,
    content: `
  # Stacks

  A stack is a linear data structure that follows the **Last In, First Out (LIFO)** principle. The last element added to the stack is the first one to be removed.

   Common Operations

  1. **Push**: Add an element to the top of the stack.
  2. **Pop**: Remove the top element from the stack.
  3. **Peek**: View the top element without removing it.
  4. **isEmpty**: Check if the stack is empty.

   Time Complexity

  - Push: O(1)
  - Pop: O(1)
  - Peek: O(1)
  - isEmpty: O(1)
      `,
    codeExample: `// Stack implementation using an array
  class Stack {
    private items: number[] = [];

    // Push an element onto the stack
    push(element: number): void {
      this.items.push(element);
    }

    // Pop an element from the stack
    pop(): number | undefined {
      return this.items.pop();
    }

    // Peek at the top element
    peek(): number | undefined {
      return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  }

  // Example usage
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  console.log(stack.peek()); // 20
  console.log(stack.pop()); // 20
  console.log(stack.isEmpty()); // false`,
  },
  {
    id: 'dsa-queues',
    topicId: 'dsa',
    title: 'Queues',
    description: 'Learn about queues and their operations',
    duration: 12,
    completed: false,
    content: `
  # Queues

  A queue is a linear data structure that follows the **First In, First Out (FIFO)** principle. The first element added to the queue is the first one to be removed.

   Common Operations

  1. **Enqueue**: Add an element to the end of the queue.
  2. **Dequeue**: Remove the front element from the queue.
  3. **Peek**: View the front element without removing it.
  4. **isEmpty**: Check if the queue is empty.

   Time Complexity

  - Enqueue: O(1)
  - Dequeue: O(1)
  - Peek: O(1)
  - isEmpty: O(1)
      `,
    codeExample: `// Queue implementation using an array
  class Queue {
    private items: number[] = [];

    // Enqueue an element
    enqueue(element: number): void {
      this.items.push(element);
    }

    // Dequeue an element
    dequeue(): number | undefined {
      return this.items.shift();
    }

    // Peek at the front element
    peek(): number | undefined {
      return this.items[0];
    }

    // Check if the queue is empty
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  }

  // Example usage
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  console.log(queue.peek()); // 10
  console.log(queue.dequeue()); // 10
  console.log(queue.isEmpty()); // false`,
  },

  {
    id: 'dsa-graphs',
    topicId: 'dsa',
    title: 'Graphs',
    description: 'Learn about graphs and their representations',
    duration: 15,
    completed: false,
    content: `
  # Graphs

  A graph is a data structure consisting of nodes (vertices) and edges that connect pairs of nodes.

   Types of Graphs

  1. **Directed Graph**: Edges have a direction.
  2. **Undirected Graph**: Edges do not have a direction.
  3. **Weighted Graph**: Edges have weights or costs.
  4. **Unweighted Graph**: Edges do not have weights.

   Representations

  1. **Adjacency Matrix**: A 2D array where \`matrix[i][j]\` indicates the presence of an edge between vertex \`i\` and vertex \`j\`.
  2. **Adjacency List**: An array of lists where each list contains the neighbors of a vertex.

   Applications

  - Social networks
  - Routing algorithms
  - Dependency resolution
      `,
    codeExample: `// Graph representation using adjacency list
  class Graph {
    private adjacencyList: Map<number, number[]> = new Map();

    // Add a vertex
    addVertex(vertex: number): void {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }

    // Add an edge
    addEdge(vertex1: number, vertex2: number): void {
      this.adjacencyList.get(vertex1)?.push(vertex2);
      this.adjacencyList.get(vertex2)?.push(vertex1); // For undirected graph
    }

    // Display the graph
    display(): void {
      for (const [vertex, edges] of this.adjacencyList) {
        console.log(\`\${vertex} -> \${edges.join(', ')}\`);
      }
    }
  }

  // Example usage
  const graph = new Graph();
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(3);
  graph.addEdge(1, 2);
  graph.addEdge(2, 3);
  graph.display();
  // Output:
  // 1 -> 2
  // 2 -> 1, 3
  // 3 -> 2`,
  },
  {
    id: 'dsa-graphs-traversal',
    topicId: 'dsa',
    title: 'Graph Traversal',
    description: 'Learn about graph traversal techniques',
    duration: 15,
    completed: false,
    content: `
  # Graph Traversal

  Graph traversal is the process of visiting all the nodes in a graph.

   Techniques

  1. **Breadth-First Search (BFS)**:
     - Explores all neighbors of a node before moving to the next level.
     - Uses a queue for implementation.

  2. **Depth-First Search (DFS)**:
     - Explores as far as possible along a branch before backtracking.
     - Uses a stack (or recursion) for implementation.

   Applications

  - Finding connected components
  - Pathfinding
  - Cycle detection
      `,
    codeExample: `// BFS and DFS implementation
  class GraphTraversal {
    private adjacencyList: Map<number, number[]> = new Map();

    addVertex(vertex: number): void {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }

    addEdge(vertex1: number, vertex2: number): void {
      this.adjacencyList.get(vertex1)?.push(vertex2);
      this.adjacencyList.get(vertex2)?.push(vertex1); // For undirected graph
    }

    bfs(start: number): void {
      const visited = new Set<number>();
      const queue: number[] = [start];

      while (queue.length > 0) {
        const vertex = queue.shift()!;
        if (!visited.has(vertex)) {
          console.log(vertex);
          visited.add(vertex);
          queue.push(...(this.adjacencyList.get(vertex) || []).filter(v => !visited.has(v)));
        }
      }
    }

    dfs(start: number, visited = new Set<number>()): void {
      if (visited.has(start)) return;
      console.log(start);
      visited.add(start);
      for (const neighbor of this.adjacencyList.get(start) || []) {
        this.dfs(neighbor, visited);
      }
    }
  }

  // Example usage
  const graph = new GraphTraversal();
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(3);
  graph.addEdge(1, 2);
  graph.addEdge(2, 3);
  console.log('BFS:');
  graph.bfs(1); // 1, 2, 3
  console.log('DFS:');
  graph.dfs(1); // 1, 2, 3`,
  },
  {
    id: 'dsa-cycle-detection',
    topicId: 'dsa',
    title: 'Cycle Detection in Graphs',
    description: 'Learn how to detect cycles in graphs',
    duration: 15,
    completed: false,
    content: `
  # Cycle Detection in Graphs

  A cycle in a graph is a path that starts and ends at the same vertex.

   Techniques

  1. **Undirected Graph**:
     - Use DFS to check if a visited node is encountered again (excluding the parent node).

  2. **Directed Graph**:
     - Use DFS with a recursion stack to detect back edges.

   Applications

  - Deadlock detection
  - Dependency resolution
      `,
    codeExample: `// Cycle detection in an undirected graph
  class CycleDetection {
    private adjacencyList: Map<number, number[]> = new Map();

    addVertex(vertex: number): void {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }

    addEdge(vertex1: number, vertex2: number): void {
      this.adjacencyList.get(vertex1)?.push(vertex2);
      this.adjacencyList.get(vertex2)?.push(vertex1);
    }

    hasCycle(): boolean {
      const visited = new Set<number>();

      const dfs = (vertex: number, parent: number): boolean => {
        visited.add(vertex);
        for (const neighbor of this.adjacencyList.get(vertex) || []) {
          if (!visited.has(neighbor)) {
            if (dfs(neighbor, vertex)) return true;
          } else if (neighbor !== parent) {
            return true;
          }
        }
        return false;
      };

      for (const vertex of this.adjacencyList.keys()) {
        if (!visited.has(vertex)) {
          if (dfs(vertex, -1)) return true;
        }
      }
      return false;
    }
  }

  // Example usage
  const graph = new CycleDetection();
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(3);
  graph.addEdge(1, 2);
  graph.addEdge(2, 3);
  graph.addEdge(3, 1);
  console.log('Has Cycle:', graph.hasCycle()); // true`,
  },
  {
    id: 'dsa-shortest-path',
    topicId: 'dsa',
    title: 'Shortest Path',
    description: 'Learn about shortest path algorithms in graphs',
    duration: 15,
    completed: false,
    content: `
  # Shortest Path Algorithms

  Shortest path algorithms are used to find the minimum distance or cost between two nodes in a graph.

   Common Algorithms

  1. **Dijkstra's Algorithm**:
     - Finds the shortest path from a source node to all other nodes in a graph with non-negative edge weights.
     - Uses a priority queue to greedily select the next closest node.

  2. **Bellman-Ford Algorithm**:
     - Finds the shortest path from a source node to all other nodes in a graph, even with negative edge weights.
     - Iteratively relaxes all edges up to \`V - 1\` times, where \`V\` is the number of vertices.

   Applications

  - Network routing
  - GPS navigation
  - Traffic flow optimization
        `,
    codeExample: `// Dijkstra's Algorithm
  function dijkstra(graph: number[][], source: number): number[] {
    const dist = Array(graph.length).fill(Infinity);
    const visited = new Set<number>();
    dist[source] = 0;

    while (visited.size < graph.length) {
      let u = -1;
      for (let i = 0; i < graph.length; i++) {
        if (!visited.has(i) && (u === -1 || dist[i] < dist[u])) {
          u = i;
        }
      }

      visited.add(u);

      for (let v = 0; v < graph.length; v++) {
        if (!visited.has(v) && graph[u][v] !== 0) {
          dist[v] = Math.min(dist[v], dist[u] + graph[u][v]);
        }
      }
    }

    return dist;
  }

  // Bellman-Ford Algorithm
  function bellmanFord(graph: { u: number; v: number; w: number }[], vertices: number, source: number): number[] {
    const dist = Array(vertices).fill(Infinity);
    dist[source] = 0;

    for (let i = 0; i < vertices - 1; i++) {
      for (const { u, v, w } of graph) {
        if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
          dist[v] = dist[u] + w;
        }
      }
    }

    // Check for negative weight cycles
    for (const { u, v, w } of graph) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        throw new Error('Graph contains a negative weight cycle');
      }
    }

    return dist;
  }

  // Example usage
  const graphMatrix = [
    [0, 1, 4, 0, 0],
    [0, 0, 4, 2, 7],
    [0, 0, 0, 3, 5],
    [0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0],
  ];
  console.log('Dijkstra:', dijkstra(graphMatrix, 0)); // [0, 1, 4, 3, 7]

  const graphEdges = [
    { u: 0, v: 1, w: 1 },
    { u: 0, v: 2, w: 4 },
    { u: 1, v: 2, w: 4 },
    { u: 1, v: 3, w: 2 },
    { u: 1, v: 4, w: 7 },
    { u: 2, v: 3, w: 3 },
    { u: 3, v: 4, w: 4 },
  ];
  console.log('Bellman-Ford:', bellmanFord(graphEdges, 5, 0)); // [0, 1, 4, 3, 7]`,
  },

  {
    id: 'dsa-mst',
    topicId: 'dsa',
    title: 'Minimum Spanning Tree',
    description: 'Learn about Minimum Spanning Tree (MST) and its algorithms',
    duration: 15,
    completed: false,
    content: `
  # Minimum Spanning Tree (MST)

  A Minimum Spanning Tree (MST) is a subset of edges in a connected, weighted graph that connects all vertices with the minimum total edge weight and without forming any cycles.

   Applications

  - Network design (e.g., laying cables, building roads)
  - Approximation algorithms for NP-hard problems
  - Cluster analysis

   Algorithms

  1. **Prim's Algorithm**:
     - Builds the MST by starting with a single vertex and greedily adding the smallest edge that connects a vertex in the MST to a vertex outside the MST.

  2. **Kruskal's Algorithm**:
     - Builds the MST by sorting all edges by weight and adding edges one by one, ensuring no cycles are formed.
        `,
    codeExample: `// Prim's Algorithm
  function primMST(graph: number[][]): number {
    const n = graph.length;
    const key = Array(n).fill(Infinity);
    const mstSet = Array(n).fill(false);
    key[0] = 0;
    let result = 0;

    for (let count = 0; count < n; count++) {
      let u = -1;

      for (let i = 0; i < n; i++) {
        if (!mstSet[i] && (u === -1 || key[i] < key[u])) {
          u = i;
        }
      }

      mstSet[u] = true;
      result += key[u];

      for (let v = 0; v < n; v++) {
        if (graph[u][v] && !mstSet[v] && graph[u][v] < key[v]) {
          key[v] = graph[u][v];
        }
      }
    }

    return result;
  }

  // Kruskal's Algorithm
  class UnionFind {
    parent: number[];
    rank: number[];

    constructor(size: number) {
      this.parent = Array.from({ length: size }, (_, i) => i);
      this.rank = Array(size).fill(0);
    }

    find(x: number): number {
      if (this.parent[x] !== x) {
        this.parent[x] = this.find(this.parent[x]);
      }
      return this.parent[x];
    }

    union(x: number, y: number): void {
      const rootX = this.find(x);
      const rootY = this.find(y);

      if (rootX !== rootY) {
        if (this.rank[rootX] > this.rank[rootY]) {
          this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
          this.parent[rootX] = rootY;
        } else {
          this.parent[rootY] = rootX;
          this.rank[rootX]++;
        }
      }
    }
  }

  function kruskalMST(edges: { u: number; v: number; w: number }[], vertices: number): number {
    edges.sort((a, b) => a.w - b.w);
    const uf = new UnionFind(vertices);
    let mstWeight = 0;

    for (const { u, v, w } of edges) {
      if (uf.find(u) !== uf.find(v)) {
        uf.union(u, v);
        mstWeight += w;
      }
    }

    return mstWeight;
  }

  // Example usage
  const graphMatrix = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0],
  ];
  console.log('Prim\'s MST Weight:', primMST(graphMatrix)); // 16

  const graphEdges = [
    { u: 0, v: 1, w: 2 },
    { u: 1, v: 2, w: 3 },
    { u: 0, v: 3, w: 6 },
    { u: 1, v: 3, w: 8 },
    { u: 1, v: 4, w: 5 },
    { u: 2, v: 4, w: 7 },
    { u: 3, v: 4, w: 9 },
  ];
  console.log('Kruskal\'s MST Weight:', kruskalMST(graphEdges, 5)); // 16`,
  },
  {
    id: 'dsa-max-flow',
    topicId: 'dsa',
    title: 'Maximum Flow',
    description: 'Learn about Maximum Flow and its algorithms',
    duration: 15,
    completed: false,
    content: `
  # Maximum Flow

  The Maximum Flow problem involves finding the maximum amount of flow that can be sent from a source node to a sink node in a flow network.

   Applications

  - Network routing
  - Bipartite matching
  - Image segmentation

   Algorithms

  1. **Ford-Fulkerson Algorithm**:
     - Repeatedly augments the flow along paths from the source to the sink until no more augmenting paths exist.

  2. **Edmonds-Karp Algorithm**:
     - A specific implementation of Ford-Fulkerson that uses BFS to find augmenting paths, ensuring a time complexity of O(VE^2).
        `,
    codeExample: `// Ford-Fulkerson Algorithm
  function fordFulkerson(graph: number[][], source: number, sink: number): number {
    const residualGraph = graph.map(row => [...row]);
    const parent = Array(graph.length).fill(-1);
    let maxFlow = 0;

    const bfs = (): boolean => {
      const visited = Array(graph.length).fill(false);
      const queue = [source];
      visited[source] = true;

      while (queue.length > 0) {
        const u = queue.shift()!;
        for (let v = 0; v < graph.length; v++) {
          if (!visited[v] && residualGraph[u][v] > 0) {
            queue.push(v);
            parent[v] = u;
            visited[v] = true;
            if (v === sink) return true;
          }
        }
      }

      return false;
    };

    while (bfs()) {
      let pathFlow = Infinity;
      for (let v = sink; v !== source; v = parent[v]) {
        const u = parent[v];
        pathFlow = Math.min(pathFlow, residualGraph[u][v]);
      }

      for (let v = sink; v !== source; v = parent[v]) {
        const u = parent[v];
        residualGraph[u][v] -= pathFlow;
        residualGraph[v][u] += pathFlow;
      }

      maxFlow += pathFlow;
    }

    return maxFlow;
  }

  // Example usage
  const capacityMatrix = [
    [0, 16, 13, 0, 0, 0],
    [0, 0, 10, 12, 0, 0],
    [0, 4, 0, 0, 14, 0],
    [0, 0, 9, 0, 0, 20],
    [0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0],
  ];
  console.log('Maximum Flow:', fordFulkerson(capacityMatrix, 0, 5)); // 23`,
  },
  {
    id: 'dsa-time-complexity',
    topicId: 'dsa',
    title: 'Time Complexity',
    description: 'Learn about time complexity and how to analyze algorithms',
    duration: 10,
    completed: false,
    content: `
  # Time Complexity

  Time complexity is a measure of the amount of time an algorithm takes to complete as a function of the size of its input.

   Common Time Complexities

  1. **O(1)**: Constant time - The algorithm takes the same amount of time regardless of input size.
  2. **O(log n)**: Logarithmic time - The algorithm's time grows logarithmically with input size.
  3. **O(n)**: Linear time - The algorithm's time grows linearly with input size.
  4. **O(n log n)**: Log-linear time - Common in efficient sorting algorithms like Merge Sort.
  5. **O(n^2)**: Quadratic time - Common in simple sorting algorithms like Bubble Sort.
  6. **O(2^n)**: Exponential time - Common in algorithms that solve problems by brute force.
  7. **O(n!)**: Factorial time - Common in algorithms that generate all permutations.

   Analyzing Time Complexity

  1. Identify the basic operations in the algorithm.
  2. Count how many times these operations are executed relative to the input size.
  3. Express the result using Big-O notation.

   Examples

  # Example 1: Constant Time (O(1))

  javascript
  function getFirstElement(arr) {
    return arr[0];
  }

  # Example 2: Linear Time (O(n))

  javascript
  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  # Example 3: Quadratic Time (O(n^2))

  javascript
  function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        console.log(arr[i], arr[j]);
      }
    }
  }
      `,
    codeExample: `// Constant time example
  function isEven(num: number): boolean {
    return num % 2 === 0;
  }

  // Linear time example
  function findMax(arr: number[]): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

  // Quadratic time example
  function hasDuplicate(arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return true;
        }
      }
    }
    return false;
  }`,
  },

  {
    id: 'python-variables',
    topicId: 'python',
    title: 'Variables',
    description: 'Learn about variables and how to use them in Python',
    duration: 10,
    completed: false,
    content: `
    # Python Variables

    Variables are used to store data values. In Python, you don't need to declare the type of a variable; it is inferred from the value assigned.

     Declaring Variables

    python
    x = 5       # Integer
    y = 3.14    # Float
    name = "Alice"  # String
    is_active = True  # Boolean

     Variable Naming Rules

    - Must start with a letter or an underscore (\`_\`).
    - Cannot start with a number.
    - Can only contain alphanumeric characters and underscores.
    - Case-sensitive.

     Multiple Assignments

    python
    a, b, c = 1, 2, 3
    x = y = z = 0  # Assign the same value to multiple variables

     Constants

    By convention, constants are written in uppercase.

    python
    PI = 3.14159
    MAX_USERS = 100
        `,
    codeExample: `
    # Declaring variables
    age = 25
    height = 5.9
    name = "John"
    is_student = False

    # Printing variables
    print("Name:", name)
    print("Age:", age)
    print("Height:", height)
    print("Is Student:", is_student)

    # Multiple assignments
    x, y, z = 10, 20, 30
    print(x, y, z)

    # Constants
    GRAVITY = 9.8
    SPEED_OF_LIGHT = 299792458
    print("Gravity:", GRAVITY)
    print("Speed of Light:", SPEED_OF_LIGHT)
    `,
  },
  {
    id: 'python-conditionals',
    topicId: 'python',
    title: 'Conditionals',
    description: 'Learn how to use conditional statements in Python',
    duration: 10,
    completed: false,
    content: `
  # Python Conditionals

  Conditionals are used to perform different actions based on different conditions.

   if...elif...else Statement

  The \`if\` statement executes a block of code if a specified condition is true. Use \`elif\` to specify a new condition to test if the previous condition is false, and \`else\` to specify a block of code to execute if none of the conditions are true.

  python
  if condition1:
      # code to execute if condition1 is true
  elif condition2:
      # code to execute if condition2 is true
  else:
      # code to execute if none of the conditions are true


   Ternary Operator

  The ternary operator is a shorthand for \`if...else\`.

  python
  value = true_value if condition else false_value
      `,
    codeExample: `
  # if...elif...else example
  age = 18
  if age < 18:
      print("You are a minor.")
  elif age == 18:
      print("You just became an adult!")
  else:
      print("You are an adult.")

  # Ternary operator example
  is_member = True
  fee = 5 if is_member else 10
  `,
  },

  {
    id: 'python-data-types',
    topicId: 'python',
    title: 'Data Types',
    description: 'Learn about data types in Python',
    duration: 10,
    completed: false,
    content: `
    # Python Data Types

    Python has several built-in data types:

    - **Numeric Types**: int, float, complex
    - **Sequence Types**: list, tuple, range
    - **Text Type**: str
    - **Set Types**: set, frozenset
    - **Mapping Type**: dict
    - **Boolean Type**: bool
    - **Binary Types**: bytes, bytearray, memoryview

     Checking Data Types

    Use the \`type()\` function to check the type of a variable.

    python
    x = 5
    print(type(x))  # <class 'int'>

     Type Conversion

    Convert between data types using functions like \`int()\`, \`float()\`, \`str()\`, etc.

    python
    x = 5.5
    y = int(x)  # Convert float to int
    print(y)  # 5
        `,
    codeExample: `
    # Numeric types
    x = 10  # int
    y = 3.14  # float
    z = 1 + 2j  # complex

    # Sequence types
    fruits = ["apple", "banana", "cherry"]  # list
    numbers = (1, 2, 3)  # tuple
    range_obj = range(5)  # range

    # Text type
    name = "Alice"  # str

    # Set types
    unique_numbers = {1, 2, 3}  # set
    frozen_set = frozenset([1, 2, 3])  # frozenset

    # Mapping type
    person = {"name": "Alice", "age": 25}  # dict

    # Boolean type
    is_active = True  # bool

    # Checking types
    print(type(x))  # <class 'int'>
    print(type(name))  # <class 'str'>

    # Type conversion
    num = "123"
    num_int = int(num)
    print(num_int)  # 123
    `,
  },
  {
    id: 'python-numbers',
    topicId: 'python',
    title: 'Numbers',
    description: 'Learn about numbers in Python',
    duration: 10,
    completed: false,
    content: `
    # Python Numbers

    Python supports three types of numeric data:

    - **int**: Integer numbers
    - **float**: Floating-point numbers
    - **complex**: Complex numbers

     Arithmetic Operations

    - Addition: \`+\`
    - Subtraction: \`-\`
    - Multiplication: \`*\`
    - Division: \`/\`
    - Floor Division: \`//\`
    - Modulus: \`%\`
    - Exponentiation: \`**\`

     Type Conversion

    Convert between numeric types using \`int()\`, \`float()\`, and \`complex()\`.

    python
    x = 5.5
    y = int(x)  # Convert float to int
    print(y)  # 5
        `,
    codeExample: `
    # Integer
    x = 10
    print(type(x))  # <class 'int'>

    # Float
    y = 3.14
    print(type(y))  # <class 'float'>

    # Complex
    z = 1 + 2j
    print(type(z))  # <class 'complex'>

    # Arithmetic operations
    a = 10
    b = 3
    print(a + b)  # 13
    print(a - b)  # 7
    print(a * b)  # 30
    print(a / b)  # 3.3333333333333335
    print(a // b)  # 3
    print(a % b)  # 1
    print(a ** b)  # 1000
    `,
  },
  {
    id: 'python-strings',
    topicId: 'python',
    title: 'Strings',
    description: 'Learn about strings and string operations in Python',
    duration: 12,
    completed: false,
    content: `
    # Python Strings

    Strings are sequences of characters enclosed in single, double, or triple quotes.

     String Operations

    - Concatenation: \`+\`
    - Repetition: \`*\`
    - Slicing: \`[start:end]\`
    - Length: \`len()\`

     String Methods

    - \`lower()\`: Convert to lowercase
    - \`upper()\`: Convert to uppercase
    - \`strip()\`: Remove whitespace
    - \`replace()\`: Replace a substring
    - \`split()\`: Split into a list
    - \`join()\`: Join a list into a string
        `,
    codeExample: `
    # Creating strings
    name = "Alice"
    greeting = 'Hello'
    multiline = """This is
    a multiline string."""

    # String operations
    full_greeting = greeting + ", " + name
    print(full_greeting)  # "Hello, Alice"
    print(name * 3)  # "AliceAliceAlice"
    print(name[0:3])  # "Ali"
    print(len(name))  # 5

    # String methods
    print(name.lower())  # "alice"
    print(name.upper())  # "ALICE"
    print(name.strip())  # "Alice"
    print(name.replace("A", "E"))  # "Elice"
    print("a,b,c".split(","))  # ['a', 'b', 'c']
    print("-".join(["a", "b", "c"]))  # "a-b-c"
    `,
  },
  {
    id: 'python-booleans',
    topicId: 'python',
    title: 'Booleans',
    description: 'Learn about booleans and logical operations in Python',
    duration: 8,
    completed: false,
    content: `
    # Python Booleans

    Booleans represent one of two values: \`True\` or \`False\`.

     Logical Operators

    - \`and\`: Returns \`True\` if both operands are true
    - \`or\`: Returns \`True\` if at least one operand is true
    - \`not\`: Reverses the boolean value

     Comparison Operators

    - Equal: \`==\`
    - Not Equal: \`!=\`
    - Greater Than: \`>\`
    - Less Than: \`<\`
    - Greater Than or Equal To: \`>=\`
    - Less Than or Equal To: \`<=\`
        `,
    codeExample: `
    # Boolean values
    is_active = True
    is_admin = False

    # Logical operators
    print(is_active and is_admin)  # False
    print(is_active or is_admin)  # True
    print(not is_active)  # False

    # Comparison operators
    x = 10
    y = 20
    print(x == y)  # False
    print(x != y)  # True
    print(x > y)  # False
    print(x < y)  # True
    `,
  },
  {
    id: 'python-operators',
    topicId: 'python',
    title: 'Operators',
    description: 'Learn about operators in Python',
    duration: 10,
    completed: false,
    content: `
    # Python Operators

    Operators are used to perform operations on variables and values.

     Types of Operators

    1. **Arithmetic Operators**: \`+\`, \`-\`, \`*\`, \`/\`, \`//\`, \`%\`, \`**\`
    2. **Comparison Operators**: \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`
    3. **Logical Operators**: \`and\`, \`or\`, \`not\`
    4. **Bitwise Operators**: \`&\`, \`|\`, \`^\`, \`~\`, \`<<\`, \`>>\`
    5. **Assignment Operators**: \`=\`, \`+=\`, \`-=\`, \`*=\`, \`/=\`, etc.
    6. **Membership Operators**: \`in\`, \`not in\`
    7. **Identity Operators**: \`is\`, \`is not\`
        `,
    codeExample: `
    # Arithmetic operators
    x = 10
    y = 3
    print(x + y)  # 13
    print(x - y)  # 7
    print(x * y)  # 30
    print(x / y)  # 3.3333333333333335
    print(x // y)  # 3
    print(x % y)  # 1
    print(x ** y)  # 1000

    # Logical operators
    print(x > 5 and y < 5)  # True
    print(x > 5 or y > 5)  # True
    print(not (x > 5))  # False

    # Membership operators
    fruits = ["apple", "banana", "cherry"]
    print("apple" in fruits)  # True
    print("grape" not in fruits)  # True

    # Identity operators
    a = [1, 2, 3]
    b = a
    c = [1, 2, 3]
    print(a is b)  # True
    print(a is c)  # False
    `,
  },

  {
    id: 'python-lists',
    topicId: 'python',
    title: 'Lists',
    description: 'Learn about lists and their operations in Python',
    duration: 12,
    completed: false,
    content: `
    # Python Lists

    Lists are ordered, mutable collections of items. They can hold items of different types.

     Creating Lists

    python
    fruits = ["apple", "banana", "cherry"]
    numbers = [1, 2, 3, 4, 5]

     Common List Operations

    - Accessing elements: \`list[index]\`
    - Adding elements: \`append()\`, \`insert()\`
    - Removing elements: \`remove()\`, \`pop()\`
    - Slicing: \`list[start:end]\`
    - Iterating: \`for item in list\`
        `,
    codeExample: `
    # Creating a list
    fruits = ["apple", "banana", "cherry"]

    # Accessing elements
    print(fruits[0])  # "apple"

    # Adding elements
    fruits.append("orange")
    fruits.insert(1, "grape")
    print(fruits)  # ["apple", "grape", "banana", "cherry", "orange"]

    # Removing elements
    fruits.remove("banana")
    print(fruits)  # ["apple", "grape", "cherry", "orange"]
    fruits.pop()
    print(fruits)  # ["apple", "grape", "cherry"]

    # Slicing
    print(fruits[1:3])  # ["grape", "cherry"]

    # Iterating
    for fruit in fruits:
        print(fruit)
    `,
  },
  {
    id: 'python-tuples',
    topicId: 'python',
    title: 'Tuples',
    description: 'Learn about tuples and their operations in Python',
    duration: 10,
    completed: false,
    content: `
    # Python Tuples

    Tuples are ordered, immutable collections of items. They can hold items of different types.

     Creating Tuples

    python
    fruits = ("apple", "banana", "cherry")
    numbers = (1, 2, 3, 4, 5)

     Common Tuple Operations

    - Accessing elements: \`tuple[index]\`
    - Slicing: \`tuple[start:end]\`
    - Iterating: \`for item in tuple\`
    - Unpacking: \`a, b, c = tuple\`
        `,
    codeExample: `
    # Creating a tuple
    fruits = ("apple", "banana", "cherry")

    # Accessing elements
    print(fruits[0])  # "apple"

    # Slicing
    print(fruits[1:3])  # ("banana", "cherry")

    # Iterating
    for fruit in fruits:
        print(fruit)

    # Unpacking
    a, b, c = fruits
    print(a)  # "apple"
    print(b)  # "banana"
    print(c)  # "cherry"
    `,
  },
  {
    id: 'python-sets',
    topicId: 'python',
    title: 'Sets',
    description: 'Learn about sets and their operations in Python',
    duration: 10,
    completed: false,
    content: `
    # Python Sets

    Sets are unordered collections of unique items.

     Creating Sets

    python
    fruits = {"apple", "banana", "cherry"}
    numbers = set([1, 2, 3, 4, 5])

     Common Set Operations

    - Adding elements: \`add()\`
    - Removing elements: \`remove()\`, \`discard()\`
    - Set operations: \`union()\`, \`intersection()\`, \`difference()\`
        `,
    codeExample: `
    # Creating a set
    fruits = {"apple", "banana", "cherry"}

    # Adding elements
    fruits.add("orange")
    print(fruits)  # {"apple", "banana", "cherry", "orange"}

    # Removing elements
    fruits.remove("banana")
    print(fruits)  # {"apple", "cherry", "orange"}

    # Set operations
    set1 = {1, 2, 3}
    set2 = {3, 4, 5}
    print(set1.union(set2))  # {1, 2, 3, 4, 5}
    print(set1.intersection(set2))  # {3}
    print(set1.difference(set2))  # {1, 2}
    `,
  },
  {
    id: 'python-dictionaries',
    topicId: 'python',
    title: 'Dictionaries',
    description: 'Learn about dictionaries and their operations in Python',
    duration: 12,
    completed: false,
    content: `
    # Python Dictionaries

    Dictionaries are unordered collections of key-value pairs.

     Creating Dictionaries

    python
    person = {"name": "Alice", "age": 25, "city": "New York"}

     Common Dictionary Operations

    - Accessing values: \`dict[key]\`
    - Adding/updating values: \`dict[key] = value\`
    - Removing values: \`pop()\`, \`del\`
    - Iterating: \`for key, value in dict.items()\`
        `,
    codeExample: `
    # Creating a dictionary
    person = {"name": "Alice", "age": 25, "city": "New York"}

    # Accessing values
    print(person["name"])  # "Alice"

    # Adding/updating values
    person["age"] = 26
    person["country"] = "USA"
    print(person)  # {"name": "Alice", "age": 26, "city": "New York", "country": "USA"}

    # Removing values
    person.pop("city")
    print(person)  # {"name": "Alice", "age": 26, "country": "USA"}

    # Iterating
    for key, value in person.items():
        print(key, ":", value)
    `,
  },
  {
    id: 'python-while-loops',
    topicId: 'python',
    title: 'While Loops',
    description: 'Learn how to use while loops in Python',
    duration: 10,
    completed: false,
    content: `
# Python While Loops

A while loop repeatedly executes a block of code as long as a specified condition is true.

 Syntax

python
while condition:
    # code to execute

 Example

python
count = 0
while count < 5:
    print(count)
    count += 1
    `,
    codeExample: `
# Example of a while loop
count = 0
while count < 5:
    print("Count:", count)
    count += 1

# Using break to exit a loop
count = 0
while True:
    print("Count:", count)
    count += 1
    if count == 3:
        break

# Using continue to skip an iteration
count = 0
while count < 5:
    count += 1
    if count == 3:
        continue
    print("Count:", count)
`,
  },
  {
    id: 'python-for-loops',
    topicId: 'python',
    title: 'For Loops',
    description: 'Learn how to use for loops in Python',
    duration: 10,
    completed: false,
    content: `
# Python For Loops

A for loop is used to iterate over a sequence (e.g., list, tuple, string, or range).

 Syntax

python
for item in sequence:
    # code to execute

 Example

python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
    `,
    codeExample: `
# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print("Fruit:", fruit)

# Iterating over a range
for i in range(5):
    print("Number:", i)

# Using break to exit a loop
for i in range(5):
    if i == 3:
        break
    print("Number:", i)

# Using continue to skip an iteration
for i in range(5):
    if i == 3:
        continue
    print("Number:", i)
`,
  },
  {
    id: 'python-functions',
    topicId: 'python',
    title: 'Functions',
    description: 'Learn how to define and use functions in Python',
    duration: 12,
    completed: false,
    content: `
# Python Functions

Functions are blocks of reusable code that perform a specific task.

 Defining a Function

python
def function_name(parameters):
    # code to execute
    return value

 Example

python
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
    `,
    codeExample: `
# Defining a function
def add(a, b):
    return a + b

# Calling a function
result = add(5, 3)
print("Result:", result)

# Function with default parameters
def greet(name="Guest"):
    print("Hello,", name)

greet("Alice")
greet()

# Function with variable-length arguments
def sum_all(*args):
    return sum(args)

print("Sum:", sum_all(1, 2, 3, 4, 5))
`,
  },
  {
    id: 'python-arrays',
    topicId: 'python',
    title: 'Arrays',
    description: 'Learn about arrays and their operations in Python',
    duration: 12,
    completed: false,
    content: `
# Python Arrays

Arrays are collections of items of the same type. In Python, arrays are provided by the \`array\` module.

 Creating Arrays

python
from array import array
numbers = array('i', [1, 2, 3, 4, 5])

 Common Array Operations

- Accessing elements: \`array[index]\`
- Adding elements: \`append()\`
- Removing elements: \`remove()\`
- Iterating: \`for item in array\`
    `,
    codeExample: `
from array import array

# Creating an array
numbers = array('i', [1, 2, 3, 4, 5])

# Accessing elements
print(numbers[0])  # 1

# Adding elements
numbers.append(6)
print(numbers)  # array('i', [1, 2, 3, 4, 5, 6])

# Removing elements
numbers.remove(3)
print(numbers)  # array('i', [1, 2, 4, 5, 6])

# Iterating
for number in numbers:
    print("Number:", number)
`,
  },
  {
    id: 'python-classes',
    topicId: 'python',
    title: 'Classes/Objects',
    description: 'Learn about classes and objects in Python',
    duration: 15,
    completed: false,
    content: `
# Python Classes/Objects

Classes are templates for creating objects. Objects are instances of classes.

 Defining a Class

python
class ClassName:
    def __init__(self, parameters):
        # initialize attributes

    def method_name(self):
        # code to execute

 Example

python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

person = Person("Alice", 25)
print(person.greet())
    `,
    codeExample: `
# Defining a class
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

# Creating an object
person = Person("Alice", 25)
person.greet()

# Modifying object attributes
person.age = 26
person.greet()

# Adding methods dynamically
def say_goodbye(self):
    print(f"Goodbye from {self.name}!")

Person.say_goodbye = say_goodbye
person.say_goodbye()
`,
  },





  {
    id: 'python-inheritance',
    topicId: 'python',
    title: 'Inheritance',
    description: 'Learn about inheritance in Python',
    duration: 12,
    completed: false,
    content: `
  # Python Inheritance

  Inheritance allows a class (child class) to inherit attributes and methods from another class (parent class).

   Defining Inheritance

  python
  class Parent:
    def __init__(self, name):
      self.name = name

    def greet(self):
      print(f"Hello, my name is {self.name}.")

  class Child(Parent):
    def __init__(self, name, age):
      super().__init__(name)
      self.age = age

   Example

  python
  child = Child("Alice", 10)
  child.greet()  # "Hello, my name is Alice."
    `,
    codeExample: `
  # Parent class
  class Animal:
    def __init__(self, name):
      self.name = name

    def speak(self):
      print(f"{self.name} makes a sound.")

  # Child class
  class Dog(Animal):
    def speak(self):
      print(f"{self.name} barks.")

  # Example usage
  dog = Dog("Buddy")
  dog.speak()  # "Buddy barks."
  `,
    },
    {
    id: 'python-iterators',
    topicId: 'python',
    title: 'Iterators',
    description: 'Learn about iterators in Python',
    duration: 10,
    completed: false,
    content: `
  # Python Iterators

  An iterator is an object that contains a countable number of values and can be iterated upon.

   Creating an Iterator

  python
  class MyNumbers:
    def __iter__(self):
      self.a = 1
      return self

    def __next__(self):
      if self.a <= 5:
        x = self.a
        self.a += 1
        return x
      else:
        raise StopIteration

   Example

  python
  myclass = MyNumbers()
  myiter = iter(myclass)

  for x in myiter:
    print(x)
    `,
    codeExample: `
  # Creating an iterator
  class Counter:
    def __init__(self, start, end):
      self.current = start
      self.end = end

    def __iter__(self):
      return self

    def __next__(self):
      if self.current > self.end:
        raise StopIteration
      else:
        self.current += 1
        return self.current - 1

  # Example usage
  counter = Counter(1, 5)
  for number in counter:
    print(number)  # 1, 2, 3, 4, 5
  `,
    },
    {
    id: 'python-polymorphism',
    topicId: 'python',
    title: 'Polymorphism',
    description: 'Learn about polymorphism in Python',
    duration: 10,
    completed: false,
    content: `
  # Python Polymorphism

  Polymorphism allows objects of different classes to be treated as objects of a common superclass.

   Example

  python
  class Animal:
    def speak(self):
      pass

  class Dog(Animal):
    def speak(self):
      return "Woof!"

  class Cat(Animal):
    def speak(self):
      return "Meow!"

  animals = [Dog(), Cat()]
  for animal in animals:
    print(animal.speak())
    `,
    codeExample: `
  # Polymorphism example
  class Shape:
    def area(self):
      pass

  class Circle(Shape):
    def __init__(self, radius):
      self.radius = radius

    def area(self):
      return 3.14 * self.radius ** 2

  class Rectangle(Shape):
    def __init__(self, width, height):
      self.width = width
      self.height = height

    def area(self):
      return self.width * self.height

  shapes = [Circle(5), Rectangle(4, 6)]
  for shape in shapes:
    print(shape.area())  # 78.5, 24
  `,
    },
    {
    id: 'python-modules',
    topicId: 'python',
    title: 'Modules',
    description: 'Learn about modules in Python',
    duration: 10,
    completed: false,
    content: `
  # Python Modules

  Modules are files containing Python code that can be imported and reused.

   Creating a Module

  python
  # mymodule.py
  def greet(name):
    return f"Hello, {name}!"

   Importing a Module

  python
  print(mymodule.greet("Alice"))
    `,
    codeExample: `
  # mymodule.py
  def add(a, b):
    return a + b

  # main.py
  print(mymodule.add(5, 3))  # 8

  # Importing specific functions
  from mymodule import add
  print(add(2, 4))  # 6
  `,
    },
    {
    id: 'python-dates',
    topicId: 'python',
    title: 'Dates',
    description: 'Learn about working with dates in Python',
    duration: 10,
    completed: false,
    content: `
  # Python Dates

  The \`datetime\` module provides classes for working with dates and times.

   Getting the Current Date and Time

  python
  from datetime import datetime
  now = datetime.now()
  print(now)

   Formatting Dates

  python
  formatted = now.strftime("%Y-%m-%d %H:%M:%S")
  print(formatted)
    `,
    codeExample: `
  from datetime import datetime, timedelta

  # Current date and time
  now = datetime.now()
  print("Now:", now)

  # Formatting
  formatted = now.strftime("%Y-%m-%d %H:%M:%S")
  print("Formatted:", formatted)

  # Adding days
  future_date = now + timedelta(days=10)
  print("Future Date:", future_date)
  `,
    },
    {
    id: 'python-math',
    topicId: 'python',
    title: 'Math',
    description: 'Learn about math operations in Python',
    duration: 10,
    completed: false,
    content: `
  # Python Math

  The \`math\` module provides mathematical functions.

   Common Functions

  - \`sqrt(x)\`: Square root
  - \`pow(x, y)\`: Power
  - \`ceil(x)\`: Ceiling
  - \`floor(x)\`: Floor
  - \`sin(x)\`, \`cos(x)\`, \`tan(x)\`: Trigonometric functions
    `,
    codeExample: `

  # Square root
  print(math.sqrt(16))  # 4.0

  # Power
  print(math.pow(2, 3))  # 8.0

  # Trigonometry
  print(math.sin(math.pi / 2))  # 1.0
  `,
    },
    {
    id: 'python-json',
    topicId: 'python',
    title: 'JSON',
    description: 'Learn about working with JSON in Python',
    duration: 10,
    completed: false,
    content: `
  # Python JSON

  The \`json\` module provides functions for working with JSON data.

   Parsing JSON

  python
  data = '{"name": "Alice", "age": 25}'
  parsed = json.loads(data)
  print(parsed["name"])

   Writing JSON

  python
  output = json.dumps(parsed)
  print(output)
    `,
    codeExample: `

  # Parsing JSON
  data = '{"name": "Alice", "age": 25}'
  parsed = json.loads(data)
  print(parsed["name"])  # Alice

  # Writing JSON
  output = json.dumps(parsed, indent=4)
  print(output)
  `,
    },
    {
    id: 'python-regex',
    topicId: 'python',
    title: 'RegEx',
    description: 'Learn about regular expressions in Python',
    duration: 12,
    completed: false,
    content: `
  # Python RegEx

  The \`re\` module provides functions for working with regular expressions.

   Common Functions

  - \`search(pattern, string)\`: Search for a match
  - \`findall(pattern, string)\`: Find all matches
  - \`sub(pattern, repl, string)\`: Replace matches
    `,
    codeExample: `

  # Search
  match = re.search(r"\\d+", "The number is 42")
  print(match.group())  # 42

  # Find all
  matches = re.findall(r"\\d+", "Numbers: 42, 123")
  print(matches)  # ['42', '123']

  # Replace
  result = re.sub(r"\\d+", "X", "Numbers: 42, 123")
  print(result)  # Numbers: X, X
  `,
    },
    {
    id: 'python-pip',
    topicId: 'python',
    title: 'PIP',
    description: 'Learn about PIP and installing packages in Python',
    duration: 8,
    completed: false,
    content: `
  # Python PIP

  PIP is a package manager for Python.

   Installing a Package

  python
  pip install package_name

   Listing Installed Packages

  python
  pip list
    `,
    codeExample: `
  # Installing a package
  # Run in terminal: pip install requests

  # Using the installed package
  response = requests.get("https://api.github.com")
  print(response.status_code)
  `,
    },
    {
    id: 'python-try-except',
    topicId: 'python',
    title: 'Try...Except',
    description: 'Learn about error handling in Python',
    duration: 10,
    completed: false,
    content: `
  # Python Try...Except

  The \`try...except\` block is used to handle exceptions.

   Syntax

  python
  try:
    # code that may raise an exception
  except ExceptionType:
    # code to handle the exception
    `,
    codeExample: `
  # Example of try...except
  try:
    result = 10 / 0
  except ZeroDivisionError:
    print("Cannot divide by zero!")
  finally:
    print("Execution complete.")
  `,
    },
    {
    id: 'python-user-input',
    topicId: 'python',
    title: 'User Input',
    description: 'Learn how to take user input in Python',
    duration: 8,
    completed: false,
    content: `
  # Python User Input

  The \`input()\` function is used to take input from the user.

   Example

  python
  name = input("Enter your name: ")
  print(f"Hello, {name}!")
    `,
    codeExample: `
  # Taking user input
  name = input("Enter your name: ")
  age = int(input("Enter your age: "))
  print(f"Hello, {name}. You are {age} years old.")
  `,
    },
    {
    id: 'python-string-formatting',
    topicId: 'python',
    title: 'String Formatting',
    description: 'Learn about string formatting in Python',
    duration: 10,
    completed: false,
    content: `
  # Python String Formatting

  String formatting allows you to create formatted strings.

   Using f-strings

  python
  name = "Alice"
  age = 25
  print(f"My name is {name} and I am {age} years old.")

   Using format()

  python
  print("My name is {} and I am {} years old.".format(name, age))
    `,
    codeExample: `
  # f-strings
  name = "Alice"
  age = 25
  print(f"My name is {name} and I am {age} years old.")

  # format()
  print("My name is {} and I am {} years old.".format(name, age))

  # Padding and alignment
  print("{:<10} {:>10}".format("Left", "Right"))
  `,
    },







    {
      id: 'python-file-handling',
      topicId: 'python',
      title: 'File Handling',
      description: 'Learn about file handling in Python',
      duration: 12,
      completed: false,
      content: `
    # Python File Handling

    File handling allows you to work with files, such as reading, writing, and deleting them.

     Opening a File

    Use the \`open()\` function to open a file.

    python
    file = open("example.txt", "r")  # Modes: "r", "w", "a", "x"

     Closing a File

    Always close a file after working with it.

    python
    file.close()

     Using \`with\` Statement

    The \`with\` statement automatically closes the file.

    python
    with open("example.txt", "r") as file:
      content = file.read()
      `,
      codeExample: `
    # Reading a file
    with open("example.txt", "r") as file:
      content = file.read()
      print(content)

    # Writing to a file
    with open("example.txt", "w") as file:
      file.write("Hello, World!")

    # Appending to a file
    with open("example.txt", "a") as file:
      file.write("\\nAppended text.")

    # Deleting a file
    if os.path.exists("example.txt"):
      os.remove("example.txt")
    else:
      print("The file does not exist.")
    `,
    },
    {
      id: 'python-read-files',
      topicId: 'python',
      title: 'Read Files',
      description: 'Learn how to read files in Python',
      duration: 10,
      completed: false,
      content: `
    # Python Read Files

    You can read files using the \`open()\` function in read mode (\`"r"\`).

     Reading Methods

    - \`read()\`: Reads the entire file
    - \`readline()\`: Reads one line at a time
    - \`readlines()\`: Reads all lines into a list

    python
    with open("example.txt", "r") as file:
      content = file.read()
      print(content)
      `,
      codeExample: `
    # Reading the entire file
    with open("example.txt", "r") as file:
      content = file.read()
      print(content)

    # Reading line by line
    with open("example.txt", "r") as file:
      for line in file:
        print(line.strip())

    # Reading all lines into a list
    with open("example.txt", "r") as file:
      lines = file.readlines()
      print(lines)
    `,
    },
    {
      id: 'python-write-files',
      topicId: 'python',
      title: 'Write/Create Files',
      description: 'Learn how to write and create files in Python',
      duration: 10,
      completed: false,
      content: `
    # Python Write/Create Files

    You can write to files using the \`open()\` function in write mode (\`"w"\`) or append mode (\`"a"\`).

     Writing to a File

    python
    with open("example.txt", "w") as file:
      file.write("Hello, World!")

     Appending to a File

    python
    with open("example.txt", "a") as file:
      file.write("\\nAppended text.")
      `,
      codeExample: `
    # Writing to a file
    with open("example.txt", "w") as file:
      file.write("This is a new file.")

    # Appending to a file
    with open("example.txt", "a") as file:
      file.write("\\nThis text is appended.")

    # Creating a file
    with open("newfile.txt", "x") as file:
      file.write("This is a newly created file.")
    `,
    },
    {
      id: 'python-delete-files',
      topicId: 'python',
      title: 'Delete Files',
      description: 'Learn how to delete files in Python',
      duration: 8,
      completed: false,
      content: `
    # Python Delete Files

    You can delete files using the \`os\` module.

     Deleting a File

    python
    if os.path.exists("example.txt"):
      os.remove("example.txt")
    else:
      print("The file does not exist.")

     Deleting a Folder

    Use \`os.rmdir()\` to delete an empty folder.

    python
    os.rmdir("example_folder")
      `,
      codeExample: `

    # Deleting a file
    if os.path.exists("example.txt"):
      os.remove("example.txt")
      print("File deleted.")
    else:
      print("The file does not exist.")

    # Deleting a folder
    if os.path.exists("example_folder"):
      os.rmdir("example_folder")
      print("Folder deleted.")
    else:
      print("The folder does not exist.")
    `,
    },
];
