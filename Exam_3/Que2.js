const Find_profit = (prices) =>{
    let profit = 0;
    let max = 0;
    for(let i=0; i<prices.length; i++){
        for(let j= i+1; j<prices.length-1;j++){
            if(prices[i] < prices[j]){
                 profit = prices[j] - prices[i]
            }
    
            
            if(max < profit){
                max = profit
                
            }
            
        }
        
    }
    return max;
}

let prices = [7, 1, 5, 3, 6, 4];
let result = Find_profit(prices)
console.log(result);