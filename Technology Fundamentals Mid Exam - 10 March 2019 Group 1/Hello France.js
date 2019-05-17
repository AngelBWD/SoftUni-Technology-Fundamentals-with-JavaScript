function solve(input) {
    let maxClothes = 50;
    let maxShoes = 35;
    let maxAccessories = 20.50;
    let budget = input.pop();
    input = input[0].split('|');
    let finalMass = [];

    for (let el of input) {
        let [type, price] = el.split('->');

        if (type === 'Clothes' && +price <= +maxClothes && +budget >= +price) {
            finalMass.push(+price);
            budget -= +price;
        } else if (type === 'Shoes' && +price <= +maxShoes && +budget >= +price) {
            finalMass.push(+price);
            budget -= +price;

        } else if (type === 'Accessories' && +price <= +maxAccessories && +budget >= +price) {
            finalMass.push(price);
            budget -= +price;
        }
    }
    let final = finalMass.map(x => { return (x * 1.4).toFixed(2)  });
    let end = final.map(x => {  return +x })

    let sum = 0;
    let sum1 = 0;

    for (let i = 0; i < finalMass.length; i++) {
        sum1 = sum1 + finalMass[i];
    }
    for (let e of end) {
        sum += +e;
    }
    let es = sum - sum1;
    let suM = sum + budget;

    if (suM < 150) {
        console.log(final.join(' '));
        console.log(`Profit: ${es.toFixed(2)}`);
        console.log(`Time to go.`);

    } else {
        console.log(final.join(' '));
        console.log(`Profit: ${es.toFixed(2)}`);
        console.log(`Hello, France!`);
    }

}
// solve(['Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
//     '120'
// ]);
solve(['Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60',
    '90'
]);