function convert(str) {
    
    let person = JSON.parse(str);
    let entries = Object.entries(person);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
    
}
convert('{"name": "George", "age": 40, "town": "Sofia"}')