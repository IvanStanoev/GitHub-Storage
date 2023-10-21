function solve3(input) {

    let name = input[0];
    let peaces = Number(input[1]);
    let day = Number(input[2]);
    let sum = 0;

    switch (name) {
        case "Cake":
            if (day <= 15) {
                sum += peaces * 24;
            } else if (day > 15) {
                sum += peaces * 28.70;
            }
            break;

        case "Souffle":
            if (day <= 15) {
                sum += peaces * 6.66;
            } else if (day > 15) {
                sum += peaces * 9.80;
            }

            break;

        case "Baklava":
            if (day <= 15) {
                sum += peaces * 12.60;
            } else if (day > 15) {
                sum += peaces * 16.98;
            }

            break;
    }

    if (day <= 22) {

        if (sum >= 100 && sum <= 200) {
            sum *= 0.85;
        }
        if (sum > 200) {
            sum *= 0.75;
        }
        if (day <= 15) {
            sum *= 0.90;
        }
    }

    console.log(`${sum.toFixed(2)}`);
}
solve3(["Cake", "5", "12"]);