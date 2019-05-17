function lenguage(str) {
    if (str === "USA" || str === "England") {
        console.log('English');
    } else if (str === "Spain" || str === "Argentina" || str === "Mexico") {
        console.log('Spanish');
    } else {
        console.log('unknown');
    }
}
lenguage('Mexico');