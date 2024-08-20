const longestSubarrayWithSumK=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

let arr=[-2, -1, 2, 1]
let k=1;
let max=0;

for(let i=0;i<arr.length;i++){
    let sub_array=[];
    for(let j=i;j<arr.length;j++){
        sub_array.push(arr[j]);
        let crn_sum=longestSubarrayWithSumK(sub_array);

        if(crn_sum==k){
            let crnlen=sub_array.length;
            if(crnlen>max){
                max=crnlen;
            }
        }

    }
}

console.log(max);