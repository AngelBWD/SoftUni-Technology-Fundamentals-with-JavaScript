function solve(arr) {
    
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let quantity = +arr[i + 1];
        if (i % 2 === 0) {
            if (!map.has(arr[i])) {
                map.set(arr[i], arr[i + 1])
            } else {
                quantity += +map.get(arr[i]);
                map.set(arr[i], quantity)
            }
        } else {
        }
    }
    for (const [key, value] of map) {
        console.log(`${key} -> ${value}`);
    }
}
solve(['gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);