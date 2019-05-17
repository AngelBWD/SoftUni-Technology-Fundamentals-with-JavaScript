function digits(first, second) {

    function factorialCalculator(Number) {
        let factorial = 1;
        for (let i = 2; i <= Number; i++) {
            factorial *= i;
        }
        return factorial;
    }
    let firstNumberFactorial = factorialCalculator(first);
    let secondNumberFactorial = factorialCalculator(second);
    let finalResult = firstNumberFactorial / secondNumberFactorial;
    console.log(finalResult.toFixed(2));

}
digits(5, 2);