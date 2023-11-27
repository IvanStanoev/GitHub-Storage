let mySet = new Set();

console.log(mySet);

mySet.add(5);
mySet.add(3);
mySet.add(5);

for (let entry of mySet.keys()) {
    console.log(entry);
}

for (let entry of mySet.values()) {
    console.log(entry);
}

for (let entry of mySet.entries()) {     // entries не се използва (ключа и стойността са еднакви)
    console.log(entry);
}