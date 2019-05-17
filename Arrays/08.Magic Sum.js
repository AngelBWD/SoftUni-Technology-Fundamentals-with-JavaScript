function solve(arr1) {

    let magic = [];
    let ourSum = +arr1[1];
    let arr1split = arr1[0].split(" ");

    for (let i = 0; i < arr1split.length - 1; i++) {
        let currentElement = +arr1split[i];

        for (let j = i + 1; j < arr1split.length; j++) {

            let secondCurrentElement = +arr1split[j];

            if (currentElement + secondCurrentElement === ourSum) {
                magic.push(currentElement + " " + secondCurrentElement);
            }
        }
    }
    console.log(magic.join("\n"));

}

solve(['1 7 6 2 19 23', '8']);