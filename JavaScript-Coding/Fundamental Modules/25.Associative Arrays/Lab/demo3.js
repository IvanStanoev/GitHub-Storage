let myObj = {
    name: 'Peter'
};

console.log(Object.hasOwn(myObj, 'name'));    // true
console.log(Object.hasOwn(myObj, 'age'));     // false

console.log(myObj.hasOwnProperty('name'));    // true