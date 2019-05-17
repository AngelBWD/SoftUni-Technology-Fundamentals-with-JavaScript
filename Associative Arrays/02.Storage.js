function storage(input) {

    let storage = new Map();

    for (const line of input) {
        const [item, quantityInput] = line.split(" ");
        let quantity = +quantityInput;

        if (storage.has(item)) {
            quantity += storage.get(item);
        }
        storage.set(item, quantity)
    }
    for (const [item, quantity] of storage) {
        console.log(`${item} -> ${quantity}`)
    }
    // storage.forEach((v, k) => console.log(`${k} -> ${v}`)) //2 НАЧИН
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);