function arrayManipulations(input) {
    
    let colection = input.shift().split(" ");

    for (let element of input) {
        element = element.split(" ");
        let command = element[0];
        let number = element[1];
        let index = element[2];

        if (command === "Add") {
            colection.push(number);
        } else if (command === "Remove") {
            if (colection.includes(number)) {
                let index = colection.indexOf(number);
                colection.splice(index, 1);
            }
        } else if (command === "RemoveAt") {
            colection.splice(number, 1);

        } else if (command === "Insert") {
            colection.splice(index, 0, number);
        }
    }
    console.log(colection.join(" "));

}
arrayManipulations(["4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3"
]);