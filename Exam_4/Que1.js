const isPrime = (n) =>{
    if(n<=1) return false;
    for(let i=2; i<n; i++){
        if(n % i === 0) return false;
    }
    return true;
}
const Prime = (n) =>{
    for(let i=0; i<n; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}
console.log(Prime(20));
