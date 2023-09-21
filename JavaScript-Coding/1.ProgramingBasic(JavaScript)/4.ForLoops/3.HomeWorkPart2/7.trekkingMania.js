function trekkingMania(input) {

    let index = 0;
    let numberOfGroups = Number(input[index]);
    index++;

    let totalPeopleInGroups = 0;

    let musalaCount = 0;
    let monblanCount = 0;
    let kilimandjCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    for (let i = 0; i < numberOfGroups; i++) {

        let numberOfPeopleInGroups = Number(input[index]);
        index++;

        totalPeopleInGroups += numberOfPeopleInGroups;

        if (numberOfPeopleInGroups <= 5) {
            musalaCount += numberOfPeopleInGroups;
        } else if (numberOfPeopleInGroups > 5 && numberOfPeopleInGroups <= 12) {
            monblanCount += numberOfPeopleInGroups;
        } else if (numberOfPeopleInGroups > 12 && numberOfPeopleInGroups <= 25) {
            kilimandjCount += numberOfPeopleInGroups;
        } else if (numberOfPeopleInGroups > 25 && numberOfPeopleInGroups <= 40) {
            k2Count += numberOfPeopleInGroups;
        } else {
            everestCount += numberOfPeopleInGroups;
        }


    }
    let percMusala = (musalaCount / totalPeopleInGroups) * 100;
    let percMonblan = (monblanCount / totalPeopleInGroups) * 100;
    let percKilimandjaro = (kilimandjCount / totalPeopleInGroups) * 100;
    let percK2 = (k2Count / totalPeopleInGroups) * 100;
    let percEverest = (everestCount / totalPeopleInGroups) * 100;


    console.log(`${percMusala.toFixed(2)}%`);

    console.log(`${percMonblan.toFixed(2)}%`);

    console.log(`${percKilimandjaro.toFixed(2)}%`);

    console.log(`${percK2.toFixed(2)}%`);

    console.log(`${percEverest.toFixed(2)}%`);


}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])