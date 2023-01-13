console.log(arrUseEvery([4, 2, 5, 6, 2, 7]));

/** ex1 temp*/
function temp(arr) {
  const result = arr.map((value, index, array) => {
    //   console.log(value, 'item');
    //   console.log(index, 'number');
    //   console.log(index, 'array')
    return value % 2;
  })
  return result;
}

/** ex2: arr not use filter */ 
function oddNumbersNotFilter(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      result.push(arr[i]);
    }
  }
  return result;
}

/** ex3: arr use Filter */
function oddNumbersFilter(arr) {
  const result = arr.filter(item => {
    return item % 2 === 1;
  });
  return result;
}

//** ex4: sum use reduce */
function sumReduce(arr) {
  let sum = arr.reduce(function (total, element) {
    return total + element;
  }, 0);

  return sum;
}

//** ex5: array use find first element */
function arrUseFind(arr) {
  return arr.find(e => e > 5);
}

//* ex6: array use find index */
function arrUseFindFirstIndex(arr) {
  return arr.findIndex(e => e > 5);
}

//* ex7:  array use check Condition some */
function arrUseSome(arr) {
  return arr.some(e => e > 5);
}

//* ex8:  array use check Condition every */
function arrUseEvery(arr) {
  return arr.every(e => e > 1);
}

