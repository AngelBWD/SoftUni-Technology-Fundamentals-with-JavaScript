function solve(input) {
    let notFotJS = input.pop();
    let obj = {};

    for (let el of input) {
        let [command, store, products] = el.split('->');

        if (command === 'Add') {
            if (!obj.hasOwnProperty(store)) {
                obj[store] = [];
            }
            let produCTS = products.split(',');
            for (let el of produCTS) {
                obj[store].push(el);

            }
        } else if (command === 'Remove') {
            if (obj.hasOwnProperty(store)) {
                delete obj[store];
            }
        }
    }
    console.log(`Stores list:`);
    let final = Object.entries(obj);
    let result = final.sort((a, b) => {
        return    (a[1].length - b[1].length) 
    });
 
    for (let el of result) {
        console.log(el[0])
        for (let e of el[1]) {
            console.log(`<<${e}>>`);
        }
    }
}
solve(['Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END'
]);
// solve(['Add->Peak->Waterproof,Umbrella',
//     'Add->Groceries->Water,Juice,Food',
//     'Add->Peak->Tent',
//     'Add->Peak->Sleeping-Bag',
//     'Add->Peak->Jacket',
//     'Add->Groceries->Lighter',
//     'Remove->Groceries',
//     'Remove->Store',
//     'END'
// ]);