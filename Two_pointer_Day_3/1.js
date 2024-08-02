let array = [1,2,3,4,5];
let target = 6;

let i = 0;
let j = array.length-1;
let pair = [];
while(i < j){
    if(array[i] + array[j] < target){
        pair.push(array[i], array[j]);
        i++;
    }
    else{
        j--;
    }
}
console.log(pair);


