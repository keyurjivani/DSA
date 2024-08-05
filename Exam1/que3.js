const sum = (arr,target)=>{
    let i = 0 ; 
    let j =arr.length - 1;

    while(i < j){
       
        if(arr[i] + arr[j] === target){
            return [arr[i],arr[j]];
        }
        else if(arr[i] + arr[j] > target){
            j--;
        }
        else{
            i++;
        }
    }
    return [arr[i-1],arr[j]];
}
let arr = [1, 3, 4, 7, 10];
let target = 15;
let result = sum(arr,target);
console.log(result);


