function solve(num, arr) {

    let resultArr = [];
    for (let i = 0; i < num; i++) {
        let currentElement = arr[num - 1 - i]
        resultArr.push(currentElement);
    }
    console.log(resultArr.join(' '));
}
solve(3, [10, 20, 30, 40, 50]);