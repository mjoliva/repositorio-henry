"use strict";

function BinarioADecimal(num) {
  const array = num.split('');
  let finalResult = 0;

  for (let i = 0; i < array.length; i++) {
    finalResult = finalResult + array[i] * Math.pow(2, array.length - 1 - i);
  } 
  return finalResult;
}

function DecimalABinario(num) {
  const array = [];
  while (num > 0) { 
    array.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return array.join('');
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
