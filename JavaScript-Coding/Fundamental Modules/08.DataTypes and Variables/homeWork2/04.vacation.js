function vacation(group, type, day) {

    let singlePrice = 0;
    let totalSum = 0;
    switch (type) {
        case "Students":
            if (day === "Friday") {
                singlePrice += 8.45;
            } else if (day === "Saturday") {
                singlePrice += 9.80;
            } else if (day === "Sunday") {
                singlePrice += 10.46;
            }
            totalSum = group * singlePrice;
            if (group >= 30) {
                totalSum *= 0.85;
            }
            break;
        case "Business":
            if (day === "Friday") {
                singlePrice += 10.90;
            } else if (day === "Saturday") {
                singlePrice += 15.60;
            } else if (day === "Sunday") {
                singlePrice += 16;
            }
            totalSum = group * singlePrice;
            if (group >= 100) {
                totalSum = (group - 10) * singlePrice;
            }
            break;
        case "Regular":
            if (day === "Friday") {
                singlePrice += 15;
            } else if (day === "Saturday") {
                singlePrice += 20;
            } else if (day === "Sunday") {
                singlePrice += 22.50;
            }
            totalSum = group * singlePrice;
            if (group >= 10 && group <= 20) {
                totalSum *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${totalSum.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");