const FindDuplicate = (num) =>{
    let i =0;
    let j = num.length-1;
    while(i < j) {
        if(num[i] === num[j]){
            console.log(num[i]);
            
            return num[i];
        }else{
            return -1;
        }
    }
}

// let nums = [1, 2, 3, 2, 1]
let nums = [4, 5, 6, 7, 8]
console.log(FindDuplicate(nums));
