function daysOfWeek(input) {

    let number = Number(input[0]);
    switch (number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error");
            break;
    }
}
daysOfWeek(["1"])
daysOfWeek(["2"])
daysOfWeek(["3"])
daysOfWeek(["4"])
daysOfWeek(["5"])
daysOfWeek(["6"])
daysOfWeek(["7"])
daysOfWeek(["-1"])

//function profit(input) {
//
//    let day = Number(input[0]);
//    let currentDay = "";
//
//    if (day < 1 || day > 7) {
//        console.log(`Error`);
//        return;
//    }
//
//    switch (day) {
//        case 1: currentDay = "Monday";
//            break;
//        case 2: currentDay = "Tuesday";
//            break;
//        case 3: currentDay = "Wednesday";
//            break;
//        case 4: currentDay = "Thursday";
//            break;
//        case 5: currentDay = "Friday";
//            break;
//        case 6: currentDay = "Saturday";
//            break;
//        case 7: currentDay = "Sunday";
//            break;
//    }
//    console.log(currentDay);
//}