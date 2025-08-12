const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((a, index, fullArr) => a ** 2);

console.log(`Map => ${newArr} & original array => ${arr}`);

Array.prototype.myMap = function (cb) {
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
