function solve(arr1) {

    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let currentElement = arr1[i];
        let isTopInteger = true;

        for (let j = i + 1; j < arr1.length; j++) {

            if (currentElement <= arr1[j]) {
                isTopInteger = false;
                break;
            }
        }
        if (isTopInteger) {
            newArr.push(currentElement)
        }
    }
    console.log(newArr.join(" "));

}

solve([1, 4, 3, 2]);