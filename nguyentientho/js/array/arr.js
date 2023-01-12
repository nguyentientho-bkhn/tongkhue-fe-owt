console.log(oddNumbersFilter([4, 2, 5, 6, 2, 7]));

/** ex1 */
function temp(arr) {
  const result = arr.map((value, index, array) => {
    //   console.log(value, 'item');
    //   console.log(index, 'number');
    //   console.log(index, 'array')
    return value % 2;
  })
  return result;
}

/** ex2: oddNumbersNotFilter */ 
function oddNumbersNotFilter(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      result.push(arr[i]);
    }
  }
  return result;
}

/** ex3 oddNumbersFilter */
function oddNumbersFilter(arr) {
  const result = arr.filter(item => {
    return item % 2 === 1;
  });
  return result;
}