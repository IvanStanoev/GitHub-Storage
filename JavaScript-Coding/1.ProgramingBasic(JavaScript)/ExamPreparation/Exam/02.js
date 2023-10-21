function solve2(input) {

    let name = input[0];
    let budget = Number(input[1]);
    let beerCount = Number(input[2]);
    let chipsCount = Number(input[3]);

    moneyForBeer = beerCount * 1.20;
    oneChipsPrice = moneyForBeer * 0.45;
    moneyForChips = Math.ceil(chipsCount * oneChipsPrice);
    totalCash = moneyForBeer + moneyForChips;

    let diff = Math.abs(totalCash - budget);
    if (totalCash <= budget) {
        console.log(`${name} bought a snack and has ${diff.toFixed(2)} leva left.`);
    } else if (budget < totalCash) {
        console.log(`${name} needs ${diff.toFixed(2)} more leva!`);
    }
}
solve2(["George", "10", "2", "3"]);