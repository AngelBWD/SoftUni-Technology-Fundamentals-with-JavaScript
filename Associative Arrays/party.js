function party(input) {

    let index = input.indexOf('PARTY');
    let list2 = input.splice(index + 1);
    let party = input.pop();

    for (let i = 0; i < list2.length; i++) {
        if (input.includes(list2[i])) {
            let Index = input.indexOf(list2[i]);
            input.splice(Index, 1)
        } else {
            break;
        }

    }
    let result = input.sort((a, b) => a - b);

    console.log(result.length);
    console.log(result.join('\n'));

}
party(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);