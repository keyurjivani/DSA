// Quetion : 1
// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

// const FindIndex = (nums, target) =>{
//     let i = 0;
//     let j = nums.length - 1;
//     while (i<j) {
//         if(nums[i] + nums[j] === target){
//             return [i,j];
//             i++;
//             j--;
//         }
//         else if(nums[i] + nums[j] < target){
//             //depend for condition
//             j--;
//         }else{
//             i++;
//         }
//     }
// }
// let nums = [2,7,11,15];
// let target = 9;
// let result = FindIndex(nums, target)
// console.log(result);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Quetion : 2
// // Input: list1 = [1,2,4], list2 = [1,3,4]
// // Output: [1,1,2,3,4,4]

// const Ascending_Array_Merge = (list1, list2) =>{  
//     let i = 0;
//     let j = 0;
//     let m = list1.length;
//     let n = list2.length;
    
//     while(i < m && j < n){
//         if(list1[i] < list2[j]){
//             result.push(list1[i]);
//             i++;
//         }else if(list1[i] > list2[j]){
//             result.push(list2[j]);
//             j++;
//         }else {
//             result.push(list1[i]);
//             result.push(list2[j])
//             i++;
//             j++;
//         }
//     }
    
//     while(i < m){
//         result.push(list1[i]);
//         i++;
//     }
//     while(j < n){
//         result.push(list2[j]);
//         j++;
//     }
// }

// let list1  = [1,2,4,5,5];
// let list2 = [1,3,4,6];
// let result = [];
// Ascending_Array_Merge(list1, list2)
// console.log(result);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Quetion : 3








