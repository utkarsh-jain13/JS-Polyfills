function print(loc, desig) {
  console.log(
    `Hey: ${this.name} | a great ${desig}, your age is: ${this.age}. You are from: ${loc.addr}`
  );
}

const user = {
  name: "Utkarsh",
  age: 25,
};

const loc = {
  addr: "Indore",
  pin: 453112,
};

print.call(user, loc, "Software Engineer");

// --------------------------
// Polyfill for Function.call
// --------------------------

// Here's how the `call` method can be polyfilled manually:

Function.prototype.myCall = function (context, ...args) {
  // Step 1: Handle null or undefined context — default to global object
  context = context || globalThis;

  // Step 2: Create a unique property on the context to avoid overwriting any existing keys
  const fnSymbol = Symbol("fn");

  // Step 3: Assign the function (`this`) to the context
  context[fnSymbol] = this;

  // Step 4: Call the function with the provided arguments
  const result = context[fnSymbol](...args);

  // Step 5: Remove the temporary function property
  delete context[fnSymbol];

  // Step 6: Return the result of the function call
  return result;
};

// --------------------------
// Example usage of myCall:
// --------------------------

console.log("Using myCall Polyfill:");
// Now using our custom `myCall` polyfill:
print.myCall(user, loc, "SDE2");
// Output: Utkarsh is 25 years old, from Indore, 453112.
// --------------------------
// This demonstrates how `myCall` works similarly to the native `call` method, allowing us to set the `this` context and pass arguments.
