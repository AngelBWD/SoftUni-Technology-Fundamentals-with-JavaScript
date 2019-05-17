function solve(power, age) {

    let baseTax = calculatePaysTax(power);
    let carCoeffiecent = calculateCoefficient(age);
    let totalTax = baseTax * carCoeffiecent;
    console.log(totalTax.toFixed(2) + " lv.")

    function calculatePaysTax(power) {
        let result = " ";
        if (power <= 37) {
            result = (power * 0.43);

        } else if (37 < power && power <= 55) {
            result = (power * 0.5);

        } else if (55 < power && power <= 74) {
            result = (power * 0.68);

        } else if (74 < power && power <= 110) {
            result = (power * 1.38);

        } else if (power > 110) {
            result = (power * 1.54);

        }
        return result;
    }

    function calculateCoefficient(age) {

        if (age < 5) {
            return 2.8;
        }
        if (5 <= age && age < 14) {
            return 1.5;
        }
        return 1;
    }
}
solve(45, 10);