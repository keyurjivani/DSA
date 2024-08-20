let arr=[-2,1,-3,4,-1,2,1,-5,4];
let max=arr[0];
let curr=arr[0];

for(let i=1;i<arr.length;i++){
    curr += arr[i];
    if(curr > max){
        max=curr;
    }

    if(curr < 0){
        curr=0;
    }
}

console.log(max_sum);