function toyShop(input) {
    let priceTrip = Number(input[0]);
    let pazzle = Number(input[1]);
    let talkingD = Number(input[2]);
    let teddyB = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let toysCount = pazzle + talkingD + teddyB +
        minions + trucks;
    let toysPrice = pazzle * 2.60 + talkingD * 3 + teddyB * 4.10 +
        minions * 8.20 + trucks * 2;

    if (toysCount >= 50) {
        toysPrice = toysPrice * 0.75;
    }

    toysPrice = toysPrice * 0.90;
    let diff = Math.abs(toysPrice - priceTrip);

    if (toysPrice >= priceTrip) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"])