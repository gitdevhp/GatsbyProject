function checkURL() {
    const queryString = window.location.search;
    console.log(`Querystring ${queryString} detected.`);
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('game')) {
        startGame();
        console.log('Running startGame Function')
    };
    const stage = urlParams.get('step');
    setScene(stage);
}

window.addEventListener('load', checkURL);