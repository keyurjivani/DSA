const ReverseString = (String) =>{
    let reversedString = '';
    for(let i = String.length - 1; i >= 0; i--){
        reversedString += String[i];
    }

    if(String === reversedString){
        return "The given string is a palindrome";
    }else{
        return "The given string is not a palindrome";
    }
}
let String = "nayan";

console.log(ReverseString(String));



