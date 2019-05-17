function solve(arr) {

    let string = arr[0].split(" ");
    let maxSequence = [];
    for (let i = 0; i < string.length; i++) {
        let currentSequence = [];
        for (let j = i; j < string.length; j++) {
            if (string[i] === string[j]) {
                currentSequence.push(string[i]);
            } else {
                break;
            }
        }
        if (maxSequence.length < currentSequence.length) {
            maxSequence = currentSequence;
        }
    }
    console.log(maxSequence.join(" "));
}

solve(['2 1 1 2 3 3 2 2 2 1']);