function bonus(input) {

    let num = Number(input[0]);
    let bonusPoints = 0.0;

    if (num <= 100) {
        bonusPoints = 5;
    } else if (num > 1000) {
        bonusPoints = num * 0.10;
    } else {
        bonusPoints = num * 0.20;
    }
    if (num % 2 == 0) {
        bonusPoints += 1;
    } else if (num % 10 == 5) {
        bonusPoints += 2;
    }
    console.log(bonusPoints);
    console.log(num + bonusPoints);
}
bonus(["20"])
bonus(["175"])
bonus(["2703"])
bonus(["15875"])