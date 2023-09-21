function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let priceTrip = 0;
    let place = 0;
    let destination = 0;

    if (season == "summer") {
        place = "Camp"
    } else if (season == "winter") {
        place = "Hotel"
    }

    if (budget <= 100) {
        destination = "Bulgaria"
    } else if (budget <= 1000) {
        destination = "Balkans"
    } else if (budget > 1000) {
        destination = "Europe"
    }

    if (destination !== "Bulgaria" && destination !== "Balkans" || destination === "Europe") {
        place = "Hotel"
    }

    switch (destination) {

        case "Bulgaria":
            if (season == "summer") {
                priceTrip = budget * 0.30;
            } else if (season == "winter") {
                priceTrip = budget * 0.70;
            }
            break;
        case "Balkans":
            if (season == "summer") {
                priceTrip = budget * 0.40;
            } else if (season == "winter") {
                priceTrip = budget * 0.80;
            }
            break;
        case "Europe": priceTrip = budget * 0.90;

            break;

    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${priceTrip.toFixed(2)}`);

}
journey(["678.53", "winter"])