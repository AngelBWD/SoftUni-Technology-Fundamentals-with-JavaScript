function solve(input) {

    let nameShops = input.shift().split(' ');
    let numberComands = +input.shift();
    let counter = 0;

    for (let e of input) {


        let tokens = e.split(' ');
        let command = tokens[0];
        let count = +tokens[2];

        if (command === 'Include') {
            nameShops.push(tokens[1])
        } else if (command === 'Visit') {

            if (nameShops.length >= +tokens[2]) {

                if (tokens[1] === 'first') {

                    nameShops.splice(0, +tokens[2]);
                } else if (tokens[1] === 'last') {
                    for (let i = 0; i < count; i++) {
                        nameShops.pop();

                    }
                }
            } 
        } else if (command === 'Prefer') {
            if (nameShops.length < +tokens[1] && nameShops.length < +tokens[2]) {
                console.log('Shops left:');

                console.log(nameShops.join(' '));
                return;
            } else {
                let index1 = nameShops[tokens[1]];
                let index2 = nameShops[tokens[2]];
                nameShops.splice(tokens[1], 1, index2);
                nameShops.splice(tokens[2], 1, index1);

                //console.log(index1);

            }
        } else if (command === 'Place') {
            if (nameShops.length > +tokens[2]) {
                //console.log(tokens[2]);

                nameShops.splice(+tokens[2] + 1, 0, tokens[1])
            }

        }
        counter++;
        if (counter === numberComands) {
            console.log('Shops left:');

            console.log(nameShops.join(' '));
            return;

        }

    }
    console.log('Shops left:');

    console.log(nameShops.join(' '));
}
solve(['Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2'
]);
// solve(['Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
//     '6',
//     'Visit first 9',
//     'Visit last 4',
//     'Prefer 3 8',
//     'Prefer 0 1',
//     'Place Store 7',
//     'Place ShoeAquarium 2'
// ]);