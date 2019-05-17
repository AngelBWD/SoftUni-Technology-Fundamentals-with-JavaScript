function solve(mass) {

    let newArr = [];
    for (let i = 0; i < mass.length; i++) {
        if (mass[i] === 'add') {
            newArr.push(i + 1);
        } else {
            newArr.pop();
        }
    }
    if (newArr[0] === undefined) {
        console.log("Empty")
    } else {
        console.log(newArr.join(" "));
    }
}
solve(['remove', 'remove', 'remove']);