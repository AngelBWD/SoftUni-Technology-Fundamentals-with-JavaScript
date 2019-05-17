function name(params) {

    let regex = /^[A-Z][a-z\s\']+\:[A-Z\s]+$/g

    for (let param of params) {
        if (param === 'end') {
            break;
        }

        if (!param.match(regex)) {
            console.log(`Invalid input!`);
        } else {
            let key = param.split(':')[0].length;

            let encryptedResult = param.split('');

            for (let i = 0; i < encryptedResult.length; i++) {
                let currentElement = encryptedResult[i];
                let asciiCode = currentElement.charCodeAt(0);
                asciiCode += key;

                if (currentElement.match(/[A-Za-z]/)) {
                    if (currentElement.match(/[A-Z]/) && asciiCode > 90) {
                        asciiCode = (asciiCode % 90) + 64;
                    } else if (currentElement.match(/[a-z]/) && asciiCode > 122) {
                        asciiCode = (asciiCode % 122) + 96;
                    }
                    encryptedResult[i] = String.fromCharCode(asciiCode);
                }
            }
            console.log(`Successful encryption: ${encryptedResult.join('').replace(':','@')}`);

        }
    }
}
name(['Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end'
]);