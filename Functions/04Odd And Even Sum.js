function OddEvenSum(number) {

    let OddSum = 0;
    let EvenSum = 0;
    let myNumber = number.toString().split('').map(Number);

    for (let i = 0; i < myNumber.length; i++) {
        if (myNumber[i] % 2 == 0) {
            EvenSum += myNumber[i];
        } else {
            OddSum += myNumber[i];
        }
    }

    console.log(`Odd sum = ${OddSum}, Even sum = ${EvenSum}`);
}
OddEvenSum(3495892137259234);