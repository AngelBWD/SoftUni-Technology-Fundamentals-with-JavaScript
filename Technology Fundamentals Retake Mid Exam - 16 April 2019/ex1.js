function solve(input) {

    let budget = +input.shift();
    let priceOneKgFloor = +input;
    let priceOnePaketEggs = priceOneKgFloor * 0.75;
    let priceOneLitreMilk = 1.25 * priceOneKgFloor;
    let price250Milk = priceOneLitreMilk / 4;
    let priceForOneCozonac = priceOneKgFloor + priceOnePaketEggs + price250Milk;

    let colourEggs = 0;
    let countCozonacs = 0;
    while (budget > priceForOneCozonac) {
        countCozonacs++;
        colourEggs += 3;
        budget = budget - priceForOneCozonac;
        if (countCozonacs % 3 == 0) {
            colourEggs -= (countCozonacs - 2);
        }

    }
    console.log(`You made ${countCozonacs} cozonacs! Now you have ${colourEggs} eggs and ${budget.toFixed(2)}BGN left.`);

}
//solve(['20.50', '1.25']);
solve(['15.75', '1.4']);