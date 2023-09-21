function switchCase(input) {

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
        case "Thuesday":
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
    default: {
            console.log("closed")
        } break;
        
    }

}
switchCase(["11", "Saturday"]);

// case 'name': have if(){} function
// break; should exist after every case
// default: have else {} function
// when break; miss all case will be typed at console.log()   