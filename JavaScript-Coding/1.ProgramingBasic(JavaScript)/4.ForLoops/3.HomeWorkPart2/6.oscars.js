function oscars(input) {

    let actor = input[0];
    let points = Number(input[1]);

    for (let x = 3; x <= Number(input[2]) * 2 + 2; x += 2) {
        points += ((input[x].length * Number(input[x + 1])) / 2);

        if (points >= 1250.5) {
            break;
        }

    }
    let diff = Math.abs(points - 1250.5);
    if (points >= 1250.5) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`)
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