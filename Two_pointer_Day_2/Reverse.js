const ReverseString = () =>{
    let reversedString = '';
    for(let i = String.length - 1; i >= 0; i--){
        reversedString += String[i];
    }
    return reversedString;
}
let String = "keyur";

console.log(ReverseString(String));



