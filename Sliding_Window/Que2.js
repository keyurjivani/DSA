// 2. Maximum Product of Contiguous Subarray of Size k:

// Question:
// Write a function that takes an array of positive integers and a number k. Using the sliding window
// technique, find the maximum product of any contiguous subarray of size k.
// Return the maximum product found. If k is greater than the length of the array, return 0.

// Function Signature:
// function maxProductSubarray(arr, k) {
// // Your code here
// }

// Input:

// An array of positive integers arr and an integer k.

// Output:
// Integer representing the maximum product of a contiguous subarray of size k.

// Constraints:
// - All elements in the input array will be positive integers.
// - k will be a positive integer.

// Sample Input 1:
// arr = [2, 5, 3, 1, 8, 9, 2], k = 2

// Sample Output 1:
// 72 (for the subarray [8, 9])


let arr = [2, 5, 3, 1, 8, 9, 2];
let k = 2
const Multiplication = (arr) =>{  
let Mul = 1
    for(let i = 0; i < k; i++) Mul *= arr[i]; 
    return Mul;
}
let max =0
for(let i = 0; i < arr.length; i++){
    let subarray = [];
    for(let j = i; j < arr.length; j++){
        subarray.push(arr[j]);
        if(subarray.length === k) console.log(subarray, Multiplication(subarray)); 
        if(max < Multiplication(subarray)) max = Multiplication(subarray);
    }
}
console.log(max);


// Sliding Array

let maxi = 0
for(let i = 0; i <= arr.length - k; i++){
    let product = 1
    for(let j = i; j < i + k; j++){
        product *= arr[j]
    }
    maxi = Math.max(maxi, product)
}
console.log(maxi);
