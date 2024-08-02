const Piar = (arr,target) => {
    let i = 0;
    let j = arr.length - 1;

    
    while (i < j) {
        if (arr[i] + arr[j] === target) {
            i++;
            return [arr[i], arr[j]];  
        } else if (arr[i] + arr[j] < target) {
            
            i++;
            return [arr[i], arr[j]];
        } else {
            j--;
        }
    }

    return 'No pair found'; 
    
}

let arr = [1,2,3,4,5];
let target = 6;
let result = Piar(arr, target)
console.log(result);
