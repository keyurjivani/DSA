
const RemoveZero = (arr) => {
    
   
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === 0){
                arr.splice(i, 1);
                i--;
            }
        }
    return arr;
}



let arr = [0, 1, 0, 3, 12];
console.log(RemoveZero(arr))