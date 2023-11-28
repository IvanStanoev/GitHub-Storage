function legendaryFarming(str) {
    
    let keyMaterials = {      // обект 
        shards: 0,            // ключ (shards) със стойност 0
        fragments: 0,         // ключ (fragments) със стойност 0
        motes: 0              // ключ (motes) със стойност 0
    };

    let junkMaterials = {};

    let legendaries = {
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath'
    };

    let materialsArr = str.split(' ');   // разделя (str) на масив от елементи (всеки отделен от другия)

    for (let i = 0; i < materialsArr.length; i += 2) {      // на всяко завъртане взимаме по 2 елемента ['0','1'] ['2','3'] ['4','5'] ...

        let qty = Number(materialsArr[i]);                  // количеството на [i] - [0] индекс
        let material = materialsArr[i + 1].toLowerCase();   // материялите на [i + 1] - [1] индекс
        
        if (material in keyMaterials) {
            keyMaterials[material] += qty;

            if (keyMaterials[material] >= 250) {
                let legendaryWon = legendaries[material];
                console.log(`${legendaryWon} obtained!`);
                keyMaterials[material] -= 250;
                break;
            }
        } else {
            if (material in junkMaterials) {
                junkMaterials[material] += qty;
            } else {
                junkMaterials[material] = qty;
            }
        }
        
    }

    let keyMaterialsEntries = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let [material, qty] of keyMaterialsEntries) {
        console.log(`${material}: ${qty}`);
    }

    let junkMaterialsEntries = Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [material, qty] of junkMaterialsEntries) {
        console.log(`${material}: ${qty}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');