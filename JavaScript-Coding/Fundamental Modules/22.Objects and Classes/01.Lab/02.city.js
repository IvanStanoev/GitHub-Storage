function solve(city) {

    for (let key in city) {
        console.log(key, "->", city[key]);
    }

    for (let entry of Object.entries(city)) {
        console.log(entry[0], "->", entry[1]);
    }

    for (let [key, value] of Object.entries(city)) {
        console.log(key, "->", value);
    }
    
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
274447