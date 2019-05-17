function palindrom(numbers) {

    let isPalindrom = (a, b) => a === b;
    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        let reverseNumber = Number(currentNumber
            .toString()
            .split('')
            .reverse()
            .join(''));
        console.log(isPalindrom(currentNumber, reverseNumber));

    }
}
palindrom([123, 323, 421, 121]);