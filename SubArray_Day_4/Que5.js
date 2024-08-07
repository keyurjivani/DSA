const minSizeSubarraySum = (arr, s) =>{
    let sum = 0;
    let start = 0;
    let minLength = arr.length;

    

    for(let i = 0; i < minLength; i++){
        sum += arr[i];
        while (sum >= s) {
            // Calculate the current length of the window
            let currentLength = i - start + 1;
            
            // Update minLength manually
            if (currentLength < minLength) {
                minLength = currentLength;
            }
            
            // Move the start of the window to the right
            sum -= arr[start];
            start++;
        }
    }
 
    return minLength === arr.length? 0 : minLength;  // return 0 if no subarray sum equals to s.  else return min length of subarray.

}

let arr = [2, 3, 1, 2, 4, 3];

let s = 7;

console.log(minSizeSubarraySum(arr, s));