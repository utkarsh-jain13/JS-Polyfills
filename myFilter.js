const arr = [9, 3, 6, 1, 3, 2, 4, 2];

const filteredArr = arr.filter((a, i, fullArr) => {
  if (a == 3) return a;
});

console.log(`Filter => ${filteredArr?.toString()} & original array => ${arr}`);

Array.prototype.myFilter = function (cb) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    let val = cb(this[i], i, this);
    if (val) temp.push(val);
  }
  return temp;
};

const myFilteredArr = arr.myFilter((a, i, fullArr) => {
  if (a == 4) return a;
});

console.log(
  `My Filter => ${myFilteredArr?.toString()}  & original array => ${arr}`
);
