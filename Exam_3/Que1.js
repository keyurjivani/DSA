const Chk_Char = (str1,str2) =>{
    let arr1 = [...str1]
    arr1.sort();

    let arr2 = [...str2]
    arr2.sort();

    if(arr1.length !== arr2.length){
        return false;
    }else{
        for(let i =0; i<arr1.length; i++){
            for(let j = 0; j<arr2.length; j++){
                if(arr1[i] === arr2[j]){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }

   

}

let str1 = 'listen';
let str2 = 'silent';
console.log(Chk_Char(str1,str2));