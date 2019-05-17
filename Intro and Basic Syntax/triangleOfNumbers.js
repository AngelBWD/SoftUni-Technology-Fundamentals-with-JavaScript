function triangle(num) {
    let sequence = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 0; j < i; j++) {
            sequence += i + " ";
        }
        console.log(sequence);
        sequence = "";
    }

}
triangle(5);