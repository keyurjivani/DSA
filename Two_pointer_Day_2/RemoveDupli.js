const Remove_Duplicate = (arr)=> {
    const duplicate_arr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < duplicate_arr.length; j++) {
            if (arr[i] === duplicate_arr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (isDuplicate != true) {
            duplicate_arr.push(arr[i]);
        }
    }
    return duplicate_arr;
}
let arr = [1, 2, 2, 3, 4, 4, 5];
let result = Remove_Duplicate(arr);
console.log(result);
