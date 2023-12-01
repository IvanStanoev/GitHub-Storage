function furniture(arr) {

    let items = [];
    let totalPrice = 0;

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/g;  // в случая   >>Sofa<<312.23!3

    let command = arr.shift();

    while (command != 'Purchase') {
        let match = command.match(pattern);  // match ще бъде разно на текущата команда и сравняваме с pattern дали реда е правилен

        if (match != null) {     // if (match) {}  ако стойността е true

            let { name, price, qty } = match.groups;             // Код с деструктуриране (свойствата от обекта ги присвояваме към съответните стойности)

            let furniturePrice = Number(qty) * Number(price);   // Умножаваме количеството по цената

            items.push(name);              // пушваме името на елемнта към items
            totalPrice += furniturePrice;

            //let name = match.groups.name;                     Код без деструкттуриране
            //let price = Number(match.groups.price);
            //let qty = Number(match.groups.qty);
        }

        command = arr.shift();
    }

    console.log('Bought furniture');

    if (items.length > 0) {
        console.log(items.join('\n'));

    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}


furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);