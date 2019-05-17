function solve(input) {
    
    let energy = +100;
    let initialCoins = +100;

    let arr = input[0].split("|");

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let splitCurrent = currentElement.split("-");
        let command = splitCurrent[0];
        let number = +splitCurrent[1];

        if (command === "rest") {
            let currentEnergy = energy;
            energy += number;
            if (energy == 100) {
                console.log(`You gained 0 energy. `);
                console.log(`Current energy: 100.`);
                energy = 100;
            } else if (energy >= 100) {
                console.log(`You gained ${100-currentEnergy} energy. `);
                console.log(`Current energy: 100.`);

                energy = 100;

            } else {
                console.log(`You gained ${number} energy. `);
                console.log(`Current energy: ${energy}.`);
            }
        } else if (command === "order") {
            if (energy >= 30) {
                initialCoins += number;
                energy -= 30;
                console.log(`You earned ${number} coins.`);
            } else {
                energy += 50;
                console.log(`You had to rest!`);
            }
        } else {
            initialCoins -= number;
            if (initialCoins > 0) {
                console.log(`You bought ${command}.`);

            } else {
                console.log(`Closed! Cannot afford ${command}.`);
                return;
            }
        }

    }

    console.log(`Day completed!`);
    console.log(`Coins: ${initialCoins}`);
    console.log(`Energy: ${energy}`);
}
solve(["order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000"]);