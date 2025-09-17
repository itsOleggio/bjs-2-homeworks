"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    let discr = b * b - 4 * a * c;

    if (discr > 0) {
        arr.push(((-b) + Math.sqrt(discr)) / (2 * a));
        arr.push(((-b) - Math.sqrt(discr)) / (2 * a));
    } else if (discr === 0) {
        arr.push((-b) / (2 * a));
    } else if (discr < 0) {
        arr.push();
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let P = percent / 100 / 12;
    let S = amount - contribution;
    if (S <= 0) return 0;

    let mouthPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
    let total = mouthPayment * countMonths;
    return Number(total.toFixed(2));
}