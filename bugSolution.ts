function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(arg: any): arg is number {
    return typeof arg === 'number';
}

function addSafe(a: any, b: any): number {
    if (isNumber(a) && isNumber(b)) {
        return add(a, b);
    } else {
        throw new Error("Invalid input types: Both arguments must be numbers.");
    }
}

let result = addSafe(5, 3); // result will be 8
console.log(result); // Output: 8

result = addSafe(10, 5); // result will be 5
console.log(result); // Output: 5

try {
    result = addSafe("5", 3); // This line now throws an error
    console.log(result); 
} catch (error) {
    console.error(error.message); //Output: Invalid input types: Both arguments must be numbers.
}
