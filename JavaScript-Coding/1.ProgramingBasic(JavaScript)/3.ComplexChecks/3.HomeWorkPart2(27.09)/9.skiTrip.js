function skiTrip(input) {

    let days = Number(input[0]);
    let typeRoom = input[1];
    let evaluation = input[2];

    let pricePerNight = 0;
    let totalCost = 0;

    switch (typeRoom) {

        case "room for one person": pricePerNight = 18.00;


            if (days < 10) {
                totalCost = ((days - 1) * pricePerNight);

            } else if (days >= 10 && days <= 15) {
                totalCost = ((days - 1) * pricePerNight);

            } else if (days > 15) {
                totalCost = ((days - 1) * pricePerNight);



            }
            if (evaluation === "positive") {
                totalCost = totalCost * 1.25;

            } else if (evaluation === "negative") {
                totalCost = totalCost * 0.90;
            }
            break;



        case "apartment": pricePerNight = 25.00;


            if (days < 10) {
                totalCost = ((days - 1) * pricePerNight) * 0.70;

            } else if (days >= 10 && days <= 15) {
                totalCost = ((days - 1) * pricePerNight) * 0.65;

            } else if (days > 15) {
                totalCost = ((days - 1) * pricePerNight) * 0.50;



            }
            if (evaluation === "positive") {
                totalCost = totalCost * 1.25;

            } else if (evaluation === "negative") {
                totalCost = totalCost * 0.90;
            }
            break;


        case "president apartment": pricePerNight = 35.00;


            if (days < 10) {
                totalCost = ((days - 1) * pricePerNight) * 0.90;

            } else if (days >= 10 && days <= 15) {
                totalCost = ((days - 1) * pricePerNight) * 0.85;

            } else if (days > 15) {
                totalCost = ((days - 1) * pricePerNight) * 0.80;


            }
            if (evaluation === "positive") {
                totalCost = totalCost * 1.25;

            } else if (evaluation === "negative") {
                totalCost = totalCost * 0.90;
            }
            break;

    }
    console.log(totalCost.toFixed(2));

}
skiTrip(["14", "apartment", "positive"])