function solve(params) {
    let encryptedString = params.shift();
    let substring = params;

    if (!encryptedString.match(/^[d-z{}|#]+$/g)) {
        console.log(`This is not the book you are looking for.`);
    } else {
        let [firstSubString, secondSubString] = substring[0].split(' ');
        let decrypt = encryptedString.split('').map(c => c.charCodeAt(0) - 3).map(c => String.fromCharCode(c)).join('');
        console.log(decrypt.replace(new RegExp(firstSubString, 'g'), secondSubString));

    }
}
solve(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
    'ec an'
])