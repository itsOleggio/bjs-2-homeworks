function getArrayParams(...arr) {
    const result = arr.reduce((acc, currentValue) => {
        acc.min = Math.min(acc.min, currentValue);
        acc.max = Math.max(acc.max, currentValue);
        acc.sum = acc.sum + currentValue;
        return acc;
    }, {min: arr[0], max: arr[0], sum: 0});

    let avg = Number((result.sum / arr.length).toFixed(2));

    return {
        min: result.min,
        max: result.max,
        avg: avg
    };
}

function summElementsWorker(...arr) {
    const result = arr.reduce((acc, currentValue) => {
        acc.sum = acc.sum + currentValue;
        return acc;
    }, {sum: 0});
    return result.sum;
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    const result = arr.reduce((acc, currentValue) => {
        acc.min = Math.min(acc.min, currentValue);
        acc.max = Math.max(acc.max, currentValue);
        return acc;
    }, {min: Infinity, max: -Infinity});
    return result.max - result.min;
}

function differenceEvenOddWorker(...arr) {
    const result = arr.reduce((acc, currentValue) => {
        if (currentValue % 2 === 0) {
            acc.sumEvenElement = acc.sumEvenElement + currentValue;
        } else {
            acc.sumOddElement = acc.sumOddElement + currentValue;
        }
        return acc;
    }, {
        sumEvenElement: 0,
        sumOddElement: 0
    });
    return result.sumEvenElement - result.sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    if (arr.length === 0) return 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
            countEvenElement++;
        }
    }
    return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (let i = 0; i < arrOfArr.length; i++) {
        const currentResult = func(...arrOfArr[i]);
        if (currentResult > maxWorkerResult) {
            maxWorkerResult = currentResult
        }
    }
    return maxWorkerResult;
}
