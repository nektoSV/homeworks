function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const avg = Number((arr.reduce((acc, curr) => acc + curr, 0) / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0) 

  return sum;
}

function differenceMaxMinWorker(...arr) {
 if(arr.length === 0) {
  return 0;
 }
  const max = Math.max(...arr);
  const min = Math.min( ...arr);
  
  return max - min;

}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;
for(let i = 0; i < arr.length; i += 1) {
  if(arr[i] % 2 === 0) {
    sumEvenElement += arr[i];
  }else {
    sumOddElement += arr[i];
  }
}
return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
   }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
}
return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for(let i = 0; i < arrOfArr.length; i += 1) {
  let result = func(...arrOfArr[i]);
  if(result > maxWorkerResult) {
    maxWorkerResult = result;
  }
}
return maxWorkerResult;
}
