function dictionary(params) {

    let command = params.pop();
    let definitions = params.shift().split(' | ');
    let wordsToCheck = params[0].split(' | ');
    let mass = [];
    let dictionary = {};

    for (let el of definitions) {
        let [word, definition] = el.split(': ');
        mass.push(word);
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
        mass = mass.sort((a, b) => a.length - b.length);
        console.log(mass.join(' '));
    }

    let result = Object.entries(dictionary).sort((a, b) => a[0].length - b[0].length);
    for (let i = 0; i < result.length; i++) {
        console.log(`${result[i][0]}`);
        dictionary[result[i][0]].forEach(x => {
            console.log(` -${x}`)
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