function phoneBook(input) {
   
    let phoneBook = {};

    for (let item of input) {
        let [name, phone] = item.split(' ');

        phoneBook[name] = phone;
    }

    for (let [name, phone] of Object.entries(phoneBook)) {
        console.log(name, '->', phone);
    }

    for (let entry of Object.entries(phoneBook)) {        // този for(loop) е същия 2-рия
        console.log(entry.join(' -> '));
    }

    let output = Object.entries(phoneBook)
        .map(entry => entry.join(' '))
        .join('\n');
    console.log(output);

    console.log(Object.entries(phoneBook)          // същия пример като горния без променливата output
    .map(entry => entry.join(' '))
    .join('\n'));

}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);