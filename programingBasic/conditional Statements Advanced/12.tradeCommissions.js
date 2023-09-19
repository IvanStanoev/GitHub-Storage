function trade(input) {

    let town = input[0];
    let qty = Number(input[1]);
    let commission = 0;

    if (qty < 0) {
        console.log("error");
        return;
    }

    switch (town) {
        case "Sofia":
            if (qty >= 0 && qty <= 500) {
                commission = qty * 0.05;
            } else if (qty > 500 && qty <= 1000) {
                commission = qty * 0.07;
            } else if (qty > 1000 && qty <= 10000) {
                commission = qty * 0.08;
            } else if (qty > 10000) {
                commission = qty * 0.12;
            }
            console.log(commission.toFixed(2));
            break;
        case "Varna":
            if (qty >= 0 && qty <= 500) {
                commission = qty * 0.045;
            } else if (qty > 500 && qty <= 1000) {
                commission = qty * 0.075;
            } else if (qty > 1000 && qty <= 10000) {
                commission = qty * 0.10;
            } else if (qty > 10000) {
                commission = qty * 0.13;
            }
            console.log(commission.toFixed(2));
            break;
        case "Plovdiv":
            if (qty >= 0 && qty <= 500) {
                commission = qty * 0.055;
            } else if (qty > 500 && qty <= 1000) {
                commission = qty * 0.08;
            } else if (qty > 1000 && qty <= 10000) {
                commission = qty * 0.12;
            } else if (qty > 10000) {
                commission = qty * 0.145;
            }
            console.log(commission.toFixed(2));
            break;

        default:
            if (town !== "Sofia" || town !== "Varna" || town !== "Plovdiv") {
                console.log("error");
            }
            break;
    }
}
trade(["Kaspichan", "-50"]);