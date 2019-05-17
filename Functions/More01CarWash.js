function solve(arr) {

    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'soap') {
            result += 10;
        } else if (arr[i] === 'water') {
            result = result + result * 0.20;
        } else if (arr[i] === 'vacuum cleaner') {
            result = result + result * 0.25;
        } else if (arr[i] === 'mud') {
            result = result - result * 0.10;;
        }
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`);
}
solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);