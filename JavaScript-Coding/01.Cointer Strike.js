function solve(input) {

    let energy = Number(input[0]);
    let count = 0;
    let distance = 0;

    for (let i = 1; i < input.length; i++) {

        distance = input[i];

        if (distance == "End of battle") {
            console.log(`Won battles: ${count}. Energy left: ${energy}`);
            break;
        } else if (energy <= 0 || distance > energy) {
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            break;
        }

        energy -= Number(distance);
        count++;

        if (count % 3 == 0) {
            energy += count;
        }

    }

}
solve(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"
])

solve(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"
])
