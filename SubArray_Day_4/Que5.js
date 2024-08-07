const minSizeSubarraySum = (arr, target) => {
    let minLength = Infinity;
    let start = 0;
    let sum = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];
        
        while (sum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            sum -= arr[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

let arr = [1, 2, 3, 4, 5];
let target = 15;
let result = minSizeSubarraySum(arr, target);
console.log(result); // Output: 0
