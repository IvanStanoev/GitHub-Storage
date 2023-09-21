function tennisRanklist(input) {
    let index = 0;

    let numTornaments = Number(input[index]);
    index++;

    let strPoints = Number(input[index]);
    index++;

    let score = 0;
    let winCount = 0;

    for (let i = 0; i < numTornaments; i++) {

        let type = input[index];
        index++;

        if (type === "W") {

            score += 2000;
            winCount++;

        } else if (type === "F") {
            score += 1200;

        } else {
            score += 720;

        }

    }

    let totalPoint = strPoints + score;
    console.log(`Final points: ${totalPoint}`);

    let avrPoints = Math.floor(score / numTornaments);
    console.log(`Average points: ${avrPoints}`);

    let totalWin = winCount / numTornaments * 100;
    console.log(`${totalWin.toFixed(2)}` + "%");
}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);