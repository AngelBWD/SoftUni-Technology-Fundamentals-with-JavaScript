function palindromes(inputArr) {

    let palindromesArr = []; 

    inputArr.forEach((element) => { // ВСЕКИ ЕЛЕМЕНТ НА МАСИВА, ГО СПЛИТВАМЕ И ДЖОЙНВАМЕ ЗА ДА МОЖЕМ ДА ГО ДОЛЕПИМ Е РЕВЪРСНЕМ
        let textArr = element
            .split(" ")
            .join("");

        let reversedTextArr = textArr // РЕВЪРСВАМЕ ГО В НОВА ПРОМЕНЛИВА
            .split("")
            .reverse()
            .join('');

        if (textArr === reversedTextArr) { //АКО СА ЕДНАКВИ СИ ГО ПУШВАМЕ В ПРАЗЕН МАСИВ
            palindromesArr.push(textArr);
        }
    });
    if (palindromesArr.length > 0) {
        console.log(palindromesArr.join(", "));

    } else {
        console.log(`No palindromes found`);
    }
}
palindromes([' stella won no wallets',
    'not a palindrome'
]);