function oscars(input) {
    let index = 0;
    let name = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let judgeNumber = Number(input[index]);
    index++;
    
    let pointsFromJudge = 0;
    let points = 0;

    for (i = 0; i <= judgeNumber ; i++) {
        
        pointsFromJudge = Number(input[index]);
        
    }

    let diff = Math.abs(points - 1250.5);
    if (points >= 1250.5) {
        console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${diff.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${nameOfActor} you need ${diff.toFixed(1)} more!`)
    }
    
}
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])


    points = points  + ((length1 * m) / 2);
    points2 = points1 + ((length1 * m) / 2);
    points3 = points2 + ((length1 * m) / 2);
    points4 = points3 + ((length1 * m) / 2)