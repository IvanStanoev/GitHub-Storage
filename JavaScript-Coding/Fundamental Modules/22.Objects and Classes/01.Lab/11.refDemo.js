let myVar = 5;

console.log(myVar);  //1 - 5
modifyVar(myVar);
console.log(myVar);  //3 - 5

function modifyVar(externalVar) {
    externalVar++;
    console.log(externalVar);  //2 - 6
}