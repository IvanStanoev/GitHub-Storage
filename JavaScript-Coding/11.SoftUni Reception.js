function solve(input) {

    let employee1 = Number(input[0]);   // number of questions per hour for 1 employee
    let employee2 = Number(input[1]);   // number of questions per hour for 2 employee
    let employee3 = Number(input[2]);   // number of questions per hour for 3 employee

    let studentsCount = Number(input[3]);
    let qst = 0;

    let hours = 0;
    for (let i = 0; i < studentsCount; i++) {

        hours++;
        if (hours % 4 == 0) {
            hours += 1;
        }

        qst += employee1 + employee2 + employee3;
        if (qst >= studentsCount) {
            break;
        }

    }

    console.log(`Time needed: ${hours}h.`);
}
//solve(["5", "6", "4", "20"]);
solve(["1", "2", "3", "45"]);