function train(vagons) {
    
    let passingersInVagons = vagons.shift().split(' ').map(Number);
    let maxVagonCapacity = +(vagons.shift());

    for (const comands of vagons) {
        let currentComnads = comands.split(" ");

        if (currentComnads[0] === "Add") {
            passingersInVagons.push(+(currentComnads[1]));
        } else {
            for (let i = 0; i < passingersInVagons.length; i++) {
                if ((passingersInVagons[i] + +(currentComnads[0])) <= maxVagonCapacity) {
                    passingersInVagons[i] += Number(currentComnads[0]);
                    break;
                }
            }
        }

    }
    console.log(passingersInVagons.join(" "));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);