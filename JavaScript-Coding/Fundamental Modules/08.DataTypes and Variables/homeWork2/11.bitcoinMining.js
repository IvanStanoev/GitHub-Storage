function bitcoinMining(arr) {

    let index = 0;
    let count = 0;
    let day = 0;
    let money = 0;
    let oneGram = 67.51;
    let oneCoin = 11949.16;
    let firstBuyDay = 0;

    for (let i = 1; i <= arr.length; i++) {

        let grams = Number(arr[index]);
        day++;

        if (day == 3) {
            grams *= 0.70;
        }
        money += oneGram * grams;

        if (money > oneCoin) {
            count += Math.floor(money / oneCoin);
            money %= oneCoin;

        }

        index++;
    }
    if (count != 0) {
        console.log(`Bought bitcoins: ${count}`);
        console.log(`Day of the first purchased bitcoin: ${firstBuyDay}`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${count}`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    }
}
bitcoinMining([100, 200, 300]);