const sumArray = (arr, i) => {
    if (i >= arr.length) {
        return 0;
    }

    return arr[i] + sumArray(arr, i + 1);
}

let arr = [1, 2, 3, 4, 5];
let i = 0;
console.log(sumArray(arr, i)); 
