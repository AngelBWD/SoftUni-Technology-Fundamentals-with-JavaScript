function solve(input) {
    let noForJS = input.pop();
    let regex = /\=[0-9]+/;
    let regex1 = /(?<=<<)[a-z0-9A-Z]+/;
    let regex2 = /^[a-zA-Z0-9\!\@\?\#\$]+\=/;
    let regex3 = /\=[0-9<<a-z0-9]+/;

    let first = [];
    let second = [];
    let third = [];
    let final = [];

    for (let el of input) {
        if (el.match(regex)) {
            first.push(el)
        }
    }
    for (let e of first) {
        if (e.match(regex1)) {
            second.push(e)
        }
    }
    for (let ele of second) {
        if (ele.match(regex2)) {
            third.push(ele)
        }
    }
    for (let ele of third) {
        let splitEle = ele.split('<<');
        let index = splitEle[0].indexOf('=');
        let num = splitEle[0].substring(index + 1);

        if (+num === splitEle[1].length) {
            final.push(ele);
        }
    }

    let [peak, cordinates] = final[0].split('<<')
    let splitPeak = peak.split('=')
    let namePeak = [];
    let lastArr = splitPeak[0].split('');
    for (let el of lastArr) {
        if (el !== '!' && el !== '@' && el !== '#' && el !== '?' && el !== '$') {
            namePeak.push(el);
        }
    }
    namePeak = namePeak.join('')
    for (let e of input) {
        if (e !== final[0]) {
            console.log(`Nothing found!`);
        } else {
            console.log(`Coordinates found! ${namePeak} -> ${cordinates}`);
        }
    }

}
// solve(['!@Ma?na?sl!u@=7<<tv58ycb4845',
//     'E!ve?rest=.6<<tuvz26',
//     '!K@2.,##$=4<<tvnd',
//     '!Shiha@pan@gma##9<<tgfgegu67',
//     '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
//     'Last note'
// ]);
solve(['Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
    '=9Cho?@#Oyu<<thvb7ydht',
    'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
    'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
    'Last note'
]);