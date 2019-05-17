function gladiator(fights, helmetP, swordP, shieldP, armorP) {
    let lostFightesCounter = fights;
    let helmetPrice = helmetP;
    let swordPrice = swordP;
    let shieldPrice = shieldP;
    let armorPrice = armorP;

    let totalExpenses = 0;
    for (let i = 1; i <= lostFightesCounter; i++) {
        if (i % 2 === 0) {
            totalExpenses += helmetPrice;
        }
        if (i % 3 === 0) {
            totalExpenses += swordPrice;
        }
        if (i % 6 === 0) {
            totalExpenses += shieldPrice;
        }
        if (i % 12 === 0) {
            totalExpenses += armorPrice;
        }

    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)
}
gladiator(23, 12.50, 21.50, 40, 200);