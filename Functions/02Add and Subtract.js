function solve(num1, num2, num3) {

    function sum2el(num1, num2) {
        return num1 + num2;
    }
    let finalResult = sum2el(num1, num2) - num3
    console.log(finalResult);
}

solve(23, 6, 10);