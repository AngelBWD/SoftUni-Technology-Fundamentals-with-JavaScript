function solve(arr) {
    let cryptedText = arr[0];
    let replaceText = arr[1];
    let [firstRep, secondRep] = replaceText.split(' ')
    let regex = /^[d-z\{\}\#\|]+$/g;
    let newStr = [];

    if (!cryptedText.match(regex)) {
        console.log('This is not the book you are looking for.');
        return;
    }
    let matches = cryptedText.match(regex);
    let splitmatch = matches[0].split('');
    for (let i = 0; i < splitmatch.length; i++) {
        let current = splitmatch[i].charCodeAt(0) - 3;
        newStr.push(String.fromCharCode(current));        //!

    }
    console.log(newStr.join('').replace(new RegExp(firstRep, 'g'), secondRep));
}
// solve(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
//     'ec an'
// ]);
solve(['arx#vkdww#qrw#sdvv', 't l']);