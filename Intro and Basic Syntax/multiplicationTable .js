function table(n) {
    let num = n;
    for (let i = 1; i <= 10; i++) {
        let sum = n*i;
        console.log(`${num} X ${i} = ${sum}`) 
    }
}
table(5);