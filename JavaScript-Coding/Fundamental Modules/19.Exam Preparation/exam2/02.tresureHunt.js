function tresureHunt(arr) {

    let loot = arr.shift().split('|');
    let command = arr.shift();

    while (command != 'Yohoho') {

        if (command !== undefined) {

            let tokens = command.split(' ');
            let action = tokens.shift();

            if (action == 'Loot') {
                let items = tokens.filter(item => !loot.includes(item));   // филтрираме и добавяме само тези който ги няма

                for (let item of items) {
                    loot.unshift(item);
                }

            } else if (action == 'Drop') {
                let idx = Number(tokens.shift());

                if (idx >= 0 && idx < loot.length) {
                    let removedItem = loot.splice(idx, 1).shift(); //изтрива и връща масив с 1 ел.
                    loot.push(removedItem);
                }
            } else if (action == 'Steal') {
                let count = Number(tokens.shift());
                let stolenItem = loot.splice(-count);  //при отрицател знак вадим отзад напред   -2, -1  <----
                console.log(stolenItem.join(', '));
            }

        } else {
            break;
        }
        command = arr.shift();
    }

    if (loot.length == 0) {

        console.log('Failed treasure hunt.');

    } else {

        let totalGain = 0;

        for (let item of loot) {
            totalGain += item.length;
        }

        let avgGain = totalGain / loot.length;
        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);

    }

}
tresureHunt([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
]);