function gladiatorInventory(input) {
    
    let inventory = input.shift().split(" ");

    for (let element of input) {
        element = element.split(" ");
        let command = element[0];
        let equipment = element[1];

        if (command === "Buy") {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        } else if (command === "Trash") {
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
            }
        } else if (command === "Repair") {
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
                inventory.push(equipment);
            }
        } else if (command === "Upgrade") {
            equipment = equipment.split("-");
            let currentEquiplent = equipment[0];
            let upgradeEquiplent = equipment[1];
            if (inventory.includes(currentEquiplent)) {
                let upgrdeIndex = inventory.indexOf(currentEquiplent) + 1;
                inventory.splice(upgrdeIndex, 0, `${currentEquiplent}:${upgradeEquiplent}`);
            }
        }
    }
    console.log(inventory.join(" "));

}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]);