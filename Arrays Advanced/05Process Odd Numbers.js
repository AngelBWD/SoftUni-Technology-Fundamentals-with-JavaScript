function processOddNumbers(arr) {
    // let oddNumbers = arr.filter(e => arr.indexOf(e) % 2 != 0).map(e => e * 2).reverse().join(' '); 1 начин
    let oddNumbers = arr.filter((e, i) => i % 2 != 0).map((e) => e * 2).reverse().join(' '); //2 начин

    console.log(oddNumbers);

}

processOddNumbers([3, 0, 10, 4, 7, 3]);