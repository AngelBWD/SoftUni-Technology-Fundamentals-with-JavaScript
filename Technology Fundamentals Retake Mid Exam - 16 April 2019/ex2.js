function solve(input) {
    let ourList = input.shift().split(' ');

    for (let el of input) {
        if (el === 'No Money') {
            console.log(ourList.join(' '));
            return;

        }
        let tokens = el.split(' ');
        let command = tokens[0];
        let gift = tokens[1];
        let ind = +tokens[2]

        if (command === 'OutOfStock') {

            while (true) {
                let index = ourList.indexOf(gift);
                if (index !== -1) {
                    ourList.splice(index, 1, 'None');
                    ourList = ourList.filter((x) => {
                        return x !== 'None';
                    })
                } else {
                    break;
                }
            }
            //  console.log(ourList);

        } else if (command === 'Required') {
           
            if (ourList.length >= ind) {
               
                ourList.splice(ind, 1, gift);
            }
        } else if (command === 'JustInCase') {
            ourList.pop();
            ourList.push(gift);
        }
        // console.log(ind);
    }
    console.log(ourList.join(' '));




}
solve([ 'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
'OutOfStock Eggs',
'Required Spoon 2',
'JustInCase ChocolateEgg',
'No Money' ]);