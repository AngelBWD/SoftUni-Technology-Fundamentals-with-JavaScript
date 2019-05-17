function printAndSum(num1, num2) {
    let string = " ";
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        string += i + ' ';
        sum += i;

    }
    console.log(string.trim);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);