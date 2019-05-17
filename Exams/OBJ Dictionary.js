function solve(arr) {
    let command = arr.pop();
    let names = arr.pop().split(' | ')
    let namesMass = [];
    arr = arr[0].split(' | ');
    let final = {};

    for (let el of arr) {
        let [word, text] = el.split(': ');      //Не съм проверил думата с имената и ми дава 70/100
        if (!final.hasOwnProperty(word)) {
            final[word] = [];
            namesMass.push(word);
        }
        final[word].push(text);
        final[word].sort((a, b) => b.length - a.length);
    }
    if (command === 'List') {
        console.log(namesMass.sort((a, b) => a.length - b.length).join(' '));
        return;
    } else {
        let fin = Object.entries(final).sort((a, b) => a[0].length - b[0].length);

        for (const x of fin) {
            console.log(x[0]);
            final[x[0]].forEach(s => {
                console.log(` -${s}`);

            })
        }
    }
}
// solve(['programmer: an animal, which turns coffee into code | developer: a magician',
//     'Pesho | Gosho',
//     'List'
// ]);
solve(['tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'End'
]);