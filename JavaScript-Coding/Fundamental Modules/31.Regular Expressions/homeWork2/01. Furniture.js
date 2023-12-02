function furniture(arr) {

    let items = [];           // празен масив който ще пази итемите
    let totalPrice = 0;       // тук ще събираме сумите

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;  // в случая   >>Sofa<<312.23!3

    let command = arr.shift();  // командата е равна на 1-вия елем. от входния масив

    while (command != 'Purchase') {
        let match = command.match(pattern);  // match ще бъде разно на текущата команда и сравняваме с pattern дали реда е правилен

        if (match != null) {     // if (match) {}  ако стойността е true

            let { name, price, qty } = match.groups;             // Код с деструктуриране (свойствата от обекта ги присвояваме към съответните стойности)

            let furniturePrice = Number(qty) * Number(price);   // Умножаваме количеството по цената

            items.push(name);              // пушваме името на елемнта към items
            totalPrice += furniturePrice;  // към цялата цена добавяме текущата за итема

            //let name = match.groups.name;                     Код без деструкттуриране
            //let price = Number(match.groups.price);
            //let qty = Number(match.groups.qty);
        }

        command = arr.shift();  // командата е равна на 1-вия елем. от оставащия масив(вход) след като сме извадили 1 по-горе;
    }

    console.log('Bought furniture:');

    if (items.length > 0) {
        console.log(items.join('\n'));   // добавяме итемите на нов ред

    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}


furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);