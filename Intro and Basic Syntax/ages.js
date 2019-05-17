function age(arg) {
    let years = arg;
    if (years >= 0 && years <= 2) {
        console.log('baby');
    } else if (years >= 3 && years <= 13) {
        console.log('child');
    } else if (years >= 14 && years <= 19) {
        console.log('teenager');
    } else if (years >= 20 && years <= 65) {
        console.log('adult');
    } else {
        console.log('elder');
    }
}
age('20');