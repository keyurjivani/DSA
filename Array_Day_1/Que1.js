let sum = 0;
const FindSum = (arr) =>{
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
let arr = [1,2,3,4,5];
let result = FindSum(arr);
console.log(result);
