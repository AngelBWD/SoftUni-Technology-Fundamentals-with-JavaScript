function solve(arr) {
    //variant2
    for (let i = 0; i < arr.length / 2; i++) {
        let lowerElement = arr[0];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = lowerElement;
    }
    console.log(arr.join(' '));
    //variant1
    // arr.reverse();
    //console.log(arr.join (' '));

}
solve(['a', 'b', 'c', 'd', 'e']);