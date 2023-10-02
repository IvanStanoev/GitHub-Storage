function walking(input) {

    let goalSteps = 10000;
    let index = 0;
    let command = input[index];
    let sumOfSteps = 0;

    while (command !== "Going home") {

        let steps = Number(command);
        sumOfSteps += steps;

        if (sumOfSteps >= goalSteps) {
            let leftSteps = sumOfSteps - goalSteps;
            console.log(`Goal reached! Good job!`);
            console.log(`${leftSteps} steps over the goal!`);
            break;
        }
        index++;
        command = input[index];
    }

    if (command === "Going home") {
        index++;
        command = Number(input[index]);
        sumOfSteps += command;

        if (sumOfSteps >= goalSteps) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sumOfSteps - goalSteps} steps over the goal!`);
        } else {
            console.log(`${Math.abs(goalSteps - sumOfSteps)} more steps to reach goal.`);
        }
    }
}
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);