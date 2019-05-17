function solve(input) {

    let result = new Map();
    let neighborhoods = input.shift().split(', ')

    neighborhoods.forEach(n => result.set(n, []));

    for (const line of input) {
        let [neighborhood, name] = line.split(' - ');

        if (neighborhoods.includes(neighborhood)) {
            let people = result.get(neighborhood);

            people.push(name);
            result.set(neighborhood, people);
        }
    }
    let output = [...result.entries()];
    output.sort((a, b) => b[1].length - a[1].length);
    for (const [kvartal, hora] of output) {
        console.log(`${kvartal}: ${hora.length}`);
        for (const chovek of hora) {
            console.log(`--${chovek}`);

        }
    }

}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);