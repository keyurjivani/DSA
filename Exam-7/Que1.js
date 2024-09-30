const FindValue = (nums, target) => {
    let arr = [];
    let num_length = nums.length;
    
    let middle = Math.floor(num_length / 2);
    
    for (let i = middle; i < num_length; i++) {
        if (nums[i] == target) {
            arr.push(i); 
        }
    }
    
    if (arr.length === 0) {
        return [-1, -1];
    }
    
    return arr; 
}

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;

console.log(FindValue(nums, target)); 