# JavaScript Cheatsheet

## Basics

### Variables

- **let**: Block-scoped variable.

  ```javascript
  let variableName = value;
  ```

- **const**: Block-scoped constant.

  ```javascript
  const constantName = value;
  ```

- **var**: Function-scoped variable (less recommended).
  ```javascript
  var variableName = value;
  ```

### Data Types

- **String**: Text data.
- **Number**: Numeric data (integer or float).
- **Boolean**: `true` or `false`.
- **Object**: Key-value pairs.
- **Array**: Ordered list of values.
- **Null**: Intentional absence of value.
- **Undefined**: Variable declared but not assigned.

## Control Structures

### Conditional Statements

- **if** statement:

  ```javascript
  if (condition) {
    // code to execute
  }
  ```

- **else** statement:

  ```javascript
  if (condition) {
    // code to execute
  } else {
    // code to execute if condition is false
  }
  ```

- **else if** statement:
  ```javascript
  if (condition1) {
    // code
  } else if (condition2) {
    // code
  } else {
    // code
  }
  ```

### Switch Statement

```javascript
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
  // code
}
```

### Loops

- **for loop**:

  ```javascript
  for (let i = 0; i < 10; i++) {
    // code
  }
  ```

- **while loop**:

  ```javascript
  while (condition) {
    // code
  }
  ```

- **do...while loop**:
  ```javascript
  do {
    // code
  } while (condition);
  ```

## Functions

### Function Declaration

```javascript
function functionName(parameters) {
  // code
}
```

### Function Expression

```javascript
const functionName = function (parameters) {
  // code
};
```

### Arrow Function

```javascript
const functionName = (parameters) => {
  // code
};
```

## Objects and Arrays

### Creating an Object

```javascript
const objectName = {
  key1: value1,
  key2: value2,
  methodName: function () {
    // code
  },
};
```

### Accessing Object Properties

```javascript
objectName.key1; // Dot notation
objectName["key1"]; // Bracket notation
```

### Creating an Array

```javascript
const arrayName = [value1, value2, value3];
```

### Accessing Array Elements

```javascript
arrayName[0]; // First element
```

## Array Methods

- **push()**: Add an element to the end.
- **pop()**: Remove the last element.
- **shift()**: Remove the first element.
- **unshift()**: Add an element to the beginning.
- **map()**: Create a new array with results of calling a function on every element.
- **filter()**: Create a new array with elements that pass a test.
- **reduce()**: Execute a reducer function on each element.

## Promises

- **Creating a Promise**:

```javascript
const promise = new Promise((resolve, reject) => {
  // asynchronous code
});
```

- **Using Promises**:

```javascript
promise
  .then((result) => {
    // handle success
  })
  .catch((error) => {
    // handle error
  });
```

## ES6 Features

- **Template Literals**:

```javascript
const greeting = `Hello, ${name}!`;
```

- **Destructuring Assignment**:

```javascript
const { key1, key2 } = objectName;
const [first, second] = arrayName;
```

- **Spread Operator**:

```javascript
const newArray = [...array1, ...array2];
const newObject = { ...object1, ...object2 };
```

## Comments

- Single-line comment: `// This is a comment`
- Multi-line comment: `/* This is a comment */`
