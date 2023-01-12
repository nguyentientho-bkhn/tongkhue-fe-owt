
function ex1(arr) {
      const result = arr.map((value, index, array) => {
        //   console.log(value, 'item');
        //   console.log(index, 'number');
        //   console.log(index, 'array')
          return value % 2;
      })
      return result;
  }
  
  console.log(ex1([4,2,5,6,2,7]));