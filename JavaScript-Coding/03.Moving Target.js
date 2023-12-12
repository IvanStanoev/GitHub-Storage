function solve(arr) {

    let targets = arr.shift().split(' ').map(Number);   // в променливата target държим мишените с техните стойности

    for (let current of arr) {

        let tokens = current.split(' ');
        let command = tokens.shift(' ');

        if (command == "Shoot") {
            let index = Number(tokens[0]);
            let demage = Number(tokens[1]);
            if (index < 0 || index > targets.length) {
                continue;
            }
            targets[index] -= demage;
            if (targets[index] <= 0) {
                //targets.splice(index, 1);
            }
        } else if (command == "Add") {
            let index = Number(tokens[0]);
            let value = Number(tokens[1]);
            if (index < 0 || index > targets.length) {
                console.log('Invalid placement!');
            } else {
                targets[index] += value;
            }
        } else if (command == "Strike") {

            let index = Number(tokens[0]);
            let value = Number(tokens[1]);
            
            let check = targets.splice((index - value), value * 2 + 1);

            for (let cur of check) {

                if (cur < 0) {
                console.log('Strike missed!');
                continue;
                }
            }


        } else if (command == "End") {
            console.log(`${targets.join('|')}`);
        }
    }

}
solve([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"
 ])
// solve([
//     "1 2 3 4 5",
//     "Strike 0 1",
//     "End"
// ])