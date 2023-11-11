function muOnline(arr) {

    let hp = 100;
    let coins = 0;

    // parse input into rooms
    
    let rooms = arr.split("|");

    // for every room
    for (let i = 0; i < rooms.length; i++) {

        // -parse current room
        let room = rooms[i].split(' ');
        // -check keyword and perform action
        let type = room[0];
        let num = Number(room[1]);

        // -- if potion, (to max 100) heal and print message
        if (type == 'potion') {
            if (hp + num > 100) {
                num = 100 - hp;
            }
            hp += num;
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${hp} hp.`);

            // -- if chest, collect loot and print message
        } else if (type == 'chest') {
            coins += num;
            console.log(`You found ${num} bitcoins.`);

            // -- otherwise, fight monster and subtract health
        } else {
            hp -= num;

            // --- if health <= 0 -> print death message and stop application
            if (hp <= 0) {
                console.log(`You died! Killed by ${type}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            } else {
                console.log(`You slayed ${type}.`);
            }
        }

    }

    // if successful, print result
    console.log('You\'ve made it!');
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${hp}`);

}
muOnline(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);