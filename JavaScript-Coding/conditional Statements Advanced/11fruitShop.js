function fruitShop(input) {

    let type = input[0];
    let day = input[1];
    let qty = Number(input[2]);
    let sum = 0;

    switch (day) {

        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (type === "banana") {
                sum = qty * 2.50;
            } else if (type === "apple") {
                sum = qty * 1.20;
            } else if (type === "orange") {
                sum = qty * 0.85;
            } else if (type === "grapefruit") {
                sum = qty * 1.45;
            } else if (type === "kiwi") {
                sum = qty * 2.70;
            } else if (type === "pineapple") {
                sum = qty * 5.50;
            } else if (type === "grapes") {
                sum = qty * 3.85;
            }
            if (sum != 0) {
                console.log(sum.toFixed(2));
            } else {
                console.log("error");
            }
            break;

        case "Saturday":
        case "Sunday":
            if (type === "banana") {
                sum = qty * 2.70;
            } else if (type === "apple") {
                sum = qty * 1.25;
            } else if (type === "orange") {
                sum = qty * 0.90;
            } else if (type === "grapefruit") {
                sum = qty * 1.60;
            } else if (type === "kiwi") {
                sum = qty * 3.00;
            } else if (type === "pineapple") {
                sum = qty * 5.60;
            } else if (type === "grapes") {
                sum = qty * 4.20;
            }
            if (sum != 0) {
                console.log(sum.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
            break;
    }

}
fruitShop(["orange", "Sunday", "3"]);