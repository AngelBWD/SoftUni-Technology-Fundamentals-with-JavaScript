function solve(num) {
    
    let demo = num.toString().split('');
    let countDigit = demo.length;
    let sumOfnum = 0;
    let result;

    for (let i = 0; i < demo.length; i++) {
        sumOfnum += +demo[i];
    }
    result = sumOfnum / countDigit;
    if (result > 5) {
        console.log(num);
    } else {
        
        }
        
    }

solve(101);