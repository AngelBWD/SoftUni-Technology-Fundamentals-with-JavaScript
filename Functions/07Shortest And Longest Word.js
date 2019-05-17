function solve(string) {

    let arr = string.split(' ').filter(x => x !== '');

    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let maxString = " ";
    let minString = " "


    for (let i = 0; i < arr.length; i++) {
        let currentString = arr[i].length;
        if (currentString > max) {
            max = currentString;
            maxString = arr[i];
        }

        if (currentString < min) {
            min = currentString;
            minString = arr[i];
        }

    }

    console.log(`Longest -> ${maxString}`);
    console.log(`Shortest -> ${minString}`);


}
solve('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');