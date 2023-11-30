function partyTime(input) {

    let list = [];

    while (input[0] != 'PARTY') {
        list.push(input.shift())
    }

    input.shift();

    for (let name of input) {
        let index = list.indexOf(name);

        if (index != -1) {
            list.splice(index, 1);
        }
    }

    let vips = [];
    let regulars = [];

    for (let name of list) {

        if (name.charCodeAt(0) >= 48 && name.charCodeAt(0) <= 57) {    // връща ни кода(индека) който съответсва на ASCII кода на дадения символ
            vips.push(name);                                               // ако условието е вярно добавяме имети към vips

        } else {                             // в протиен случай
            regulars.push(name);                                 // добавяме имети към regulars
        }

    }

    console.log(list.length);

    if (vips.length > 0) {                 // ако vips = 0; няма да влиза в условието
        console.log(vips.join('\n'));
    }
    if (regulars.length > 0) {             // // ако regulars = 0; няма да влиза в условието
        console.log(regulars.join('\n'));
    }

}

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);