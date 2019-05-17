function search(arr1, arr2) {
    
    let firstRange = arr2.shift();
    let secondRange = arr2.shift();
    let num = arr2.shift();

    let firstRangeArr1 = arr1.splice(0, firstRange);
    firstRangeArr1.splice(0, secondRange);
    let count = 0;

    for (let i = 0; i < firstRangeArr1.length; i++) {
        if (firstRangeArr1[i] === num) {
            count++;
        }

    }
    console.log(`Number ${num} occurs ${count} time.`);

}
search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);