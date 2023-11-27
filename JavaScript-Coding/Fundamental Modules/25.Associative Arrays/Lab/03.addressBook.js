function addressBookSolve(input) {

    let addressBook = {};             // правим празен обект

    for (let item of input) {         // обхождаме го
        let [name, address] = item.split(':');     // разделяме го където е знака :

        addressBook[name] = address;            // съхраняваме го
    }

    let entries = Object.entries(addressBook);   // вадим масива с ентритата
    entries.sort((a, b) => a[0].localeCompare(b[0]));   // сортираме масива (сортиращата функция приема 2 записа, вади ключа на a[0] и го сравнява с ключа на b[0])

    // let sorted = {};

    // for (let [name, address] of entries) {
    //     sorted[name] = address;
    // }

    let sorted = Object.fromEntries(entries);    // прави същото като закоментирания пример

    for (let [name, address] of Object.entries(sorted)) {
        console.log(name, '->', address);
    }
}
addressBookSolve([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);