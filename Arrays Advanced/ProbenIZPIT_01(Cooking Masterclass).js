function cookingMasterclass(input) {

    let budget = +input[0];
    let students = +input[1];
    let priceOfFlour = +input[2];
    let priceOfEgg = +input[3];
    let priceOfApron = +input[4];

    let freePackets = 0;
    for (let i = 1; i <= students; i++) {
        if (i % 5 == 0) {
            freePackets++;
        }
    }
    let needMoney = (priceOfApron * (Math.ceil(students * 1.2))) + (10 * priceOfEgg * students) + (priceOfFlour * (students - freePackets));
    let diff = budget - needMoney;
    if (diff >= 0) {
        console.log(`Items purchased for ${needMoney.toFixed(2)}$.`);
    } else {
        console.log(`${Math.abs(diff).toFixed(2)}$ more needed.`);
    }
}
cookingMasterclass([50, 2, 1.0, 0.10, 10.0]);