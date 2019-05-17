function solve(input) {

    let didiRegex = /[^a-zA-Z\-]+/;
    let bojoRegex = /[a-zA-Z]+-[a-zA-Z]+/;
    let match = '';

    while (true) {
        match = input[0].match(didiRegex);
        if (!match) {
            break;
        }
        console.log(match[0]);
        input[0] = input[0].slice(match.index + match[0].length);

        
        match = input[0].match(bojoRegex);
        if (!match) {
            break;
        }
        console.log(match[0]);
        input[0] = input[0].slice(match.index + match[0].length);

    }
}
solve(['^^^^pika-pika^^^^']);