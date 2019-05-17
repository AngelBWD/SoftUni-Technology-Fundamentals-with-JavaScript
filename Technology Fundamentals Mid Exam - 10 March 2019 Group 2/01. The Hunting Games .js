function solve(input) {

    let days = +input.shift();
    let countPeople = +input.shift();
    let energy = +input.shift();
    let water = +input.shift();
    let food = +input.shift();

    let totalFood = days * countPeople * food;
    let totalWater = days * countPeople * water;

    for (let i = 1; i <= days; i++) {
        energy = energy - +input.shift();
        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            break;
        }
        if (i % 2 === 0) {
            energy = energy * 1.05;
            totalWater = totalWater - 0.3 * totalWater;
        }
        if (i % 3 === 0) {
            energy = energy * 1.1;
            totalFood = totalFood - totalFood / countPeople;
        } 
       
    }
    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }
}
solve([12, 6, 4430, 9.8, 5.5, 620.3, 840.2, 960.1, 220, 340, 674, 365, 345.5, 212, 412.12, 258, 496]);