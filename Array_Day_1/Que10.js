let arr = [1, 2, 3, 5, 0]; 


let n = arr.length; 
let length_sum = (n * (n + 1)) / 2; 
let arrsum = 0;


for (let i = 0; i < arr.length; i++) {
    arrsum += arr[i];
}


let missingNumber = length_sum - arrsum;
console.log(missingNumber);
