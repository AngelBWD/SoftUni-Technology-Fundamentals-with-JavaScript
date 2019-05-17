function solve(n1, n2, n3) {

    let arr = [n1, n2, n3];
    let positive = 0;
    let negative = 0;
    let demo = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            demo++;
        }
    }
    if (negative === 0 || negative === 2 || demo !== 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}
solve(5, -12, 0);