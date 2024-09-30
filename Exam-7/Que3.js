nums = [1,2,3,1]
const findPeakElement = (nums) =>{

    let n = nums.length;
    let mid = Math.floor(n / 2);
    // console.log(nums[mid]);
    

    for(let i = mid ; i< n ; i++ ){
        if(nums[i] > nums[i+1]){
            return i;
        }
    }
    
    // let swap = 0
    // for(let i = 0 ; i < nums.length; i++) {
    //     if(nums[i] < nums[i+1]) {
    //         swap = i+1
    //     }
    // }
    // return swap;
};
console.log(findPeakElement(nums));


