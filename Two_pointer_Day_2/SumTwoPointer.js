const Sum = (arr,target) =>{
    for(let i = 0; i < arr.length-1;i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return true;
            }
        }
    }
    return false;  
}

let arr = [1, 2, 3, 4, 5];
let target = 9;
console.log(Sum(arr, target));