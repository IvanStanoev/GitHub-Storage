function solve6(input) {


    let locationNum = Number(input[0]);

    let index = 1;
    let expectIncome = Number(input[index]);
    index++;
    let days = Number(input[index]);
    index++;
    let avgIncome = 0;
    let currentIncome = 0;
    let currentDay = 0;

    for (let i = 0; i < locationNum; i++) {

        currentDay++;
        let sumOfIncome = 0;

        for (j = 1; j <= days; j++) {

            currentIncome = Number(input[index]);

            sumOfIncome += currentIncome;
            index++;

        }

        avgIncome = sumOfIncome / days;

        if (avgIncome >= expectIncome) {
            console.log(`Good job! Average gold per day: ${avgIncome.toFixed(2)}.`);
        } else if (avgIncome < expectIncome) {
            console.log(`You need ${(expectIncome - avgIncome).toFixed(2)} gold.`);
        }

        expectIncome = Number(input[index]);
        index++;
        days = Number(input[index]);
        index++;

    }

}
solve6(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);