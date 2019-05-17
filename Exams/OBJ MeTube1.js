function solve(params) {
    let videos = {};
    let sortingCriteria = params.pop().split(' ')[1];
    params.pop();

    for (let param of params) {
        if (param.includes('-')) {
            let [videoName, viewsCount] = param.split('-');

            if (!videos.hasOwnProperty(videoName)) {
                videos[videoName] = {
                    views: 0,
                    likes: 0
                };
            }

            videos[videoName].views += Number(viewsCount);
        } else {
            let [rate, videoName] = param.split(':');

            if (videos.hasOwnProperty(videoName)) {
                videos[videoName].likes += rate === 'like' ? 1 : -1;
            }
        }
    }
    if (sortingCriteria === 'likes') {
        let final = Object.entries(videos).sort((a, b) => b[1].likes - a[1].likes);
        for (let el of final) {
            let vid = el[0];
            let lik = el[1].likes;
            let view = el[1].views;
            console.log(`${vid} - ${view} views - ${lik} likes`);
        }

    } else {
        let final = Object.entries(videos).sort((a, b) => b[1].views - a[1].views);
        for (let el of final) {
            let vid = el[0];
            let lik = el[1].likes;
            let view = el[1].views;
            console.log(`${vid} - ${view} views - ${lik} likes`);
        }
    }

}
solve(['Eninem Venom-500',
    'like:Eninem Venom',
    'Funny Cats-700',
    'like:Funny Cats',
    'like:Funny Cats',
    'Eninem Venom-300',
    'stats time',
    'by likes'
]);
solve(['Eminem Ringer-300',
    'Messi Top Goals-500',
    'like:Eminem Ringer',
    'like:Eminem Ringer',
    'dislike:Eminem Ringer',
    'stats time',
    'by views'
]);