function solve1(arr) {

    let message = arr.shift();
    
    let sum = 0;

    while (arr[0] != "Finish") {

        let line = arr.shift();
        let tokens = line.split(' ');
        let command = tokens[0];

        switch (command) {
            case "Replace":
                let curChar = tokens[1];
                let newChar = tokens[2];

                let parts = message.split(curChar);
                message = parts.join(newChar);
                console.log(message);

                break;

            case "Make":
                let text = message.split('');
                let condition = tokens[1];
                let newmessage = '';

                if (condition == "Upper") {

                    for (let char of text) {

                        let currentChar = char.toUpperCase();
                        newmessage += currentChar;

                    }


                } else if (condition == "Lower") {

                    for (let char of text) {

                        let currentChar = char.toLowerCase();
                        newmessage += currentChar;

                    }
                }
                message = newmessage;
                console.log(message);


                break;

            case "Check":
                let givenStr = tokens[1];
                if (message.includes(givenStr)) {   // ако думата я има
                    console.log(`Message contains ${givenStr}`);       // отпечатай я
                } else {                     // ако я няма
                    console.log(`Message doesn\'t contain ${givenStr}`);   // отпечатай (думата not found!)
                }

                break;
            case "Sum":
                let start = tokens[1];
                let end = (Number(tokens[2]) + 1) + '';
                let ascii = message.slice(start, end);

                for (let cur of ascii) {
                    let n = cur.charCodeAt();
                    sum += n;

                }

                if ((start > 0 && start < message.length) && (end > 0 && end < message.length)) {
                    console.log(sum);
                } else {                     // ако я няма
                    console.log(`Invalid indices!`);   // отпечатай (думата not found!)
                }


                break;
            case "Cut":
                let startIndex = (tokens[1]);
                let endIndex = (Number(tokens[2]) + 1) + '';
                let mid = message.slice(startIndex, endIndex);
                
                console.log(message);


                break;


        }


    }

}

solve1([
    "ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"
])
// solve1([
//     "HappyNameDay",
//     "Replace p r",
//     "Make Lower",
//     "Cut 2 23",
//     "Sum -2 2",
//     "Finish"
// ])