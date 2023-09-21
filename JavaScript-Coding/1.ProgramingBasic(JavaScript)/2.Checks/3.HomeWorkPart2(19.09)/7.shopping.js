function shopping(input) {

    let budgetPeter = Number(input[0]);
    let numVideoCards = Number(input[1]);
    let numCpu = Number(input[2]);
    let numRam = Number(input[3]);

    let vCardPrice = numVideoCards * 250;
    let cpuPrice = numCpu * (vCardPrice * 0.35);
    let ramPrice = numRam * (vCardPrice * 0.10);

    let totalPrice = vCardPrice + cpuPrice + ramPrice;

    if (numVideoCards > numCpu ) {
        totalPrice = totalPrice - (totalPrice * 0.15);
    }
    
    let diff = Math.abs(totalPrice - budgetPeter);
    if (totalPrice <= budgetPeter) {
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    } else {
        totalPrice > budgetPeter;
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }
}
shopping(["920.45",
"3",
"1",
"1"])