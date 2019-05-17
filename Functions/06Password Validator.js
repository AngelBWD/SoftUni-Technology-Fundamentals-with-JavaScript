function solve(password) {

    let isValid = true;
    let digit = 0;
    let isWithIncorectElement = false;

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;

    }
    password = password.toLowerCase();
    for (const index in password) {
        let asciElement = password.charCodeAt(index);
        if (asciElement < 48 || (asciElement > 57 && asciElement < 97) || asciElement > 122) {
            isWithIncorectElement = true;
        }

        if (asciElement >= 48 && asciElement <= 57) {
            digit++;
        }

    }
    if (isWithIncorectElement) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    if (digit < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');

    }
}
solve('logIn');