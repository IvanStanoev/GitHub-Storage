function cake(input) {

    let index = 0;
    let l = Number(input[index]);
    index++;
    let w = Number(input[index]);
    index++;
    let command = input[index];
    let totalPieces = l * w;

    while (command !== "STOP") {
        let counter = Number(command);
        let currentPieces = totalPieces - counter;

        if (currentPieces <= 0) {
            let diff = Math.abs(currentPieces);
            console.log(`No more cake left! You need ${diff} pieces more.`);
            return;
        }

        totalPieces = currentPieces;
        index++;
        command = input[index];
    }
    console.log(`${totalPieces} pieces are left.`);

}
cake(["10",
    "10",
    "20",
    "20", "20", "20", "21"])