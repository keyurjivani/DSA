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


// let str = "dsanode";
// let string = [...str]
// console.log(string);

// for(let i = 0; i <str.length; i++)
// {
//     let count = 0;
//     for(let j = 0; j < str.length; j++){
//         if(str[i]==str[j]){
//             count++;
//         }
//     }
//     console.log(str[i], count)
// }



// class stack{
//     constructor(){
//         this.stack = [];
//         this.index = -1;
//     }

//     push(value){
//         this.stack[++this.index] = value
//     }

//     pop(){
//         if(this.index > -1){
//             return this.stack[this.index--] = ''
//         }else{
//             return 'Stack is empty'
//         }
//     }

//     peak(){
//         return this.stack[this.index];
//     }

//     isempty(){
//         if(this.index == -1){
//             return "stk is empty";
//         }else{
//             return "stk not empty";
//         }
//     }


// }

// let stk = new stack()
// stk.push(10)
// stk.push(20)
// stk.push(30)
// stk.push(40)
// stk.pop()
// console.log(stk.peak());

// console.log(stk.isempty());

// console.log(stk);




// const FindValue = (nums, target) => {
//     let arr = [];
//     let num_length = nums.length;
    
//     let middle = Math.floor(num_length / 2);
    
//     for (let i = middle; i < num_length; i++) {
//         if (nums[i] == target) {
//             arr.push(i); 
//         }
//     }
    
//     if (arr.length === 0) {
//         return [-1, -1];
//     }
    
//     return arr; 
// }

// let nums = [5, 7, 7, 8, 8, 10];
// let target = 9;

// console.log(FindValue(nums, target)); 


nums = [1,2,1,3,5,6,4]
const findPeakElement = (nums) =>{
    
    let swap = 0
    for(let i = 0 ; i < nums.length; i++) {
        if(nums[i] < nums[i+1]) {
            swap = i+1
        }
    }
    return swap;
};
console.log(findPeakElement(nums));
