function houseParty(input) {

    let guestsArray = [];

    for (const comands of input) {
        let name = comands.split(" ")[0];
        if (!comands.includes("not")) {

            if (!guestsArray.includes(name)) {
                guestsArray.push(name);
            } else if (guestsArray.includes(name)) {
                console.log(`${name} is already in the list!`);
            }
        } else if (comands.includes("not")) {
            if (guestsArray.includes(name)) {
                let index = guestsArray.indexOf(name)
                guestsArray.splice(index, 1);
            } else if (!guestsArray.includes(name)) {
                console.log(`${name} is not in the list!`);

            }
        }
    }
    guestsArray.forEach(name => console.log(name));

}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);