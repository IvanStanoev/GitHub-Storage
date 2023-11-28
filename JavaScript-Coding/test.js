function legendaryFarming(str) {
    
    let keyMaterials = {      // обект 
        shards: 0,            // ключ (shards) със стойност 0
        fragments: 0,         // ключ (fragments) със стойност 0
        motes: 0              // ключ (motes) със стойност 0
    };

    let junkMaterials = {};

    let materialsArr = str.split(' ');   // разделя (str) на масив от елементи (всеки отделен от другия)
    console.log(materialsArr);
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');