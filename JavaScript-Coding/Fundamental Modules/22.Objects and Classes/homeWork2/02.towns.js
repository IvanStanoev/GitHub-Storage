function towns(arr) {
    
    for (let town of arr) {

        let [townName, latitude, longitude] = town.split (' | ');   // деструкториране на на ел в отделен масив

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townObj = { town: townName, latitude: latitude, longitude: longitude };   // обект за града, географската ширина и дължина.
        console.log(townObj);
        
    }

}
towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);