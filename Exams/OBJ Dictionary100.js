function dictionary(params) {

    let command = params[2];
    let definitions = params[0].split(' | ');
    let wordsToCheck = params[1].split(' | ');
    let mass = [];
    let dictionary = {};

    for (let el of definitions) {
        let [word, definition] = el.split(': ');
        if (!mass.includes(word)) {
            mass.push(word);
        }
        for (let e of wordsToCheck) {
            if (e === word) {
                if (!dictionary.hasOwnProperty(e)) {
                    dictionary[word] = [];
                }
                dictionary[word].push(definition);
                dictionary[word].sort((a, b) => b.length - a.length);
            }
        }
    }
    if (command === 'List') {
        mass = mass.sort((a, b) => a.localeCompare(b));
        console.log(mass.join(' '));
        return;
    }

    let result = Object.entries(dictionary).sort((a, b) => a[0].length - b[0].length);
    for (let i = 0; i < result.length; i++) {
        console.log(`${result[i][0]}`);
        dictionary[result[i][0]].forEach(x => {
            console.log(` -${x}`);
        });
    }
}
// dictionary(['programmer: an animal, which turns coffee into code | developer: a magician',
//     'Pesho | Gosho',
//     'List'
// ]);
dictionary(['tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'End'
]);