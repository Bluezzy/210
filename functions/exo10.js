logValue();

function logValue() {
  console.log('Hello, world!');
}

// After hoisting, the function declaration and the function definition are prioritized. Therefore, when calling the function, it is already defined.
// 'Hello, world!' is indeed logged.

// Further Exploration

var logsomeValue = 'foo';

function logsomeValue() {
  console.log('Hello, world!');
}

console.log(typeof logsomeValue);

// After hoisting, we get function declaration and defitnition, then variable declaration, then the assignment, and then the log.
// Since function and var has the same name , and function is prioritized after hoisting, var declaration becomes irrelevant.
// however, the variable that holds the function is assigned a string BEFORE the log.
// logsomeValue holds a value of type 'string', which cause typeof logsomeValue to return "string'"
// 'string' is then logged to the console.