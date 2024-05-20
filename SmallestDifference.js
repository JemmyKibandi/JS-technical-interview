const smallestDifference = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];

  while (i < arr1.length && j < arr2.length) {
    let firstNum = arr1[i];
    let secondNum = arr2[j];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      i++;
    } else if (firstNum > secondNum) {
      current = firstNum - secondNum;
      j++;
    } else {
      return [firstNum, secondNum];
    }

    if (current < smallest) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
};
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [12, 13, 14, 15, 16, 17];

console.log(smallestDifference(arr1, arr2));
