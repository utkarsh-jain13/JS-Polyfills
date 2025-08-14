function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed += 1;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    });

    if (promises.length === 0) {
      resolve(results);
    }
  });
}

// Example usage
const fetchData = myPromiseAll([
  new Promise((resolve) => setTimeout(() => resolve("Data 1"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("Data 2"), 2000)),
  new Promise((resolve) => setTimeout(() => resolve("Data 3"), 3000)),
]);

fetchData
  .then((data) => {
    console.log("All data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("One or more promises failed:", error);
  });
