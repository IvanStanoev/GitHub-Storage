function traveling(input) {

    let index = 0;
    let destination = String(input[index]);
    index++;
    let price = Number(input[index]);
    index++;
    let sum = 0;

    while (destination !== "End") {


        for (let i = 2; sum <= price; i++) {

            curSum = Number(input[index]);
            sum += curSum;


            if (sum >= price) {
                console.log(`Going to ${destination}!`);
                index++;
                destination = input[index];
                if (destination === "End") {
                    return;
                }
                index++;
                price = Number(input[index]);
                sum = 0;
            }
            index++;
        }
    }
}
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])