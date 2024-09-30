let nums = [3, 0, 1];

let n = nums.length;


const FindMissing = (nums) =>{
let arr = nums.sort()
console.log(arr);

for(let i = 0; i < n; i++){
    if(i != nums[i]){
        console.log(i);
        
    }
}
}

FindMissing(nums);