function piccolo(allCarNums) {

    let mySet = new Set();
    for (let element of allCarNums) {
        let [direction, number] = element.split(', ');
        if (direction === 'IN') {
            mySet.add(number)
        }

        if (direction === 'OUT') {
            mySet.delete(number)
        }
    }
    let sortedSet = [...mySet.keys()].sort((a, b) => a.localeCompare(b));
    if (sortedSet.length <= 0) {
        console.log(`Parking Lot is Empty`);

    } else {
        sortedSet.forEach(x => console.log(x));
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