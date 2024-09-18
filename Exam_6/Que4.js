// 4. The Mirror of Reversal:
// In the land of Reflection, there was a magical mirror that could reverse any string placed before it.
// This mirror, known as 'reverseString(s)', could turn words around, showing them in their true
// reversed form. Your mission is to recreate this mirror using recursion and reveal the reversed form
// of the word 'recursion'.
// - Example Reflection:
// Input: 'recursion'
// Output: 'noisrucer'

function reverseString(str) {
    if (str === "" || str.length === 1) {
      return str;
    }
    return str[str.length - 1] + reverseString(str.slice(0, -1));
  }
  
  console.log(reverseString("hello"));     
  
  