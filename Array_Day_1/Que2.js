let arr = [1,2,5,3,4]
const FindMax = (arr) =>{
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
let result = FindMax(arr);
console.log(result);