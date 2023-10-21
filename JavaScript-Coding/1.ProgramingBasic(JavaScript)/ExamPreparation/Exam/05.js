function solve5(input) {

    let index = 0;
    let command = input[index];

    let adults = 0;
    let kids = 0;

    while (command !== "Christmas") {

        let currentAge = Number(input[index]);

        if (currentAge <= 16) {
            kids++;
        } else if (currentAge > 16) {
            adults++;
        }

        index++;
        command = input[index];

    }

    priceForToys = kids * 5;
    priceForSweaters = adults * 15;

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${priceForToys}`);
    console.log(`Money for sweaters: ${priceForSweaters}`);

}
solve5(["16", "20", "46", "12", "8", "20", "49", "Christmas"]);