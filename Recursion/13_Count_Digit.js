const Count_Of_Digit = (arr, n, target) => {
    if (n === 0) {
        return 0;
    }
    let count = arr[n - 1] === target ? 1 : 0;
    return count + Count_Of_Digit(arr, n - 1, target);
}
let arr = [1, 2, 2, 3, 2];
let target = 2;
let n = arr.length;
console.log(Count_Of_Digit(arr, n, target));3
