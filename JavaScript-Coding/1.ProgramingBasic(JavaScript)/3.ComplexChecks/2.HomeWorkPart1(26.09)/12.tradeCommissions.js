function tradeCommpision(input) {

    let city = input[0];
    let sell = Number(input[1]);
    let comision = 0;

    if (city == "Sofia") {
        if (sell >= 0 && sell <= 500) {
            comision = 0.05;
        } else if (sell > 500 && sell <= 1000) {
            comision = 0.07;
        } else if (sell > 1000 & sell <= 10000) {
            comision = 0.08;
        } else if (sell > 10000) {
            comision = 0.12
        }
    } else if (city == "Varna") {
        if (sell >= 0 && sell <= 500) {
            comision = 0.045;
        } else if (sell > 500 && sell <= 1000) {
            comision = 0.075;
        } else if (sell > 1000 & sell <= 10000) {
            comision = 0.10;
        } else if (sell > 10000) {
            comision = 0.13
        }
    } else if (city == "Plovdiv") {
        if (sell >= 0 && sell <= 500) {
            comision = 0.055;
        } else if (sell > 500 && sell <= 1000) {
            comision = 0.08;
        } else if (sell > 1000 & sell <= 10000) {
            comision = 0.12;
        } else if (sell > 10000) {
            comision = 0.145
        }
    }
    if (comision !== 0) {
        let total = sell * comision
        console.log(total.toFixed(2))
    } else {
        console.log("error")
    }
}
tradeCommpision(["Sofia", "1500"])