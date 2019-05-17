function solve(firstChar, secondChar) {

    let start = firstChar.charCodeAt(0);
    let end = secondChar.charCodeAt(0);
    let charIsRange = [];


    if (end < start) {
        let help = start;
        start = end;
        end = help;
    }

    for (let i = start + 1; i < end; i++) {
        charIsRange.push(String.fromCharCode(i));
    }
    console.log(charIsRange.join(" "));
}
solve('a', 'd');