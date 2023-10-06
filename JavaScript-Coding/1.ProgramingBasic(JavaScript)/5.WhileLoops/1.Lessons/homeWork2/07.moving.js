function moving(input) {

    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++

    let command = input[index];

    let totalMeters = w * l * h;
    let sum = 0;

    while (command !== "Done") {
        let currentMeters = Number(command);
        sum += currentMeters;

        if (sum > totalMeters) {
            let diff = Math.abs(sum - totalMeters);
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            return;
        }
        index++;
        command = input[index];
    }

    if (sum < totalMeters) {
        let diff = totalMeters - sum;
        console.log(`${diff} Cubic meters left.`);
    }
}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])