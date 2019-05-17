function solve(input) {
    let waterAmount = +input.pop(); //1250
    let params = input[0].split(`#`);
 
    let cells = [];
    let totalFire = 0;
    let effort = 0;
 
    for (let param of params) {
        let command = param.split(` =`)[0];
        let value = +param.split(` =`)[1];
 
 
        if (command === `High` && value >= 81 && value <= 125 && waterAmount >= value) {
            waterAmount -= value;
            effort += (value * 1.25) - value;
            totalFire += value;
            cells.push(value)
        } else if (command === `Medium` && value >= 51 && value <= 80 && waterAmount >= value) {
            waterAmount -= value;
            effort += (value * 1.25) - value;
            totalFire += value;
            cells.push(value)
        } else if (command === `Low` && value > 0 && value <= 50 && waterAmount >= value) {
            waterAmount -= value;
            effort += (value * 1.25) - value;
            totalFire += value;
            cells.push(value)
        }
    }
    console.log("Cells:")
    for (let params of cells) {
        console.log(` - ${params}`)
    }
    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`)
 
}
 
//solve(['High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77',220]);
solve(['High = 89#Meduim = 53#Low = 28#Medium = 77#Low = 23 ',1250]);