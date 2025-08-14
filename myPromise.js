const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // change to false to test rejection
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error: Failed to fetch data.");
    }
  }, 2000);
});

fetchData
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// myPromise

function MyPromise(executor) {
  let onResolve,
    onReject,
    isFulfilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onResolve === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (cb) {
    onResolve = cb;
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (cb) {
    onReject = cb;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const myData = new MyPromise((resolve, reject) => {
  // reject("Error: Failed to fetch data.");
  setTimeout(() => {
    const success = false; // change to false to test rejection
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error: Failed to fetch data.");
    }
  }, 2000);
});

myData
  .then((data) => {
    console.log("Data: ", data);
  })
  .catch((err) => {
    console.error("Err: ", err);
  });
