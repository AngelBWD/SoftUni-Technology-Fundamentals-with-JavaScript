function activationKeys(params) {

    let keys = params[0].split('&');
    let regex = /^([A-Za-z\d]{16})|([A-Za-z\d]{25})$/;
    let validKeys = [];

    for (let key of keys) {
        if (key.match(regex)) {
            key = key.toUpperCase(key).split('');

            for (let i = 0; i < key.length; i++) {

                if (Number.isInteger(+key[i])) {
                    key[i] = 9 - Number(key[i]);
                }
            }
            let chunkSize = 0;
            if (key.length === 16) {
                chunkSize = 4;
            } else {
                chunkSize = 5;
            }
            let validKey = key.join('').match(new RegExp(`.{${chunkSize}}`, 'g')).join('-');
         
           validKeys.push(validKey);
        }
    }
    console.log(validKeys.join(', '));
    
}
activationKeys(['xPt8VYhUDalilWLvb6uMSGEEf&KWQ{R.@/HZCbbV++1o]V+oG@@fF^93&y6fT5EGFgZHqlFiS']);