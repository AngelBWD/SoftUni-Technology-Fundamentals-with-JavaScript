function calc(firstDigit, oparation, secondDigit) {
    if (oparation === '+') {
        console.log((firstDigit + secondDigit).toFixed(2));
    } else if (oparation === '-') {
        console.log((firstDigit - secondDigit).toFixed(2));
    } else if (oparation === '*') {
        console.log((firstDigit * secondDigit).toFixed(2));
    } else {
        console.log((firstDigit / secondDigit).toFixed(2));
    }
}
calc(5, '+', 10);