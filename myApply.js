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

print.apply(user, [loc, "SDE"]);

Function.prototype.myApply = function (context, args) {
  context = context || globalThis;

  const fnSymbol = Symbol("fn");

  context[fnSymbol] = this;

  const res = context[fnSymbol](...args);

  delete context[fnSymbol];

  return res;
};

print.myApply(user, [loc, "SDE3"]);
