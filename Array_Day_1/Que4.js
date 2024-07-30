
let arr = [1,2,3,4,5,6,7,8,9]
let n = arr.length-1
const Reverse = () =>{
    for (let i = n; i > 0; i--) {
      console.log(arr[i]);
    }
}
let result = Reverse(arr);
console.log(result);