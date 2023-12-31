function secretChat(arr) {

    let message = arr.shift();

    while (arr[0] != 'Reveal') {

        let line = arr.shift();
        let tokens = line.split(':|:');
        let command = tokens[0];

        switch (command) {

            case 'InsertSpace':

                let index = Number(tokens[1]);
                let firstHalf = message.slice(0, index);
                let secondHalf = message.slice(index);

                message = firstHalf + ' ' + secondHalf;
                break;

            case 'Reverse':

                let substring = tokens[1];
                let firstIndex = message.indexOf(substring);

                if (firstIndex == -1) {
                    console.log('error');
                    continue;
                }

                let left = message.slice(0, firstIndex);
                let rigth = message.slice(firstIndex + substring.length);

                message = left + rigth + substring.split('').reverse().join('');
                break;

            case 'ChangeAll':

                let match = tokens[1];
                let replacement = tokens[2];
                let parts = message.split(match);

                message = parts.join(replacement);
                break;

        }

        console.log(message);
    }

    console.log(`You have a new text message: ${message}`);

}

secretChat([

    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'

])