function santasSecretHelper(params) {

    let key = +params.shift();
    params.pop();
    let regex = /@([A-Za-z]+)[^\@\-\!\:\>]*!G!/;

    for (let param of params) {
        let decrryptedInfo = param.split('').map(c => String.fromCharCode(c.charCodeAt(0) - key)).join('');
        let result = decrryptedInfo.match(regex);
        if (result) {
            console.log(result[1]);
            
        }
    }
}
santasSecretHelper(['3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
]);