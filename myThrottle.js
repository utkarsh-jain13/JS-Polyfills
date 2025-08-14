function myThrottle(cb, time) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= time) {
      lastCall = now;
      cb.apply(this, args);
    }
  };
}

function print(val) {
  console.log(`Printing: ${val} at ${Date.now()}`);
}

const throttledPrint = myThrottle(print, 1000);

let i = 0;
const interval = setInterval(() => {
  throttledPrint(i++);
  if (i > 10) clearInterval(interval);
}, 200);
