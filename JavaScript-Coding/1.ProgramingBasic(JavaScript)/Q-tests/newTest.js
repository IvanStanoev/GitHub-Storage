function rentCar(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let type = 0;
    let classType = 0;

    if (budget <= 100) {
        classType = "Economy class";
        switch (season) {
            case "Summer":
                type = "Cabrio";
                price = budget * 0.35;
                break;
            case "Winter":
                type = "Jeep";
                price = budget * 0.65;
                break;
        }
    }

    if (budget > 100) {
        classType = "Compact class";
        switch (season) {
            case "Summer":
                type = "Cabrio";
                price = budget * 0.45;
                break;
            case "Winter":
                type = "Jeep";
                price = budget * 0.80;
                break;
        }
    }

    if (budget > 500) {
        classType = "Luxury class";
        type = "Jeep";
        switch (season) {
            case "Summer":
            case "Winter":
                price = budget * 0.90;
        }
    }
    console.log(classType);
    console.log(`${type} - ${price.toFixed(2)}`);

}
//rentCar([450, "Summer"]);
//rentCar([450, "Winter"]);
rentCar([1010, "Summer"]);