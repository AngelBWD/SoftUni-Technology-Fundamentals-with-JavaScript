function piccolo(allCarNums) {

    let carNumsMap = new Map();

    for (let currentCarNum of allCarNums) {
        currentCarNum = currentCarNum.split(', ');
        let action = currentCarNum.shift();
        currentCarNum = currentCarNum.join(" ");

        if (action === "IN") {
            carNumsMap.set(currentCarNum, 1);
        } else if (action === "OUT") {
            carNumsMap.delete(currentCarNum);
        }
    }

    let sortedCarNum = [...carNumsMap].sort((a, b) => a[0].localeCompare(b[0]));
    if (sortedCarNum.length > 0) {
        sortedCarNum.forEach(x => console.log(x[0]))
    } else {
        console.log(`Parking Lot is Empty`);

    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);