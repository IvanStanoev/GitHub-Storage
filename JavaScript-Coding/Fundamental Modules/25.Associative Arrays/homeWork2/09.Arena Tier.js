function arenaTierSolve(input) {

    let arena = {};

    while (input[0] != 'Ave Cesar') {
        let line = input.shift();
        let tokens = line.split(' -> ');

        if (tokens.length == 3) {
            let name = tokens[0];
            let tech = tokens[1];
            let skill = Number(tokens[2]);

            if (arena.hasOwnProperty(name) == false) {
                arena[name] = {};
            }
            let gladiator = arena[name];

            if (gladiator.hasOwnProperty(tech) == false || gladiator[tech] < skill) {  // ако техниката я няма или я има и е по-малка от skill
                gladiator[tech] = skill;                                               // презапиши техниката
            }

        } else {
            let [nameA, nameB] = line.split(' vs ');
            let a = arena[nameA];
            let b = arena[nameB];

            if (!a || !b) {
                continue;
            }

            let techsA = Object.keys(a);
            let techsB = Object.keys(b);
            let hasMatch = false;

            for (let [tech] of techsA) {
                if (techsB.includes(tech)) {
                    hasMatch = true;
                }
            }

            if (!hasMatch) {
                continue;
            }

            let totalA = 0;
            let totalB = 0;

            for (let skill of Object.values(techsA)) {
                totalA += skill;
            }

            for (let skill of Object.values(techsB)) {
                totalB += skill;
            }

            if (totalA > totalB) {
                delete arena[nameA];
            } else {
                delete arena[nameB];
            }
        }

    }

} 



arenaTierSolve([

    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    
]);