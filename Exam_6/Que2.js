// 2. The Chronicles of Fibonacci:
// In the ancient lands of Sequences, the Fibonacci tribe recorded a mystical pattern of numbers. Each
// number in this pattern was the sum of the two that came before it. To continue the chronicles, your
// task is to help 'fibonacci(n)' find the nth number in this sequence. The journey starts with the first two
// numbers as 0 and 1, and grows infinitely thereafter.
// - Example Chronicle:
// Input: 6
// Output: 8

const fibonacci = (n) => {
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Recursive case
    let fibPrev = 0;
    let fibCurrent = 1;

    for (let i = 2; i <= n; i++) {
        let fibNext = fibPrev + fibCurrent;
        fibPrev = fibCurrent;
        fibCurrent = fibNext;
    }

    return fibCurrent;
};

console.log(fibonacci(6));