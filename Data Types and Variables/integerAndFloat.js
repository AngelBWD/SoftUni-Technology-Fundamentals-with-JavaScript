function solve(n1, n2, n3) {
    
    let sum = 0;
    sum = n1 + n2 + n3;
    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}
solve(2, 3, 4.4);