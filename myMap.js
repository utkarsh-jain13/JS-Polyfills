const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((a, index, fullArr) => a ** 2);

console.log(`Map => ${newArr} & original array => ${arr}`);

Array.prototype.myMap = function (cb) {
  // 1. Check null/undefined
  if (this == null) {
    throw new TypeError("Array.prototype.myReduce called on null or undefined");
  }

  // 2. Check cb is a function
  if (typeof cb !== "function") {
    throw new TypeError(cb + " is not a function");
  }

  const temp = [];
  for (let i = 0; i < this.length; i++) {
    let val = cb(this[i], i, this);
    temp.push(val);
  }
  return temp;
};

const myNewArr = arr.myMap((a, index, fullArr) => {
  console.log(a, index, fullArr);
  return a * 2;
});

console.log(`Map => ${myNewArr} & original array => ${arr}`);
