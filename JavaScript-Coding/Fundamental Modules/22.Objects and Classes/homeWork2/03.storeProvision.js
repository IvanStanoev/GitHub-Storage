function storeProvision(stock, orderedProducts) {
    let products = {};

    for (let i = 0; i < stock.length; i += 2) {
        let productName = stock[i];
        let qty = Number(stock[i + 1]);

        products[productName] = qty;      // създаваме ключ [productName] със стойност qty ({Chips: 5})
    }

    for (let j = 0; j < orderedProducts.length; j += 2) {

        let productName = orderedProducts[j];
        let qty = Number(orderedProducts[j + 1]);

        if (productName in products) {        // проверяваме дали продукта го има във вече получения списък с продукти
            products[productName] += qty;     // ако вече има такъв продукт само добавяме количеството;
        } else {
            products[productName] = qty;      // създаваме ключ [productName] със стойност qty и се добавят към 1-вия списък
        }
    }

    let entries = Object.entries(products);

    for (let entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]);