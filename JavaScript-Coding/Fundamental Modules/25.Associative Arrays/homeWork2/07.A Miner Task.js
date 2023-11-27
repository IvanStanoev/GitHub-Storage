function minerSolve(arr) {
    
    let resorces = {};                                 // създаваме празен обект

    for (let i = 0; i < arr.length; i += 2) {
        let resorce = arr[i];                          // resorce = arr[0];      ->  resorce = arr[2];
        let qty = Number(arr[i + 1]);                  // qty = Number(arr[1]);  ->  qty = Number(arr[3]);

        if (resorce in resorces ) {
            resorces[resorce] += qty;                  // влез във resorces и вземи ключа resorce и към това количество добави qty
        } else {
            resorces[resorce] = qty;                   // добави новия ключ и задай съответната стойност (qty)
        }
    }

    let entries = Object.entries(resorces);            // преобразуваме обекта в масив
    
    for (let [resorce, qty] of entries) {              // за всяко enrtie от масива entries  деструкториране [resorce, qty] -> (entrie)
        console.log(`${resorce} -> ${qty}`);        
    }
}
minerSolve([

    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'

]);