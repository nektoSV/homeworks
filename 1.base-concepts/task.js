"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;
  if(D < 0) {
   return arr; 
  } else if(D === 0) {
    let X = -b / (2 * a);
    return  arr = [X];
  } else if(D > 0) {
    let X1 = (-b + Math.sqrt(D) ) / (2 * a);
    let X2 = (-b - Math.sqrt(D) ) / (2 * a);
    return  arr = [X1, X2];
  }
  
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = (percent / 100) / 12;
  const S = (amount - contribution);
  const payMonth = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  const totalPayment = (payMonth * countMonths).toFixed(2);
  return Number(totalPayment);
}



