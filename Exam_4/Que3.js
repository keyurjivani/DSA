let nums = [2, 1, 5, 1, 3, 2];
let k = 3;
let crsum = 0;
let min = 0;
const sum = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

for (let i = 0; i < nums.length; i++) {
  let subArray = [];
  for (let j = i; j < nums.length; j++) {
    subArray.push(nums[j]);
    if (subArray.length === k) {
      console.log(subArray, sum(subArray))
    }
  }
}
