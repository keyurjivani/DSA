// 1. Maximum Sum of Contiguous Subarray of Size k:

// Question:
// Write a function that takes an array of integers and a number k. Using the sliding window technique,
// find the maximum sum of any contiguous subarray of size k.
// Return the maximum sum found. If k is greater than the length of the array, return 0.

// Function Signature:
// function maxSumSubarray(arr, k) {
// // Your code here
// }

// Input:
// An array of integers arr and an integer k.

// Output:
// Integer representing the maximum sum of a contiguous subarray of size k.

// Constraints:
// - The input array will have at least one element.
// - k will be a positive integer.

// Sample Input 1:
// arr = [1, 3, 2, 6, -1, 4, 1, 8, 2], k = 3

// Sample Output 1:
// 13 (for the subarray [4, 1, 8])


//Use To SubArray
let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let k = 3
const Addition = (arr) =>{  
let sum = 0
    for(let i = 0; i < k; i++) sum += arr[i]; 
    return sum;
}
let max =0
for(let i = 0; i < arr.length; i++){
    let subarray = [];
    for(let j = i; j < arr.length; j++){
        subarray.push(arr[j]);
        if(subarray.length === k) console.log(subarray, Addition(subarray)); 
        if(max < Addition(subarray)) max = Addition(subarray);
    }
}
console.log(max);

// Sliding Array
let crsum = 0;
let maxsum = 0
for(let i = 0; i < k;i++) {
    crsum += arr[i];
}
for(let i = k; i < arr.length;i++) {
    crsum += arr[i] - arr[i-k];
    if(maxsum < crsum) maxsum = crsum;
}
console.log(maxsum);

