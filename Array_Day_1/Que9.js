let arr = [1,2,3,4,5];
// let arr1 = [1,2,3,4,6,5];

const Check_Sort = ()=>{
    for (let i=0; i<arr.length;i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(Check_Sort()); // Output: true