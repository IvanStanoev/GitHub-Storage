function account(input) {

    let total = 0;
    let index = 0;
    let currentRow = input[index];

    while (currentRow !== "NoMoreMoney") {

        let number = Number(currentRow);

        if (number < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        console.log(`Increase: ${number.toFixed(2)}`);
        total += number;

        index++;
        currentRow = input[index];

    }
    console.log(`Total: ${total.toFixed(2)}`);
}
account(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])