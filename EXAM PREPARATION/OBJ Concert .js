function solve(input) {

    let bandTime = {};
    let bandMembers = {};
    let totalTime = 0;
    let bandToPrintMembers = input.pop();

    for (let line of input) {
        if (line === 'start of concert') {
            break;
        }

        let [command, bandname, membersTIME] = line.split('; ');
        if (command === 'Add') {
            let members = membersTIME.split(', ');

            if (!bandMembers.hasOwnProperty(bandname)) {
                bandMembers[bandname] = new Set();
            }
            for (let member of members) {
                bandMembers[bandname].add(member);
            }
        } else if (command === 'Play') {
            let time = +membersTIME;
            totalTime += time;

            if (!bandTime.hasOwnProperty(bandname)) {
                bandTime[bandname] = 0;
            }
            bandTime[bandname] += time;
        }
    }
    console.log(`Total time: ${totalTime}`);
    let sortedBands = Object.entries(bandTime).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0])
    });
    for (let [name, time] of sortedBands) {
        console.log(`${name} -> ${time}`);
    }
    console.log(bandToPrintMembers);
    let membersToPrint = bandMembers[bandToPrintMembers].forEach(mem => {
        console.log(`=> ${mem}`);

    })



}
solve(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones'
]);
// solve(['Add; The Beatles; John Lennon, Paul McCartney',
//     'Add; The Beatles; Paul McCartney, George Harrison',
//     'Add; The Beatles; George Harrison, Ringo Starr',
//     'Play; The Beatles; 3698',
//     'Play; The Beatles; 3828',
//     'start of concert',
//     'The Beatles'
// ]);