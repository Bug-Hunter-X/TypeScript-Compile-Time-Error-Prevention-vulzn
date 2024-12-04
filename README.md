# TypeScript Type Error Not Caught at Compile Time

This repository demonstrates a common TypeScript error where a type error is not caught during compilation but results in a runtime error.  The issue arises when attempting to add a string and a number, resulting in a `NaN` value.  The solution involves implementing stricter type checking to prevent this from occurring.

## Bug

The `bug.ts` file contains the erroneous code where a string is added to a number.  TypeScript doesn't flag this as an error during compilation.

## Solution

The `bugSolution.ts` file offers a corrected version, using type guards to ensure only valid types are passed into the `add` function. This approach prevents the runtime error and enhances type safety.  This example demonstrates the importance of robust type checking in preventing unexpected behaviour during runtime.