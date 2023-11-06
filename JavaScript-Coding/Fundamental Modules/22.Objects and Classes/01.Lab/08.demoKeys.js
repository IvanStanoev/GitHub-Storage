let peter = {
    name: "Peter",
    age: 20,
    height: 183,
    sayHello() {
        console.log("Hello!");
    }
    
};

let keys = Object.keys(peter);
console.log(peter[keys[0]]);