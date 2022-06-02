let arr = [12, 9, 1, 5, 11, 5];
function Task2(arr) {
  if (arr.length < 3) {
    console.log("Throwing an error");
  } else {
    let highestSum = 0;
    let bestResult = [];
    while (arr.length >= 3) {
      let sequence = [];
      let sum = 0;
      for (let i = 0; i < 3; i++) {
        sequence.push(arr[i]);
        sum += Number(arr[i]);
      }
      if (highestSum <= sum) {
        highestSum = sum;
        bestResult = sequence;
      }
      arr.shift();
    }

    console.log(`{sequence: [${bestResult}], sum: ${highestSum}}`);
  }
}

Task2(arr);
