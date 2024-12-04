function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result will be 8
console.log(result); // Output: 8

result = subtract(10, 5); // result will be 5
console.log(result); // Output: 5

// This is a type error, but it won't be caught at compile time
result = add("5", 3); // This line causes a runtime error
console.log(result); // Output: NaN