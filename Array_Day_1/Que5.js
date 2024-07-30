let arr = [1, 2, 2, 3, 2, 2, 4, 5];
let target = 2;
const Occurrences = (arr, target)=> {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}


let result = Occurrences(arr,target)
 console.log(result);
