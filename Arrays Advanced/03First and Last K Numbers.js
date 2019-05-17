function firstAndLastKNumbers(input) {

    let k = input.shift();
    let firstElementd = input.slice(0, k);
    let lastElementd = input.slice(input.length - k, );

    console.log(firstElementd.join(' '));
    console.log(lastElementd.join(' '));

}
firstAndLastKNumbers([2, 7, 8, 9]);