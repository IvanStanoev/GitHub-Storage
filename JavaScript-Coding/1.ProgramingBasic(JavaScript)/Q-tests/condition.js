function condition(input) {

    let season = input[0];
    let groupType = input[1];
    let studentsCount = Number(input[2]);
    let nigthCounts = Number(input[3]);

    let sport = 0;
    let money = 0;

    switch (season) {
        case "Winter":
            if (groupType === "girls" || groupType === "boys") {
                priceForNight = 9.60;
                money = studentsCount * nigthCounts * priceForNight;
                if (groupType === "girls") {
                    sport = "Gymnastics";
                } else if (groupType === "boys") {
                    sport = "Judo";
                }
            } else if (groupType === "mixed") {
                priceForNight = 10;
                money = studentsCount * nigthCounts * priceForNight;
                sport = "Ski";
            }
            break;

        case "Spring":
            if (groupType === "girls" || groupType === "boys") {
                priceForNight = 7.20;
                money = studentsCount * nigthCounts * priceForNight;
                if (groupType === "girls") {
                    sport = "Athletics";
                } else if (groupType === "boys") {
                    sport = "Tennis";
                }
            } else if (groupType === "mixed") {
                priceForNight = 9.50;
                money = studentsCount * nigthCounts * priceForNight;
                sport = "Cycling";
            }
            break;
        case "Summer":
            if (groupType === "girls" || groupType === "boys") {
                priceForNight = 15;
                money = studentsCount * nigthCounts * priceForNight;
                if (groupType === "girls") {
                    sport = "VolleyBall";
                } else if (groupType === "boys") {
                    sport = "Football";
                }
            } else if (groupType === "mixed") {
                priceForNight = 20;
                money = studentsCount * nigthCounts * priceForNight;
                sport = "Swimming";
            }
            break;

    }

    let discount = 0;
    if (studentsCount >= 50) {
        discount = money * 0.50;
    } else if (studentsCount >= 20 && studentsCount < 50) {
        discount = money * 0.15;
    } else if (studentsCount >= 10 && studentsCount < 20) {
        discount = money * 0.05;
    }

    totalMoney = money - discount
    console.log(`${sport} ${totalMoney.toFixed(2)} lv.`);

}
//condition(["Spring", "girls", 20, 7]);
condition(["Winter", "mixed", 9, 15]);
//condition(["Summer", "boys", 60, 7]);
//condition(["Spring", "mixed", 17, 14]);