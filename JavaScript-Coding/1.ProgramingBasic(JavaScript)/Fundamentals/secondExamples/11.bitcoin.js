function bitcoinMining(arr) {

    let days = 0;
    let gramsCount = 0;
    let goldPricePerGram = 67.51;
    let bitcoinPrice = 11949.16;
    let totalSum = 0;
    let bitcoinCount = 0;
    let firstPurchased = 0;

    for (let i = 0; i < arr.length; i++) {

        days += 1;
        grams = arr[i];
        if (days % 3 == 0) {
            grams *= 0.70;
        }
        totalSum += grams * goldPricePerGram;

        if (totalSum >= bitcoinPrice) {

            bitcoinCount += 1;
            totalSum = totalSum - bitcoinPrice;

            if (bitcoinCount == 1) {
                firstPurchased = days;
            }
        }
        gramsCount += grams;
    }
    
    if (bitcoinCount != 0) {
        console.log(`Bought bitcoins: ${bitcoinCount}`);
        console.log(`Day of the first purchased bitcoin: ${firstPurchased}`);
        console.log(`Money left: ${totalSum.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${bitcoinCount}`);
        console.log(`Money left: ${totalSum.toFixed(2)} lv.`);
    }
}
bitcoinMining([100, 200, 300]);
//bitcoinMining([50, 100]);
//bitcoinMining([3124.15, 504.212, 2511.124]);