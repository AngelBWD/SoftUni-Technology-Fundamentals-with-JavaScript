function piccolo(allCarNums) {

    let cars = [];

    for (let car of allCarNums) {
        let [direction, number] = car.split(', ');
        if (direction === 'IN') {
            if (!cars.includes(number)) {
                cars.push(number);
            }
        }else if (direction === 'OUT') {
            if (cars.includes(number)) {
                let index = cars.indexOf(number);
                cars.splice(index,1)
            }
        }
    }
    if (cars.length>0) {
        cars.sort((a,b)=>a.localeCompare(b)).forEach(x=>console.log(x));
    }else{
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