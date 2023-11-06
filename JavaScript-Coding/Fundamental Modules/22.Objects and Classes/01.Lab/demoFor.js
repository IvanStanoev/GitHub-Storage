let peter = {
    name: "Peter",
    age: 20,
    height: 183,
    sayHello() {
        console.log('Hello!');
    }
    
};

let keys = Object.keys(peter);

    for (let key of keys) {
        console.log(key, "->", peter[key]);
    }

    for (let key in peter) {
        console.log(key, "->", peter[key]);
    }