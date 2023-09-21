function lunchBreak(input) {

    let name = input[0];
    let timePerEpisode = Number(input[1]);
    let timeForBreak = Number(input[2]);

    let timeForLunch = timeForBreak * (1 / 8);
    let timeForRest = timeForBreak * (1 / 4);

    let lunchPlusRestTime = timeForLunch + timeForRest;
    let leftTime = timeForBreak - lunchPlusRestTime;

    if (leftTime >= timePerEpisode) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(leftTime - timePerEpisode)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(timePerEpisode - leftTime)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])