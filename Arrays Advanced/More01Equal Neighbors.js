function equalNeighbors(arr) {
    
    let arr2 = arr.slice();
    let countInFirstElement = arr.shift().length;
    let result = '';
    let count = 0;

    for (let i = 0; i < arr2.length; i++) {

        result += arr2[i] + ',';
    }
    let k = result.split(",");
    for (let j = 0; j < k.length; j++) {

        if ((k[j] === k[j + countInFirstElement])) {

            count++;
        }
        if ((k[j] === k[j + 1])) {
            count++;
        }

    }
    console.log(count);

}
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);