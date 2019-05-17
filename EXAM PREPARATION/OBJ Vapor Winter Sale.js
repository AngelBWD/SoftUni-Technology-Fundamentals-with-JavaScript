function solve(arr) {

    let outputPrice = {};
    let outputDLC = {};

    let input = arr[0].split(', ');
    for (let line of input) {

        if (line.includes('-')) {
            let [game, price] = line.split('-');
            price = +price;

            if (!outputPrice.hasOwnProperty(game)) {
                outputPrice[game] = [];
            }
            outputPrice[game].push(price);
        } else {
            let [game, DLC] = line.split(':');

            if (!outputDLC.hasOwnProperty(game)) {
                
                if (!outputDLC.hasOwnProperty(game)) {
                    outputDLC[game] = [];
                }
                outputDLC[game].push(DLC)
            }
        }
    }
    let outputPriceMass = Object.entries(outputPrice).sort((a,b)=> a[1]-b[1]);
    let final = [];
    let final1 = [];
    for (const el of outputPriceMass) {
        let name = el[0];
        let price = el[1];
        if (outputDLC.hasOwnProperty(name)) {
            final.push(`${name} - ${outputDLC[name]} - ${(price*0.5*1.2).toFixed(2)}`);
          
        } 
    }
    let outputPriceMass1 = Object.entries(outputPrice).sort((a,b)=> b[1]-a[1]);
    for (const el of outputPriceMass1) {
        let name = el[0];
        let price = el[1];
    if(!outputDLC.hasOwnProperty(name)){
            final1.push(`${name} - ${(price*0.8).toFixed(2)}`)
        }
    }
    console.log(final.join('\n'));
    console.log(final1.join('\n'));

}
//solve(['WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT']);
solve(['Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC']);