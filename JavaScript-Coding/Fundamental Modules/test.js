function demo(input) {

    let index = 0;
    let nDays = Number(input[index]);
    index++;
    let mKilometers = Number(input[index]);
    index++;
    let percentage = Number(input[index])
    let currentKilo = 0;
    let sumOfKilo = 0;
    currentDay = 0;

    for (let i = 0; i < nDays; i++) {

        currentDay++;
        if (currentDay == 1) {
            currentKilo = mKilometers + (mKilometers * (percentage / 100));
        } else if (currentDay == 2) {
            currentKilo += (currentKilo * (percentage / 100));
        } else if (currentDay == 3) {
            currentKilo += (currentKilo * (percentage / 100));
        } else if (currentDay == 4) {
            currentKilo += (currentKilo * (percentage / 100));
        } else if (currentDay == 5) {
            currentKilo += (currentKilo * (percentage / 100));
        } else if (currentDay == 6) {
            currentKilo += (currentKilo * (percentage / 100));
        }

        sumOfKilo += currentKilo;
        index++;
        percentage = Number(input[index]);

    }
    let totalKilometers = sumOfKilo + mKilometers;
    let diff = Math.abs(1000 - totalKilometers);
    if (totalKilometers >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(diff)} more kilometers!`);
    } else if (totalKilometers < 1000) {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(diff)} more kilometers`);
    }
}
demo(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"])
