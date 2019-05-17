function sumFirstLast(arr) {

    let lastElement = arr.pop();
    let firstElement = arr.shift();

    return Number(lastElement) + Number(firstElement);
}
console.log(sumFirstLast(['20', '30', '40']));