function solve(arr) {

    let count = Number(arr.shift());
    let counter = 0;
    let pattern = /([$%])(?<name>[A-Za-z]+)\1(: )(\[)(?<num1>\d+)(\])(\|)(\[)(?<num2>\d+)(\])\7(\[)(?<num3>\d+)(\])\7/;

    let command = arr.shift();

    while (command != undefined) {

        let match = command.match(pattern);
        
        if (!match || (command.length != match[0].length)) {
            
            console.log('Valid message not found!');
            
        } else {
            
            let { name, num1, num2, num3 } = match.groups;
            
            let letter1 = String.fromCharCode(Number(num1));
            let letter2 = String.fromCharCode(Number(num2));
            let letter3 = String.fromCharCode(Number(num3));
            let sum = letter1 + letter2 + letter3;

            console.log(`${name}: ${sum}`);
            
        }

        counter++;

        if (counter == count) {
            break;
        }

        command = arr.shift();
    }

}


solve([
    "3",
    "This should be valid%Taggy%: [118]|[97]|[108]|",
    "$tAGged$: [97][97][97]|",
    "$Request$: [73]|[115]|[105]|true"
]);