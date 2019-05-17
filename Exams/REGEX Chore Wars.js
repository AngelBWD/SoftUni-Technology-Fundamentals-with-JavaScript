function solve(params) {
    let popi = params.pop();
    let timeDishes = 0;
    let timeCleaning = 0;
    let timeLaundry = 0;
    let totalMinutes = 0;


    let regDishes = /(?<=<)[a-z0-9]+(?=>)/g;
    let regCleaning = /(?<=\[)[A-Z0-9]+(?=])/g;
    let regLaundry = /(?<=\{).+(?=})/g;

    for (let line of params) {

        if (line.match(regDishes)) {
            let match = line.match(regDishes)
            let split = match[0].split('');
            for (let i = 0; i < split.length; i++) {
                if (Number.isInteger(+split[i])) {   //!
                    timeDishes += +split[i];
                    totalMinutes += +split[i];
                }
            }
        } else if (line.match(regCleaning)) {
            let match = line.match(regCleaning)
            let split = match[0].split('');
            for (let i = 0; i < split.length; i++) {
                if (Number.isInteger(+split[i])) {    //!
                    timeCleaning += +split[i];
                    totalMinutes += +split[i];

                }
            }
        } else if (line.match(regLaundry)) {
            let match = line.match(regLaundry)
            let split = match[0].split('');
            for (let i = 0; i < split.length; i++) {
                if (Number.isInteger(+split[i])) {
                    timeLaundry += +split[i];
                    totalMinutes += +split[i];

                }
            }
        }
    }
    console.log(`Doing the dishes - ${timeDishes} min.`);
    console.log(`Cleaning the house - ${timeCleaning} min.`);
    console.log(`Doing the laundry - ${timeLaundry} min.`);
    console.log(`Total - ${totalMinutes} min.`);
}

// solve(['Vo.|1zps {lo2a}zgVGk{1)N+',
//     'Asdad123zxc{3]',
//     'R[A [F67G9C]6e3C@',
//     'MVo.|1zpshM<9) <d85ifkh59votu>@',
//     '<dm0g2y34mw1kpds2>iD|"p',
//     'wife is happy'
// ]);
solve(['-^hr5a65j48<dd6f5h4dhfd>456sga_+',
    'DHdhy4*3[T2HOU87KRC]sA/@',
    'Sda%t]gf{%hjK8f34)!fG1re}-+htG%v',
    'wife is happy'
]);