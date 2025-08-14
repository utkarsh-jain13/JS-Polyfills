function myDebounce(cb, time) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      const context = this;
      // Using apply to maintain the context and pass arguments
      cb.apply(context, args);
    }, time);
  };
}

function print(val) {
  console.log(`Printing: ${val}`);
}

const myData = myDebounce(print, 1000);

let i = 0;

for (; i < 10; i++) {
  myData(i);
}

setTimeout(() => {
  for (; i < 15; i++) {
    myData(i);
  }
}, 1500);
