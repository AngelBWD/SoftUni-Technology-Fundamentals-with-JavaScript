function solve(arr) {

    let newArr = [];
    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i < arr.length; i++) {
        oldSum += arr[i];

        if (arr[i] % 2 === 0) {
            newArr.push(arr[i] + i)
        } else {
            newArr.push(arr[i] - i)
        }
    }
    for (let j = 0; j < newArr.length; j++) {
        newSum += newArr[j];
    }
    console.log(newArr);
    console.log(oldSum);
    console.log(newSum);
}
solve([5, 15, 23, 56, 35]);