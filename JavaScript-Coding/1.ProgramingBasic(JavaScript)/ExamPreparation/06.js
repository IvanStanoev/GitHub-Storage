function parking(input) {

    let days = Number(input[0]);
    let hoursForOneDay = Number(input[1]);

    let dayCounter = 0;
    let hourCounter = 0;
    let totalTAx = 0;

    for (let day = 1; day <= days; day++) {

        let dayTax = 0;
        dayCounter++;

        for (let hour = 1; hour <= hoursForOneDay; hour++) {

            hourCounter++;
            if (day % 2 !== 0 && hour % 2 === 0) {
                dayTax += 1.25;
            } else if (day % 2 === 0 && hour % 2 !== 0) {
                dayTax += 2.5;
            } else {
                dayTax += 1;
            }
        }
        console.log(`Day: ${dayCounter} - ${dayTax.toFixed(2)} leva`);
        totalTAx += dayTax;
    }
    console.log(`Total: ${totalTAx.toFixed(2)} leva`);
}
parking(["5", "2"]);