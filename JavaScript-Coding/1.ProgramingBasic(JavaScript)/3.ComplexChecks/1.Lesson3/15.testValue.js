function logicOperators(input) {
    
    let hour = Number(input[0]);
    
    if (hour >= 10 && hour <= 18 && hour != 0) {
        console.log("open");
    } else {
        console.log("closed");
    }
}
logicOperators(["20"]);