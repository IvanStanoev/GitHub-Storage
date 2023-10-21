function gymnastics(input) {

    let country = input[0];
    let discipline = input[1];
    let totalpoints = 0;

    if (country === "Russia") {
        switch (discipline) {
            case "ribbon": totalpoints = 9.100 + 9.400; break;
            case "hoop": totalpoints = 9.300 + 9.800; break;
            case "rope": totalpoints = 9.600 + 9.000; break;
        }
    } else if (country === "Bulgaria") {
        switch (discipline) {
            case "ribbon": totalpoints = 9.600 + 9.400; break;
            case "hoop": totalpoints = 9.550 + 9.750; break;
            case "rope": totalpoints = 9.500 + 9.400; break;
        }
    } else if (country === "Italy") {
        switch (discipline) {
            case "ribbon": totalpoints = 9.200 + 9.500; break;
            case "hoop": totalpoints = 9.450 + 9.350; break;
            case "rope": totalpoints = 9.700 + 9.150; break;
        }
    }

    let percentDifference = (20 - totalpoints) / 20 * 100;

    console.log(`The team of ${country} get ${totalpoints.toFixed(3)} on ${discipline}.`);
    console.log(`${percentDifference.toFixed(2)}%`);

}
gymnastics(["Russia", "rope"]);