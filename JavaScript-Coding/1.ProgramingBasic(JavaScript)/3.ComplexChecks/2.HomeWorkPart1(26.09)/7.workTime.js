function workTime(input) {

    let hour = Number(input[0]);
    let days = String(input[1]);

    switch (days) {
        case "Monday":
            if (hour >= 10 && hour <= 18 && hour != 0) {
                console.log("open");
            } else {
                console.log("closed");
            } break;
        case "Tuesday":
            if (hour >= 10 && hour <= 18 && hour != 0) {
                console.log("open");
            } else {
                console.log("closed");
            } break;
        case "Wednesday":
            if (hour >= 10 && hour <= 18 && hour != 0) {
                console.log("open");
            } else {
                console.log("closed");
            } break;
        case "Thursday":
            if (hour >= 10 && hour <= 18 && hour != 0) {
                console.log("open");
            } else {
                console.log("closed");
            } break;
        case "Friday":
            if (hour >= 10 && hour <= 18 && hour != 0) {
                console.log("open");
            } else {
                console.log("closed");
            } break;
        case "Saturday":
            if (hour >= 10 && hour <= 18 && hour != 0) {
                console.log("open");
            } else {
                console.log("closed");
            } break;
        case "Sunday":
            console.log("closed");
            break;
        default:
            console.log("closed");
            break;
        
    }

}
workTime(["11", "Sunday"]);