let peter = {
    name: "Peter",
    age: 20,
    height: 183,
    sayHello() {
        console.log('Hello!');
    }
    
};

let keys = Object.keys(peter);
let values = Object.values(peter);
let entries = Object.entries(peter);
console.log(entries);
