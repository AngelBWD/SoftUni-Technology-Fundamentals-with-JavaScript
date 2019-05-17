function solve(mas) {

    let result = [];
    let arr = [mas[0]];
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] < mas[i + 1]) {
            arr.push(mas[i + 1])
        }

    }

    console.log(арр.join(" "));

}
solve([20, 3, 2, 15, 6, 1]);