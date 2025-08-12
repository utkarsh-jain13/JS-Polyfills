const arr = [2, 4, 6, 8, 10];

const arrSum = arr.reduce((prev, curr, i, fullArr) => {
  prev += curr;
  return prev;
}, 0);

console.log(`Reduce => ${arrSum} & original array => ${arr}`);

Array.prototype.myReduce = function (cb, ini) {
  for (let i = 0; i < this.length; i++) {
    ini = cb(ini, this[i], i, this);
  }
  return ini;
};

const myArrProd = arr.myReduce((prev, curr, i, fullArr) => {
  prev *= curr;
  return prev;
}, 1);

console.log(`My Reduce => ${myArrSum} & original array => ${arr}`);
