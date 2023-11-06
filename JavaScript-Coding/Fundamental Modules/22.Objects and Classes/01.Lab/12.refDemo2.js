let person = {
    name: "Peter",
    age: 23
};

console.log(person);
modify(person);
console.log(person);

function modify(obj) {
    obj.name = "George",
    console.log(obj);
}
