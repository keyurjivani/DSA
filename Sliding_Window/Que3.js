// 3. Minimum Sum of Contiguous Subarray of Size k:

// Question:
// Write a function that takes an array of integers and a number k. Using the sliding window technique,

// find the minimum sum of any contiguous subarray of size k.
// Return the minimum sum found. If k is greater than the length of the array, return 0.

// Function Signature:
// function minSumSubarray(arr, k) {
// // Your code here
// }

// Input:
// An array of integers arr and an integer k.

// Output:
// Integer representing the minimum sum of a contiguous subarray of size k.

// Constraints:
// - The input array will have at least one element.
// - k will be a positive integer.

// Sample Input 1:
// arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0], k = 3

// Sample Output 1:
// 3 (for the subarray [1, 1, 1])


let  arr = [3, 7, 1, 8, 6, 4];
let k = 3;

for(let i = 0; i <= arr.length - k ; i++){
    let subarray = [];
    for(let j = i; j < i + k; j++){
        subarray.push(arr[j]);
        if(subarray.length === k) console.log(subarray);
        
    }
}