// 5. The Palindrome Oracle's Test:
// Deep within the Cave of Reflections lived the Palindrome Oracle, who could tell if a word was the
// same forwards and backwards. To pass the Oracle's test, you must write a recursive function
// 'isPalindrome(s)' to determine whether a string is a palindrome. For instance, the word 'racecar' will
// be deemed a true palindrome by the Oracle.
// - Example Oracle Test:
// Input: 'racecar'
// Output: true

const isPalindrome = (str) => {
    if (str.length <= 1) {
        return true; 
    }
    if (str[0] !== str[str.length - 1]) {
        return false; 
    }
    
    return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("madam")); // Output: true

