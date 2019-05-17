function odd(n) {
    let sumOdd = 0; 
    for (let i = 1; i <= 2*n; i+=2) {
        sumOdd+=i;
           console.log(i)
    }
    console.log(`Sum: ${sumOdd}`);
}
odd(6);