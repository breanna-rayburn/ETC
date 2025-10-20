# JavaScript Mock Interview Preparation

This document is designed to help you prepare for your JavaScript mock interview. It includes hands-on coding questions and conceptual questions that cover fundamental JavaScript concepts.

## Hands-on Coding Questions

### 1. Sum of Two Numbers

**Question:** Write a function that takes two numbers as arguments and returns their sum.

```javascript
function sum(a, b) {
  return a + b;
}
```

### 2. Convert Celsius to Fahrenheit

**Question:** Write a function that takes a temperature in Celsius and converts it to Fahrenheit.

```javascript
function celsiusToFahrenheit(celsius) {
  return (celsius \* 9/5) + 32;
}
```

### 3. Count the Number of Characters in a String

**Question:** Write a function that takes a string and returns the number of characters in that string.

```javascript
function countCharacters(str) {
  return str.length;
}
```

### 4. Find the First Character of a String

**Question:** Write a function that returns the first character of a given string.

```javascript
function firstCharacter(str) {
  return str.charAt(0);
}
```

### 5. Check if a Number is Even or Odd

**Question:** Write a function that checks if a number is even or odd and returns "Even" or "Odd".

```javascript
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
```

## Conceptual Questions

### 1. What is the difference between == and === in JavaScript?

**Answer:** The == operator compares two values for equality with type coercion, while the === operator checks for strict equality, meaning both the value and type must match.

### 2. What is a variable in JavaScript?

**Answer:** A variable is a named storage for data. It allows you to store values (like numbers, strings, or objects) to be used later in your program.

### 3. What is a function in JavaScript?

**Answer:** A function is a reusable block of code that performs a specific task. Functions can take inputs (arguments) and return a value after executing their code.

### 4. What are objects in JavaScript?

**Answer:** Objects are data structures that store collections of key-value pairs. They can hold many values of different types, including other objects, arrays, and functions, making them essential for representing complex data.

### 5. What are arrays in JavaScript?

**Answer:** Arrays are special variables that can hold multiple values at once. They are ordered collections, allowing you to access each element by its index.
