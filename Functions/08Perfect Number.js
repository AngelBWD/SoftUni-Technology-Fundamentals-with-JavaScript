function solve(number) {

    let arr = [];
    let sumOfNumbers = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            arr.push(i);
        }
    }
    for (let j = 0; j < arr.length; j++) {
        sumOfNumbers += +arr[j];
    }
    if (sumOfNumbers === number) {
        console.log(`We have a perfect number!`);
    } else {
        console.log('It’s not so perfect.');
    }
}
solve(10);