function smallestTwoNumbers(arr) {
    
    let k = arr.sort((a, b) => a - b).splice(0, 2);
    console.log(k.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);