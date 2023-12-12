function shootForTheWin(arr) {

    let targets = [];
    targets = arr.shift().split(' ').map(Number);
    let command = arr.shift();
    let counter = 0;

    while (command != "End") {

        let currentTarget = Number(command);
        let pointsOfTarget = 0;

        if (currentTarget > targets.length - 1) {

            command = arr.shift();
            continue;

        } else if (targets.indexOf(currentTarget)) {

            pointsOfTarget = Number(targets[currentTarget]);
            targets[currentTarget] = -1;

            if (targets[currentTarget] < 0) {
                counter++;
            }
        }

        for (let i = 0; i < targets.length; i++) {

            if (targets[i] !== -1) {

                if (pointsOfTarget < Number(targets[i])) {
                    targets[i] -= pointsOfTarget;

                } else if (pointsOfTarget >= Number(targets[i])) {
                    targets[i] += pointsOfTarget;
                }

            }

        }

        command = arr.shift();

    }

    console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
}
shootForTheWin([
    "24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"
])
shootForTheWin([
    "30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"
])