function solve(arr) {
    
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {

        let num = +arr[i];
        if (arr[i] % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    let diff = sumEven - sumOdd;

    console.log(diff);
}
solve([1, 2, 3, 4, 5, 6]);