function googleSearch(input) {

    let message = input.shift();
    let command = input.shift().split(' ');


    while (command[0] != "Easter") {

        if (command[0] == "Replace") {
            let curChar = command[1];
            let newChar = command[2];

            let parts = message.split(curChar);
            message = parts.join(newChar);
            console.log(message);


        } else if (command[0] == "Remove") {
            let substring = command[1];
            message = message.replace(substring, "");
            console.log(message);

        } else if (command[0] == "Includes") {
            let string = command[1];

            if (message.includes(string)) {
                console.log("True");
            } else {
                console.log("False");
            }

        } else if (command[0] == "Change") {
            let curCase = command[1];

            if (curCase == "Upper") {
                message = message.toUpperCase();
                console.log(message);
            } else if (curCase == "Lower") {
                message = message.toLowerCase();
                console.log(message);
            }

        } else if (command[0] == "Reverse") {
            let startIndex = command[1];
            let endIndex = command[2];
            let substringToReverse = "";
            let reversed = "";

            if (startIndex < 0 || endIndex >= message.length || startIndex >= endIndex) {
                continue;
            } else {
                substringToReverse = message.substring(startIndex, endIndex + 1);
                reversed = substringToReverse.split('').reverse().join('');
            }

            let finalString = message.slice(0, startIndex, endIndex + 1);
            console.log(finalString);

        }

        command = input.shift().split(' ');

    }

}
googleSearch([

    "EasteriEggsscomming",
    "Replace b I",
    "Remove commIng",
    "Change Upper",
    "Reverse 0 5",
    "Easter"

]);