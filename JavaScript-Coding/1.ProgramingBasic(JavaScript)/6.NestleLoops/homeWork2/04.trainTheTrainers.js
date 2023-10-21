function trainTheTrainers(input) {

    let judgesCount = Number(input[0]);
    let command = input[1];
    let index = 2;

    let totalGradeSum = 0;
    let totalGradeCount = 0;

    while (command !== "Finish") {

        let pName = command;
        let gradeSum = 0;

        for (let curJudge = 1; curJudge <= judgesCount; curJudge++) {

            let grade = Number(input[index]);
            index++;

            gradeSum += grade;
        }

        let avgGrade = gradeSum / judgesCount;
        console.log(`${pName} - ${avgGrade.toFixed(2)}.`);

        totalGradeSum += avgGrade;
        totalGradeCount++;

        command = input[index];
        index++;
    }

    let totalAvgGrade = totalGradeSum / totalGradeCount;
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);
}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])