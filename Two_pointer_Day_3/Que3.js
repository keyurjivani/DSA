let array = [1, 2, 3, 4, 5];
let target = 4;
let i = 0;
let j = array.length;
let a = [];
while (i < j) {
    if(array[i] < target) {
        a.push(array[i]);
        i++;
    }else{
        j--;
    }

}
let max = 0


for (let i = 0; i < a.length; i++){
    if(a[i] > max){
        max = a[i];
    }
}
console.log(max);

