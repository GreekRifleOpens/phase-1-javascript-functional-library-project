const inputDefiner = (collection) => {
  return collection instanceof Array
    ? collection.slice()
    : Object.values(collection);
};

const myEach = (collection, callback) => {
  const newCollection = inputDefiner(collection);

  for (let idx = 0; idx < newCollection.length; idx++) {
    callback(newCollection[idx]);
  }

  return collection;
};

const myMap = (collection, callback) => {
  const newCollection = inputDefiner(collection);

  const newArr = [];

  for (let idx = 0; idx < newCollection.length; idx++) {
    newArr.push(callback(newCollection[idx]));
  }

  return newArr;
};

const myReduce = (collection, callback, acc) => {
  let newCollection = inputDefiner(collection);

  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }

  const len = newCollection.length;

  for (let i = 0; i < len; i++) {
    acc = callback(acc, newCollection[i], newCollection);
  }
  return acc;
};

const myFind = (collection, predicte) => {
  let newCollection = inputDefiner(collection);

  for (let idx = 0; idx < newCollection.length; idx++) {
    if (predicte(newCollection[idx])) return newCollection[idx];
  }

  return undefined;
};

const myFilter = (collection, predicte) => {
  let newCollection = inputDefiner(collection);

  const newArr = [];

  for (let idx = 0; idx < newCollection.length; idx++) {
    if (predicte(newCollection[idx])) newArr.push(newCollection[idx]);
  }
  return newArr;
};

const mySize = (collection) => {
  let newCollection = inputDefiner(collection);
  return newCollection.length;
};

const myFirst = (arr, stop = false) => {
  return stop ? arr.slice(0, stop) : arr[0];
};

const myLast = (arr, start = false) => {
  return start
    ? arr.slice(arr.length - start, arr.length)
    : arr[arr.length - 1];
};

const mySortBy = (arr, callback) => {
  const newArr = [...arr];
  return newArr.sort(function (a, b) {
    if (callback(a) > callback(b)) {
      return 1;
    } else if (callback(b) > callback(a)) {
      returm - 1;
    } else {
      return 0;
    }
  });
};

const myKeys = (object) => {
  const keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
};

const myValues = (object) => {
  const values = [];
  for (let value in object) {
    values.push(object[value]);
  }
  return values;
};
