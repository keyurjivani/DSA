const CountChar = (str, char) => {
    if (str.length === 0) {
        return 0;
    }
    
    if (str[0] === char) {
        return 1 + CountChar(str.slice(1), char);
    } else {
        return CountChar(str.slice(1), char);
    }
}

console.log(CountChar("hello", 'l')); // Output: 2
