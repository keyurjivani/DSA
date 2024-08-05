let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let arr3 = [];
let i = 0;
let j = 0;
let n = arr1.length;
let m = arr2.length;
while(i<n && j < m) {
    if(arr1[i] < arr2[j]) {
        arr3.push(arr1[i]);
        i++;
    } else {
        arr3.push(arr2[j]);
        j++;
    }
}
while(i<n){
    arr3.push(arr1[i]);
    i++;
}
while(j<m) {
    arr3.push(arr2[j]);
    j++;
}
console.log(arr3);

