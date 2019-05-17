function solve(arr1, n) {

    let newArr = [];
    for (let i = 1; i <= n; i++) {
        let currentNum = arr1.shift();
        arr1.push(currentNum)
    }
    console.log(arr1.join(" "));
}


solve([51, 47, 32, 61, 21], 2);