function graduation(input) {

    let name = input[0];
    let grade = 1;
    let sumGrade = 0;

    let currentGrade = Number(input[grade]);
    let excluded = 0;

    while (grade <= 12) {

        if (currentGrade < 4) {
            excluded++;
        }
        if (excluded > 1) {
            console.log(`${name} has been excluded at ${grade - 1} grade`);
            break;
        }

        sumGrade += currentGrade;
        grade++;
        currentGrade = Number(input[grade]);
    }

    let avgGrade = sumGrade / 12;
    if (excluded < 2) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);