function isPrime(num) {

    if (num === 2) {
        return true;
    } else if (num > 1) {
        for (var i = 2; i < num; i++) {

            if (num % i !== 0) {
                console.log(true);
                return;
            } else if (num === i * i) {
                console.log(false);
                return;

            } else {
                console.log(false);
                return;
            }
        }
    } else {
        console.log(false);
        return;
    }

}

isPrime(8);