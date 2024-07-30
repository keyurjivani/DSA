let arr1 = [1,2,3];
let arr2 = [4,5,6];
let MergeArr = [];

let n =arr1.length;
let m = arr2.length;
let i = 0;
let j = 0;
while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
        MergeArr.push(arr1[i]);
        i++;
    } else {
        MergeArr.push(arr2[j]);
        j++;
    }
}
while (i < n) {
    MergeArr.push(arr1[i]);
    i++;
}
while (j<m) {
    MergeArr.push(arr2[j]);
    j++;
}
console.log(MergeArr)