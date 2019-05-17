function travel(input) {

    let countries = new Map();
    for (let string of input) {
        let parts = string.split(' > ');

        let country = parts[0];
        let city = parts[1];
        let price = parts[2]

        if (!countries.has(country)) {
            let townToPriceMap = new Map();
            townToPriceMap.set(city, price);
            countries.set(country, townToPriceMap);

        } else {
            let existingTown = countries.get(country);
            if (existingTown.has(city)) {
                let existingPrice = existingTown.get(city);
                if (price < existingPrice) {
                    existingTown.set(city, price);
                }
            } else {
                existingTown.set(city, price);
            }
        }
    }
    let sorted = [...countries].sort((a, b) => a[0].localeCompare(b[0]));
    for (let [country, townsMap] of sorted) {
        let sortedTowns = [...townsMap].sort((a, b) => a[1] - b[1]).map(element => `${element[0]} -> ${element[1]}`);
        console.log(`${country} -> ${sortedTowns.join(" ")}`);
    }

}
travel(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);