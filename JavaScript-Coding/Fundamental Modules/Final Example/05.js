function imitationGame(arr) {

    let encryptedMsg = arr.shift();
    let command = arr.shift();

    while (command != 'Decode') {

        let tokens = command.split('|');
        let action = tokens.shift();

        if (action == 'Move') {

            let lettersCount = Number(tokens.shift());
            let firstLetter = encryptedMsg.slice(0, lettersCount);

            encryptedMsg = encryptedMsg.replace(firstLetter, '');
            encryptedMsg += firstLetter;

        } else if (action == 'Insert') {
            let idx = Number(tokens.shift());
            let val = tokens.shift();

            encryptedMsg = encryptedMsg.slice(0, idx) + val + encryptedMsg.slice(idx);

        } else {
            let [substring, replacement] = tokens;

            while (encryptedMsg.includes(substring)) {

                encryptedMsg = encryptedMsg.replace(substring, replacement);
            }
        }

        command = arr.shift();

    }

    console.log(`The decrypted message is: ${encryptedMsg}`);

}

imitationGame([

    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'

])