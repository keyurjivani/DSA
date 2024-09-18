function maxProduct(arr) {
    if (arr.length < 2) {
      console.log("Not Valid")
    }
    let max1 = 0, max2 = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max1) {
        max2 = max1; 
        max1 = arr[i]; 
      } else if (arr[i] > max2) {
        max2 = arr[i]; 
      }
    }
  
    return max1 * max2;
  }
  
  console.log(maxProduct([3, 5, 1, 7, 9]));  // Output: 63
  