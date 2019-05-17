function solve(params) {
    let byWhat = params.pop();
    let noForJS = params.pop();
    let viewS = {};
    let likeS = {};

    for (let line of params) {
        if (line.includes('-')) {
            let [word, countViews] = line.split('-');
            if (!viewS.hasOwnProperty(word)) {
                viewS[word] = 0;
            }
            viewS[word] += +countViews;
        } else {
            let [likeDISLIKE, word] = line.split(':')
            if (!likeS.hasOwnProperty(word)) {
                likeS[word] = 0;
            }
            if (likeDISLIKE === 'like') {
                likeS[word]++;
            } else {
                likeS[word]--;
            }
        }
    }

    if (byWhat === 'by likes') {
        let final1 = Object.entries(likeS).sort((a, b) => b[1] - a[1]);
        for (let [name, count] of final1) {
            if (!viewS.hasOwnProperty(name)) {
                console.log(`${name} - ${viewS[name]=0} views - ${count} likes`);
            } else {
                console.log(`${name} - ${viewS[name]} views - ${count} likes`);
            }
        }
    } else {
        let final = Object.entries(viewS).sort((a, b) => b[1] - a[1]);
        for (let [name, count] of final) {
            if (!likeS.hasOwnProperty(name)) {
                console.log(`${name} - ${count} views - ${likeS[name]=0} likes`);
            } else {
                console.log(`${name} - ${count} views - ${likeS[name]} likes`);
            }
        }
    }
}
// solve(['Eninem Venom-500',
//     'like:Eninem Venom',
//     'Funny Cats-700',
//     'like:Funny Cats',
//     'like:Funny Cats',
//     'Eninem Venom-300',
//     'stats time',
//     'by likes'
// ]);
solve(['Eminem Ringer-300',
    'Messi Top Goals-500',
    'like:Eminem Ringer',
    'like:Eminem Ringer',
    'dislike:Eminem Ringer',
    'stats time',
    'by views'
]);