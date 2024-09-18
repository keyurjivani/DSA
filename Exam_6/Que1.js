// The Quest for Factorial's Treasure:
// In the kingdom of Arithmetic, there was a legend about a treasure guarded by the mighty creature
// named Factorial. To uncover this treasure, you must help the brave hero 'factorial(n)' who embarks
// on a journey to multiply all the positive integers from 1 up to his chosen number 'n'. The treasure is
// revealed when he reaches the number 0, where the base of recursion lies.
// - Example Journey:
// Input: 5
// Output: 120

const fact = (n) => {
    if (n === 0 || n === 1) {
        return 1; 
    }
    return n * fact(n - 1); 
}

console.log(fact(5));
