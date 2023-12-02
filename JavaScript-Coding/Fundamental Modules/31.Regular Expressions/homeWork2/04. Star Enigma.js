function starEnigma(arr) {

    let msgCount = Number(arr.shift());
    let decryptedMsgs = [];

    starPattern = /[star]/gi;  // без [] ще търсим цялата дума, с [] вече търсим всяка буква по-отделно  gi за case insensetive

    for (let i = 0; i < msgCount; i++) {
        let msg = arr[i];
        let decryptedMsg = '';

        let matches = msg.match(starPattern);   // опитваме да мачнем командата с pattern


        if (matches) {
            let count = matches.length;

            for (let char of msg) {
                let code = char.charCodeAt();  // ASCI
                code -= count;

                let newChar = String.fromCharCode(code);
                decryptedMsg += newChar;
            }
        } else {
            decryptedMsg = msg;
        }

        decryptedMsgs.push(decryptedMsg);
    }


    let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let msg of decryptedMsgs) {
        let match = msg.match(planetPattern);

        if (match) {
            let { name, type } = match.groups;

            if (type == 'A') {
                attackedPlanets.push(name);
            } else {
                destroyedPlanets.push(name);
            }
        }
    }
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(planet => console.log(`-> ${planet}`));

}

starEnigma(['3',

"tt(''DGsvywgerx>6444444444%H%1B9444",

'GQhrr|A977777(H(TTTT',

'EHfsytsnhf?8555&I&2C9555SR'])