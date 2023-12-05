function adAstra(arr) {

    let str = arr.shift();
    let pattern = /([#|])(?<name>[A-Za-z\s]+)\1(?<expdate>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g;

    let totalKcals = 0;
    let products = [];

    let matches = str.matchAll(pattern);

    for (let match of matches) {

        let { name, expdate, kcal } = match.groups;
        kcal = Number(kcal);

        totalKcals += kcal;
        products.push({ name: name, expdate: expdate, kcal: kcal });
    }

    let days = Math.floor(totalKcals / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    products.forEach(products => console.log(`Item: ${products.name}, Best before: ${products.expdate}, Nutrition: ${products.kcal}`));

}

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])