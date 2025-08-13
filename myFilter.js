const arr = [9, 3, 6, 1, 3, 2, 4, 2];

const filteredArr = arr.filter((a, i, fullArr) => {
  if (a == 3) return a;
});

console.log(`Filter => ${filteredArr?.toString()} & original array => ${arr}`);

Array.prototype.myFilter = function (cb) {
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
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const myFilteredArr = arr.myFilter((a, i, fullArr) => {
  if (a == 4) return a;
});

console.log(
  `My Filter => ${myFilteredArr?.toString()}  & original array => ${arr}`
);
