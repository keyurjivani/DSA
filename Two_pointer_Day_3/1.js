
// let arr = [1,2,3,4,5];
// const findSum = () =>{
//   let sum = arr.reduce((total,arr)=>total+arr)
//   return sum;
// }
// let maxsum = 0;
// for(let i=0;i<arr.length;i++){
//   let subarray = [];
//   for(let j=i;j<arr.length;j++){
//     subarray.push(arr[j]);
//     console.log(subarray);
    
//     let currsum = findSum(subarray);
    
//     if(maxsum < currsum){
//       maxsum = currsum;
//     }
//   }
// }
// console.log(maxsum);




// function findPairsWithSum(arr, targetSum) {
//   const pairs = [];

//   for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//           if (arr[i] + arr[j] === targetSum) {
//               pairs.push([arr[i], arr[j]]);
//           }
//       }
//   }

//   return pairs;
// }

// // Example usage:
// const arr = [2, 4, 3, 5, 7, 8, 1, 9];
// const targetSum = 10;
// const result = findPairsWithSum(arr, targetSum);
// console.log(result);









// const isPalindrome = (str) => {
//     let i = 0;
//     let j = str.length - 1;
//     while (i < j) {
//       if (str[i] !== str[j]) {
//         return false;
//       }
//       i++;
//       j--;
//     }
//     return true;
//   }
  
//   const findLargestPalindrome = (str) =>{
//     let maxPalindrome = "";
  
//     for (let i = 0; i < str.length; i++) {
//       for (let j = i + 1; j <= str.length; j++) {
//         const sub = str.slice(i, j);
        
//         if (isPalindrome(sub) && sub.length > maxPalindrome.length) {
//           maxPalindrome = sub;
//         }
//       }
//     }
  
//     return maxPalindrome;
//   }
  
//   const str = "keyuruyekjivani";
//   const largestPalindrome = findLargestPalindrome(str);
//   console.log(largestPalindrome); 