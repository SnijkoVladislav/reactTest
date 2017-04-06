const result = (start, end, count) => {
  const data = {};
  const arr = data.arr = _numList(start, end, count);
  data.averageValue = _avarage(arr);
  const sortedArray = arr.sort((a, b) => a - b);
  const sumSquares = _summary(_squares(sortedArray, data.averageValue));
  data.meanDeviation = _meanDeviation(sortedArray, count, data.averageValue);
  data.median = _median(sortedArray, count);
  data.statistic = _moda(sortedArray, count);
  return data;
};

const _meanDeviation = (arr, count, sr) => {
    let sum = 0;
    for (let i = 0, temp; i < count; i++) {
        temp = arr[i]-sr;
        sum += temp * temp;
    }
    return Math.sqrt(sum/count);
}

const _numList = (min, max, count) => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return arr;
};

const _summary = (arr) => {
  let s = 0;
  for (let i = 0, l = arr.length; i < l; i++) {
    s += arr[i];
  }
  return s;
};

const _avarage = (arr) => _summary(arr) / arr.length;

const _squares = (arr, averageValue) => {
  return arr.map(item => {
    var sum = item - averageValue;
    return sum * sum;
  });
};

const _median = (arr, count) => count % 2 === 0
    ? ((arr[count / 2]) + (arr[(count - 2) / 2])) / 2
    : arr[(count - 1) / 2];

const _moda = (arr, count) => {
  let curentNumber = arr[0];
  let countOfNumber = 0;
  let finallyObject = {};
  let maxCount = 1;
  const res = []
  for (let i = 0; i <= count; i++) {
    if (arr[i] === curentNumber) {
      countOfNumber++;
    } else {
      if (countOfNumber > maxCount) {
        maxCount = countOfNumber;
      }
      finallyObject[arr[i - 1]] = countOfNumber;
      curentNumber = arr[i];
      countOfNumber = 1;
    }
  }
  for (let i = 0, props = Object.keys(finallyObject), l = props.length; i < l; i++) {
    if (finallyObject[props[i]] >= maxCount) {
      res.push(props[i]);
    };
  }
  return res;
};

export {result};
