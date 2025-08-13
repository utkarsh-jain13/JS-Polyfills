const arr = [2, 4, 6, 8, 10];

const arrSum = arr.reduce((prev, curr, i, fullArr) => {
  prev += curr;
  return prev;
}, 0);

console.log(`Reduce => ${arrSum} & original array => ${arr}`);

Array.prototype.myReduce = function (cb, ini) {
  // 1. Check null/undefined
  if (this == null) {
    throw new TypeError("Array.prototype.myReduce called on null or undefined");
  }

  // 2. Check cb is a function
  if (typeof cb !== "function") {
    throw new TypeError(cb + " is not a function");
  }

  let i = 0;
  let acc = ini;
  if (acc === undefined) {
    acc = this[0];
    i = 1;
  }
  for (; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

const myArrProd = arr.myReduce((prev, curr, i, fullArr) => {
  prev *= curr;
  return prev;
}, 1);

console.log(`My Reduce => ${myArrProd} & original array => ${arr}`);

const myArrMax = arr.myReduce((acc, val) => Math.max(acc, val));

console.log(`My Reduce Max => ${myArrMax} & original array => ${arr}`);
