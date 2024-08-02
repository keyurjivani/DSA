let nums1_1 = [1, 2, 3, 0, 0, 0];
let nums2_1 = [2, 5, 6];
let m1 = 3;
let n1 = 3;
let MergeArray = [];
let i = 0;
let j = 0;

while (i < m1 && j < n1) {
    if(nums1_1[i] < nums2_1[j]){
        MergeArray.push(nums1_1[i]);
        i++;
    }else{
        MergeArray.push(nums2_1[j]);
        j++;
    }
}
while(i<m1){
    MergeArray.push(nums1_1[i]);
    i++;
}
while(j<n1){
    MergeArray.push(nums2_1[j]);
    j++;
}
console.log(MergeArray);


