function solveRace(arr) {

    let names = arr.shift().split(', ') // взимаме имената и ги сплитваме по ,
    let command = arr.shift();

    let results = {};

    let letterPattern = /[A-Za-z]/g;   //  /[a-z]/gi   case in sensetive

    let digitPattern = /\d/g;

    names.forEach(name => results[name] = 0);

    while (command != 'end of race') {
        let letterMatches = command.match(letterPattern);
        let name = letterMatches.join('');

        let digitMatches = command.match(digitPattern);
        let distance = digitMatches.map(Number).reduce((acc, val) => acc + val);

        if (name in results) {
            results[name] += distance; // ако името го има добави текущата дистанция
        }

        command = arr.shift();
    }

    let sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedResults[0][0]}`);   // влизаме в 1-вия масив [0], и си взимаме [0] от този първи масив
    console.log(`2nd place: ${sortedResults[1][0]}`);   // влизаме в 2-pия масив [1], и си взимаме [0] от този първи масив
    console.log(`3rd place: ${sortedResults[2][0]}`);   // влизаме в 3-тия масив [2], и си взимаме [0] от този първи масив

}


solveRace([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])