function solve(arr) {

    let arra = +(arr.pop());
    let newArr = [];

    for (let i = 0; i < arr.length; i += arra) {

        newArr.push(arr[i]);

    }
    console.log(newArr.join(" "));

}
solve(['5', '20', '31', '4', '20', '2'])