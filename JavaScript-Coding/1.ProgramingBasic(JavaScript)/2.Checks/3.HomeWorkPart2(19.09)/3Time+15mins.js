function timeAdd15Minutes(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let timeInMinutes = hours * 60 + minutes;
    timeInMinutes = timeInMinutes + 15;

    let h = Math.floor(timeInMinutes / 60);
    let m = timeInMinutes % 60;

    if (h >= 24) {
        h = 0;
    }
    if (m < 10) {
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`);
    }

}
timeAdd15Minutes(["1", "46"])
timeAdd15Minutes(["0", "01"])
timeAdd15Minutes(["23", "59"])
timeAdd15Minutes(["11", "08"])
timeAdd15Minutes(["12", "49"])