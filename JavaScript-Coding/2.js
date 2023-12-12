function solve(arr) {

    let weaponParts = arr.shift().split('|');
    let command = arr.shift();
    let element = [];
    let newArr = [];

    while (command != "Done") {

        if (command !== undefined) {

            let tokens = command.split(' ');

            let action = tokens.shift();


            if (action == "Add") {
                let particle = tokens.shift();
                let index = tokens.shift();

                if (index >= 0 && index < weaponParts.length) {
                   newArr = weaponParts.slice(0, 1).concat(particle, weaponParts.slice(1));
                   console.log(newArr);
                }

            } else if (action == "Remove") {
                let index = tokens.shift();
                if (index >= 0 && index < weaponParts.length) {
                    newArr = weaponParts.splice(index, 1);

                }

            } 
            //else if (action == "Check") {
                
            //     let word = tokens.shift();

            //     if (word == "Even") {

            //         for (let i = 0; i < newArr.length; i += 2) {
            //             element += newArr[i] + ' ';

            //         }


            //     } else if (word == "Odd") {

            //         for (let i = 1; i < newArr.length; i += 2) {
            //             element += newArr[i] + ' ';

            //         }

            //     }
            // }

        }
        command = arr.shift();
    }

    console.log(element);
    console.log(`You crafted ${newArr.join('')}!`);

}
solve([
    "pa|Do|ha|mm|er",
    "Remove 0",
    "Add om 1",
    "Check Even",
    "Done"
])
solve(["As|hb|ri|ng|er",
    "Remove 10",
    "Add lo 5",
    "Check Odd",
    "Done"])