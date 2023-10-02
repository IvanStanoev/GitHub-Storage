function examPreparation(input) {

    let numOfBadScores = Number(input[0]);
    let index = 1;
    let command = input[index];
    let taskCounter = 0;                     //Number of problems.
    let sumOfGrades = 0;
    let badGradeCounter = 0;
    let lastTask = "";

    while (command !== "Enough") {

        taskCounter++;
        index++;

        let currentGrade = Number(input[index]);
        sumOfGrades += currentGrade;


        if (currentGrade <= 4) {
            badGradeCounter++;

            if (badGradeCounter == numOfBadScores) {
                console.log(`You need a break, ${badGradeCounter} poor grades.`);
                break;
            }
        }
        index++;
        command = input[index];
    }

    if (command === "Enough") {
        lastTask = input[index - 2];

        avgScore = sumOfGrades / taskCounter;
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${taskCounter}`);
        console.log(`Last problem: ${lastTask}`);
    }

}
examPreparation
(["3",
"Money",
"6",
"Story",
"4",
"Spring Time","5",
"Bus",
"6",
"Enough"])