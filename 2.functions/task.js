function getArrayParams(...arr) {
    if (arr.length === 0) {
        return {
            min: 0,
            max: 0,
            avg: 0
        }
    }
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const sum = arr.reduce((acc, currentValue) => acc + currentValue, 0);
    const avg = Number((sum / arr.length).toFixed(2));
    return {
        min,
        max,
        avg
    }
}

function summElementsWorker(...arr) {
    return arr.reduce((acc, currentValue) => acc + currentValue, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return max - min;
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
