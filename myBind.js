function print(loc, des) {
  console.log(
    `Hey, ${this.name} | a great ${des}, your age is ${this.age}. You are from ${loc.addr}`
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

const res = print.bind(user, loc, "Frontend Eng");
res();

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Bind must be called on a function");
  }

  // Handle null/undefined as globalThis, else convert to object
  if (context === null || context === undefined) {
    context = globalThis;
  } else {
    context = Object(context);
  }

  const fnSymbol = Symbol("fn");
  const originalFn = this;

  return function (...callArgs) {
    context[fnSymbol] = originalFn;
    const result = context[fnSymbol](...args, ...callArgs);
    delete context[fnSymbol];
    return result;
  };
};

const myRes = print.myBind(user, loc, "Devops Eng");
myRes();
